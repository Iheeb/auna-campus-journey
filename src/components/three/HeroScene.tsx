import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars, TorusKnot } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const SpinningKnot = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15;
      ref.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.4}>
      <TorusKnot ref={ref} args={[1.1, 0.32, 220, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color={"#8b5cf6"}
          emissive={"#6d28d9"}
          emissiveIntensity={0.55}
          roughness={0.15}
          metalness={0.85}
          distort={0.35}
          speed={1.6}
        />
      </TorusKnot>
    </Float>
  );
};

const FloatingOrb = ({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) => (
  <Float speed={1.5} rotationIntensity={0.3} floatIntensity={2}>
    <Sphere args={[0.45 * scale, 48, 48]} position={position}>
      <MeshDistortMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        distort={0.45}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  </Float>
);

const HeroScene = () => {
  return (
    <Canvas
      style={{ position: "absolute", inset: 0 }}
      camera={{ position: [0, 0, 5], fov: 55 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.45} />
        <pointLight position={[6, 6, 6]} intensity={1.5} color="#a78bfa" />
        <pointLight position={[-6, -3, 4]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[0, -5, 2]} intensity={0.8} color="#ec4899" />

        <SpinningKnot />
        <FloatingOrb position={[-2.6, 1.4, -1]} color="#22d3ee" scale={0.9} />
        <FloatingOrb position={[2.8, -1.2, -0.5]} color="#ec4899" scale={1.1} />
        <FloatingOrb position={[2.1, 1.8, -2]} color="#a78bfa" scale={0.7} />
        <FloatingOrb position={[-2.4, -1.6, -1.5]} color="#60a5fa" scale={0.85} />

        <Stars radius={60} depth={40} count={1800} factor={3} saturation={0.3} fade speed={0.6} />
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
