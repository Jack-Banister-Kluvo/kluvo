import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import BookingModal from "./BookingModal";
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import premiumDigitalEarth from '@/assets/premium-digital-earth.jpg';
import ultraHdEarthTexture from '@/assets/ultra-hd-earth-texture.jpg';

// Coordinates for office locations
const locations = [
  {
    name: 'Beirut, Lebanon',
    lat: 33.8938,
    lng: 35.5018,
    color: '#10B981'
  },
  {
    name: 'Kuala Lumpur, Malaysia', 
    lat: 3.139,
    lng: 101.6869,
    color: '#10B981'
  },
  {
    name: 'Leeds, United Kingdom',
    lat: 53.8008,
    lng: -1.5491,
    color: '#10B981'
  }
];

// Convert lat/lng to 3D coordinates
function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
}

function LocationPin({ position, name, color }: { position: THREE.Vector3; name: string; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerGlowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      meshRef.current.scale.setScalar(hovered ? 1.2 : 1);
      meshRef.current.position.copy(position);
      meshRef.current.lookAt(position.clone().multiplyScalar(2));
      
      const pulseScale = 1 + 0.3 * Math.sin(time * 3);
      const emissiveIntensity = 0.5 + 0.4 * Math.sin(time * 2);
      (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = emissiveIntensity;
      
      const cameraDirection = state.camera.position.clone().normalize();
      const pinDirection = position.clone().normalize();
      const dotProduct = pinDirection.dot(cameraDirection);
      setIsVisible(dotProduct > 0);
    }

    if (outerGlowRef.current) {
      const glowPulse = 1 + 0.5 * Math.sin(time * 2 + 1);
      outerGlowRef.current.scale.setScalar(glowPulse);
      (outerGlowRef.current.material as THREE.MeshStandardMaterial).opacity = 
        0.2 + 0.2 * Math.sin(time * 2);
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        position={position}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <sphereGeometry args={[0.025, 16, 16]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff"
          emissiveIntensity={0.8}
          toneMapped={false}
        />
      </mesh>
      
      <mesh position={position}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial 
          color="#ffffff"
          emissive="#ffffff" 
          emissiveIntensity={0.3}
          transparent={true}
          opacity={0.6}
          toneMapped={false}
        />
      </mesh>
      
      <mesh ref={outerGlowRef} position={position}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial 
          color="#ffffff"
          emissive="#ffffff" 
          emissiveIntensity={0.1}
          transparent={true}
          opacity={0.3}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function createCurvedPath(start: THREE.Vector3, end: THREE.Vector3, segments: number = 50) {
  const points = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const point = start.clone().lerp(end, t);
    point.normalize().multiplyScalar(1.05);
    points.push(point);
  }
  return points;
}

function ConnectionLines() {
  const lineRefs = useRef<THREE.Line[]>([]);
  const materialRefs = useRef<THREE.LineBasicMaterial[]>([]);
  
  const positions = locations.map(location => 
    latLngToVector3(location.lat, location.lng, 1.05)
  );
  
  const connections = [
    { start: positions[0], end: positions[1] },
    { start: positions[1], end: positions[2] },
    { start: positions[2], end: positions[0] }
  ];
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    materialRefs.current.forEach((material, index) => {
      if (material) {
        const phase = time * 2 + index * (Math.PI * 2 / 3);
        material.opacity = 0.3 + 0.4 * Math.sin(phase);
      }
    });
  });
  
  return (
    <group>
      {connections.map((connection, index) => {
        const points = createCurvedPath(connection.start, connection.end);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        return (
          <primitive key={index} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({
            color: "#00ff41",
            transparent: true,
            opacity: 0.5,
          }))} 
          ref={(ref) => {
            if (ref) {
              lineRefs.current[index] = ref;
              materialRefs.current[index] = ref.material;
            }
          }}
          />
        );
      })}
    </group>
  );
}

function Globe() {
  const globeRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, ultraHdEarthTexture);
  
  const earthMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.7,
    metalness: 0.1,
    emissive: new THREE.Color(0x112244),
    emissiveIntensity: 0.2,
    transparent: false,
  });
  
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  const pins = locations.map((location, index) => {
    const position = latLngToVector3(location.lat, location.lng, 1.01);
    return (
      <LocationPin
        key={index}
        position={position}
        name={location.name}
        color={location.color}
      />
    );
  });

  return (
    <group ref={globeRef}>
      <mesh>
        <sphereGeometry args={[1, 256, 256]} />
        <primitive object={earthMaterial} />
      </mesh>
      <ConnectionLines />
      {pins}
    </group>
  );
}

const Hero = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Textured Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-pattern-dots bg-dots opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Your Outbound Sales Team,
              <span className="block text-accent font-extrabold drop-shadow-md"> Without The Headache</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-white/95 leading-relaxed drop-shadow-md">
              We plug a complete, fully-managed outbound sales desk into your business. 
              <span className="block mt-2 font-semibold text-accent drop-shadow-sm">No hiring, training, or supervision required—just results.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button 
                variant="hero" 
                size="xl" 
                className="min-w-48"
                onClick={() => setBookingModalOpen(true)}
              >
                Book a Call
              </Button>
              <Button variant="outline" size="xl" className="min-w-48 bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <a href="#features">
                  Learn More
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Globe with floating stats */}
          <div className="relative">
            <div className="w-full h-96 md:h-[500px] relative flex items-center justify-center">
              <div className="w-80 h-80 md:w-96 md:h-96">
                <Canvas camera={{ position: [0, 0, 2.8], fov: 50 }}>
                  <ambientLight intensity={0.2} />
                  <directionalLight 
                    position={[2, 2, 5]} 
                    intensity={0.6} 
                    color="#ffffff"
                  />
                  <pointLight 
                    position={[-2, -2, -5]} 
                    intensity={0.4} 
                    color="#4488ff"
                  />
                  
                  <Globe />
                  
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={false}
                    enableDamping={true}
                    dampingFactor={0.05}
                    rotateSpeed={0.3}
                  />
                </Canvas>
              </div>
              
              {/* Floating stat cards with connecting lines */}
              <div className="absolute top-8 left-4 bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-accent/30 shadow-glow">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-white/80">Global Coverage</div>
                <div className="absolute top-1/2 left-full w-16 h-0.5 bg-gradient-to-r from-accent/60 to-transparent"></div>
                <div className="absolute top-1/2 left-full translate-x-16 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              </div>
              
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-accent/30 shadow-glow">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">95%+</div>
                <div className="text-sm text-white/80">Meeting Show Rate</div>
                <div className="absolute top-1/2 right-full w-16 h-0.5 bg-gradient-to-l from-accent/60 to-transparent"></div>
                <div className="absolute top-1/2 right-full -translate-x-16 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-accent/30 shadow-glow">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">3x</div>
                <div className="text-sm text-white/80">Faster Pipeline</div>
                <div className="absolute bottom-1/2 left-full w-16 h-0.5 bg-gradient-to-r from-accent/60 to-transparent rotate-45 origin-left"></div>
                <div className="absolute bottom-1/2 left-full translate-x-12 translate-y-3 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BookingModal 
        open={bookingModalOpen} 
        onOpenChange={setBookingModalOpen} 
      />
    </section>
  );
};

export default Hero;