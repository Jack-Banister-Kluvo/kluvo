import { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

// Use a realistic Earth texture with city lights
const earthTextureUrl = 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=2048&q=80';

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
      
      // Pulsing animation
      const pulseScale = 1 + 0.3 * Math.sin(time * 3);
      const emissiveIntensity = 0.5 + 0.4 * Math.sin(time * 2);
      (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = emissiveIntensity;
      
      // Check visibility
      const cameraDirection = state.camera.position.clone().normalize();
      const pinDirection = position.clone().normalize();
      const dotProduct = pinDirection.dot(cameraDirection);
      setIsVisible(dotProduct > 0);
    }

    if (outerGlowRef.current) {
      // Animated glow effect
      const glowPulse = 1 + 0.5 * Math.sin(time * 2 + 1);
      outerGlowRef.current.scale.setScalar(glowPulse);
      (outerGlowRef.current.material as THREE.MeshStandardMaterial).opacity = 
        0.2 + 0.2 * Math.sin(time * 2);
    }
  });

  return (
    <group>
      {/* Main white dot with pulsing effect */}
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
      
      {/* Inner glow */}
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
      
      {/* Animated outer glow */}
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

// Function to create curved path between two points on sphere
function createCurvedPath(start: THREE.Vector3, end: THREE.Vector3, segments: number = 50) {
  const points = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    // Interpolate between start and end points
    const point = start.clone().lerp(end, t);
    // Project back to sphere surface and add slight elevation
    point.normalize().multiplyScalar(1.05);
    points.push(point);
  }
  return points;
}

function ConnectionLines() {
  const lineRefs = useRef<THREE.Line[]>([]);
  const materialRefs = useRef<THREE.LineBasicMaterial[]>([]);
  
  // Get positions for all locations
  const positions = locations.map(location => 
    latLngToVector3(location.lat, location.lng, 1.05)
  );
  
  // Create connections between all points
  const connections = [
    { start: positions[0], end: positions[1] }, // Beirut to KL
    { start: positions[1], end: positions[2] }, // KL to Leeds  
    { start: positions[2], end: positions[0] }  // Leeds to Beirut
  ];
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    materialRefs.current.forEach((material, index) => {
      if (material) {
        // Animate opacity with offset for each line
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
  const texture = useLoader(THREE.TextureLoader, earthTextureUrl);
  
  // Create a more realistic Earth material
  const earthMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.8,
    metalness: 0.1,
    emissive: new THREE.Color(0x112244),
    emissiveIntensity: 0.05,
  });
  
  
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001; // Very slow rotation
    }
  });

  // Create location pins
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
        <sphereGeometry args={[1, 128, 128]} />
        <primitive object={earthMaterial} />
      </mesh>
      <ConnectionLines />
      {pins}
    </group>
  );
}

const WorldMap = () => {
  return (
    <section className="py-20 bg-primary relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Global Presence, Local Expertise
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Our sales agents operate from modern offices in Beirut and Kuala Lumpur, 
            with company headquarters in Leeds, delivering world-class outbound sales services globally.
          </p>
        </div>
        
        <div className="relative">
          <div className="w-full h-96 md:h-[500px] bg-black rounded-2xl overflow-hidden shadow-glow border border-accent/30">
            <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
              <ambientLight intensity={0.3} />
              <directionalLight 
                position={[2, 2, 5]} 
                intensity={1} 
                color="#ffffff"
              />
              <pointLight 
                position={[-2, -2, -5]} 
                intensity={0.5} 
                color="#4488ff"
              />
              
              <Globe />
              
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                autoRotate={false}
                enableDamping={true}
                dampingFactor={0.05}
                rotateSpeed={0.3}
                minDistance={1.8}
                maxDistance={4}
              />
            </Canvas>
          </div>
          
          {/* Location details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-card rounded-xl shadow-soft">
              <div className="w-4 h-4 bg-accent rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Beirut, Lebanon</h3>
              <p className="text-sm text-muted-foreground">
                Sales agent hub serving European and regional markets with perfect timezone coverage.
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl shadow-soft">
              <div className="w-4 h-4 bg-accent rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Kuala Lumpur, Malaysia</h3>
              <p className="text-sm text-muted-foreground">
                Sales agent center providing comprehensive coverage for global business hours.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl shadow-soft">
              <div className="w-4 h-4 bg-accent rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Leeds, United Kingdom</h3>
              <p className="text-sm text-muted-foreground">
                Company headquarters and operations center. No sales agents based here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;