import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const Building = ({
  position,
  height,
  color,
  emissive,
}: {
  position: [number, number, number];
  height: number;
  color: string;
  emissive: string;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      const mat = ref.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.5 + Math.sin(t * 0.8 + position[0]) * 0.25;
    }
  });
  return (
    <mesh ref={ref} position={[position[0], height / 2 + position[1], position[2]]}>
      <boxGeometry args={[1, height, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.6}
        metalness={0.85}
        roughness={0.2}
      />
    </mesh>
  );
};

const Spire = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.3;
  });
  return (
    <mesh ref={ref} position={position}>
      <coneGeometry args={[0.5, 2, 6]} />
      <meshStandardMaterial
        color="#a78bfa"
        emissive="#7c3aed"
        emissiveIntensity={0.9}
        metalness={0.9}
        roughness={0.15}
      />
    </mesh>
  );
};

const CityRing = () => {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.04;
  });

  const buildings = [
    { pos: [-4, 0, -2], h: 3.2, c: "#1e1b4b", e: "#6366f1" },
    { pos: [-2.5, 0, -3.5], h: 4, c: "#0f172a", e: "#22d3ee" },
    { pos: [-1, 0, -2.2], h: 2.4, c: "#1e1b4b", e: "#a78bfa" },
    { pos: [1, 0, -3], h: 3.6, c: "#0f172a", e: "#ec4899" },
    { pos: [2.8, 0, -2], h: 2.8, c: "#1e1b4b", e: "#8b5cf6" },
    { pos: [4.2, 0, -3.2], h: 4.2, c: "#0f172a", e: "#06b6d4" },
    { pos: [-5, 0, 0], h: 3, c: "#1e1b4b", e: "#a78bfa" },
    { pos: [5, 0, 0.5], h: 3.5, c: "#0f172a", e: "#f472b6" },
    { pos: [-3.5, 0, 2], h: 2.6, c: "#1e1b4b", e: "#22d3ee" },
    { pos: [3.5, 0, 2.2], h: 3, c: "#0f172a", e: "#8b5cf6" },
  ] as const;

  return (
    <group ref={group} position={[0, -2, 0]}>
      {/* Central university dome */}
      <mesh position={[0, 0.8, 0]}>
        <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color="#4c1d95"
          emissive="#a78bfa"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>
      <Spire position={[0, 2.6, 0]} />

      {buildings.map((b, i) => (
        <Building
          key={i}
          position={b.pos as [number, number, number]}
          height={b.h}
          color={b.c}
          emissive={b.e}
        />
      ))}

      {/* Ground plate */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <circleGeometry args={[8, 64]} />
        <meshStandardMaterial
          color="#0a0716"
          emissive="#3b1d6e"
          emissiveIntensity={0.2}
          metalness={0.6}
          roughness={0.5}
        />
      </mesh>
    </group>
  );
};

const FloatingOrbs = () => (
  <>
    <Float speed={1.6} floatIntensity={2.4}>
      <mesh position={[-3, 2, 1]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial emissive="#22d3ee" color="#22d3ee" emissiveIntensity={2} />
      </mesh>
    </Float>
    <Float speed={1.2} floatIntensity={2}>
      <mesh position={[3, 2.5, -1]}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial emissive="#ec4899" color="#ec4899" emissiveIntensity={2} />
      </mesh>
    </Float>
    <Float speed={2} floatIntensity={2.6}>
      <mesh position={[0, 3, 2]}>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshStandardMaterial emissive="#a78bfa" color="#a78bfa" emissiveIntensity={2} />
      </mesh>
    </Float>
  </>
);

const BackgroundScene = () => {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 1.5, 9], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[6, 8, 4]} intensity={0.9} color="#a78bfa" />
        <pointLight position={[-6, 3, -4]} intensity={1.4} color="#22d3ee" />
        <pointLight position={[6, 2, -2]} intensity={1.1} color="#ec4899" />
        <fog attach="fog" args={["#0a0716", 8, 22]} />

        <CityRing />
        <FloatingOrbs />
        <Stars radius={60} depth={40} count={1200} factor={2.5} fade speed={0.4} />
      </Suspense>
    </Canvas>
  );
};

export default BackgroundScene;
