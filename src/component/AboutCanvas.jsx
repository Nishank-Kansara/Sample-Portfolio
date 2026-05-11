import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ========================
//  Floating Tech Sphere
// ========================
function TechSphere() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
  });

  return (
    <group ref={ref}>
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#0a0f2c"
          roughness={0.1}
          metalness={0.8}
          emissive="#915eff"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Outer wireframe */}
      <mesh>
        <sphereGeometry args={[1.15, 16, 16]} />
        <meshStandardMaterial
          color="#915eff"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Ring 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.4, 0.015, 8, 80]} />
        <meshStandardMaterial color="#915eff" emissive="#915eff" emissiveIntensity={1} />
      </mesh>

      {/* Ring 2 */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[1.6, 0.01, 8, 80]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.8} transparent opacity={0.7} />
      </mesh>

      {/* Small orbiting dots */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <mesh key={i} position={[
            Math.cos(angle) * 1.4,
            Math.sin(angle * 0.5) * 0.3,
            Math.sin(angle) * 1.4
          ]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#915eff' : '#00d4ff'}
              emissive={i % 2 === 0 ? '#915eff' : '#00d4ff'}
              emissiveIntensity={2}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function AboutCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      style={{ background: 'transparent' }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 3]} intensity={2} color="#915eff" />
      <pointLight position={[-3, -3, 3]} intensity={1} color="#00d4ff" />
      <TechSphere />
    </Canvas>
  );
}
