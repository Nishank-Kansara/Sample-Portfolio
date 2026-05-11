import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// ========================
//  Floating Particles Field
// ========================
function ParticleField({ count = 3000 }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.03;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#915eff"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

// ========================
//  Rotating Torus
// ========================
function RotatingTorus() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    ref.current.rotation.z = state.clock.elapsedTime * 0.1;
  });

  return (
    <mesh ref={ref} position={[3, 0, -3]}>
      <torusGeometry args={[1.2, 0.35, 16, 100]} />
      <meshStandardMaterial
        color="#915eff"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

// ========================
//  Floating Icosahedron
// ========================
function FloatingGem() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
  });

  return (
    <mesh ref={ref} position={[-3, 0.5, -2]}>
      <icosahedronGeometry args={[0.8, 1]} />
      <meshStandardMaterial
        color="#00d4ff"
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

// ========================
//  Orbiting Spheres
// ========================
function OrbitingSphere({ radius, speed, color, size }) {
  const ref = useRef();
  const angle = useRef(Math.random() * Math.PI * 2);

  useFrame((state) => {
    if (!ref.current) return;
    angle.current += speed * 0.01;
    ref.current.position.x = Math.cos(angle.current) * radius;
    ref.current.position.z = Math.sin(angle.current) * radius;
    ref.current.position.y = Math.sin(angle.current * 2) * 0.5;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

// ========================
//  Main Hero Canvas
// ========================
export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ background: 'transparent' }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#915eff" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#00d4ff" />

      <ParticleField count={2500} />
      <RotatingTorus />
      <FloatingGem />

      <OrbitingSphere radius={2.5} speed={1.2}  color="#915eff" size={0.08} />
      <OrbitingSphere radius={3.2} speed={0.8}  color="#00d4ff" size={0.06} />
      <OrbitingSphere radius={1.8} speed={1.8}  color="#ff6b6b" size={0.05} />
      <OrbitingSphere radius={3.8} speed={0.5}  color="#f5c518" size={0.07} />
    </Canvas>
  );
}
