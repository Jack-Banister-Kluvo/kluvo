import { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import digitalEarthTexture from '@/assets/digital-earth-texture.jpg';

// Coordinates for office locations
const locations = [
  {
    name: 'Beirut, Lebanon',
    lat: 33.8938,
    lng: 35.5018,
    color: '#10B981' // Emerald green
  },
  {
    name: 'Kuala Lumpur, Malaysia', 
    lat: 3.139,
    lng: 101.6869,
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
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(hovered ? 1.2 : 1);
      meshRef.current.position.copy(position);
      // Make pin point outward from globe center
      meshRef.current.lookAt(position.clone().multiplyScalar(2));
      
      // Check if this side of the globe is facing the camera
      const cameraDirection = state.camera.position.clone().normalize();
      const pinDirection = position.clone().normalize();
      const dotProduct = pinDirection.dot(cameraDirection);
      
      // Only show label when pin is facing towards camera (dot product > 0)
      setIsVisible(dotProduct > 0);
    }
  });

  return (
    <group>
      {/* Main white dot */}
      <mesh
        ref={meshRef}
        position={position}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff"
          emissiveIntensity={hovered ? 0.6 : 0.3}
        />
      </mesh>
      
      {/* Larger glowing halo */}
      <mesh position={position}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial 
          color="#ffffff"
          emissive="#ffffff" 
          emissiveIntensity={0.1}
          transparent={true}
          opacity={0.4}
        />
      </mesh>
      
      {/* Outer glow ring */}
      <mesh position={position}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial 
          color="#ffffff"
          emissive="#ffffff" 
          emissiveIntensity={0.05}
          transparent={true}
          opacity={0.2}
        />
      </mesh>
      
      {/* Permanent label above the pin - only show when visible */}
      {isVisible && (
        <Html 
          position={[position.x, position.y + 0.12, position.z]}
          center
          distanceFactor={12}
        >
          <div className="text-white text-xs font-medium whitespace-nowrap text-center drop-shadow-lg">
            {name}
          </div>
        </Html>
      )}
      
      {/* Hover tooltip with additional info */}
      {hovered && (
        <Html position={[position.x, position.y - 0.15, position.z]} center>
          <div className="bg-black/80 px-3 py-1 rounded-lg shadow-lg border border-white/20 text-xs text-white whitespace-nowrap backdrop-blur-sm">
            Office Location
          </div>
        </Html>
      )}
    </group>
  );
}

function Globe() {
  const globeRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, digitalEarthTexture);
  
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002; // Much slower rotation
    }
  });

  // Create location pins
  const pins = locations.map((location, index) => {
    const position = latLngToVector3(location.lat, location.lng, 1.02);
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
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          map={texture}
          roughness={0.3}
          metalness={0.8}
          emissive="#001100"
          emissiveIntensity={0.2}
        />
      </mesh>
      {pins}
    </group>
  );
}

const WorldMap = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Digital grid background */}
      <div className="absolute inset-0 bg-pattern-grid bg-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Global Presence, Local Expertise
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Our teams operate from modern offices in Beirut and Kuala Lumpur, 
            delivering world-class outbound sales services with local market understanding.
          </p>
        </div>
        
        <div className="relative">
          <div className="w-full h-96 md:h-[500px] bg-black/50 rounded-2xl overflow-hidden shadow-glow border border-accent/30 backdrop-blur-sm">
            <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
              <ambientLight intensity={0.3} />
              <directionalLight 
                position={[5, 5, 5]} 
                intensity={1}
                castShadow
              />
              <pointLight position={[-5, -5, -5]} intensity={0.5} />
              
              <Globe />
              
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate={false}
                enableDamping={true}
                dampingFactor={0.05}
                rotateSpeed={0.5}
              />
            </Canvas>
          </div>
          
          {/* Location details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="text-center p-8 bg-card rounded-xl shadow-soft">
              <div className="w-4 h-4 bg-accent rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Beirut, Lebanon</h3>
              <p className="text-muted-foreground">
                Our Middle East hub serving European and regional markets with perfect timezone coverage.
              </p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-xl shadow-soft">
              <div className="w-4 h-4 bg-accent rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Kuala Lumpur, Malaysia</h3>
              <p className="text-muted-foreground">
                Our Asia-Pacific center providing comprehensive coverage for global business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;