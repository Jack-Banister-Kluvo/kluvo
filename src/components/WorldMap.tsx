import { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import earthTexture from '@/assets/earth-texture.jpg';

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

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(hovered ? 1.2 : 1);
      meshRef.current.position.copy(position);
      // Make pin point outward from globe center
      meshRef.current.lookAt(position.clone().multiplyScalar(2));
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
        <coneGeometry args={[0.02, 0.1, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {hovered && (
        <Html position={position}>
          <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-border text-sm font-medium text-foreground whitespace-nowrap">
            {name}
          </div>
        </Html>
      )}
    </group>
  );
}

function Globe() {
  const globeRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, earthTexture);
  
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.005; // Slow rotation
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
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
      {pins}
    </group>
  );
}

const WorldMap = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Global Presence, Local Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our teams operate from modern offices in Beirut and Kuala Lumpur, 
            delivering world-class outbound sales services with local market understanding.
          </p>
        </div>
        
        <div className="relative">
          <div className="w-full h-96 md:h-[500px] bg-gradient-subtle rounded-2xl overflow-hidden shadow-elegant">
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