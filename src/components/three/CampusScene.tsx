import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshWobbleMaterial, OrbitControls, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const Building = ({
  position,
  height,
  color,
}: {
  position: [number, number, number];
  height: number;
  color: string;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      (ref.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
        0.4 + Math.sin(t + position[0]) * 0.2;
    }
  });
  return (
    <mesh ref={ref} position={position} castShadow>
      <boxGeometry args={[1.1, height, 1.1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.7}
        roughness={0.25}
      />
    </mesh>
  );
};

const CentralDome = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.12;
  });
  return (
    <Float speed={1} floatIntensity={0.5} rotationIntensity={0}>
      <mesh ref={ref} position={[0, 1.2, 0]}>
        <icosahedronGeometry args={[1.4, 1]} />
        <MeshWobbleMaterial
          color="#a78bfa"
          emissive="#7c3aed"
          emissiveIntensity={0.7}
          metalness={0.9}
          roughness={0.1}
          factor={0.25}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
};

const CampusScene = () => {
  return (
    <Canvas
      style={{ position: "absolute", inset: 0 }}
      camera={{ position: [6, 5, 8], fov: 50 }}
      dpr={[1, 1.8]}
      shadows
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[8, 10, 6]} intensity={1.2} color="#a78bfa" />
        <pointLight position={[-6, 4, -6]} intensity={1.5} color="#22d3ee" />
        <pointLight position={[6, 2, -4]} intensity={1} color="#ec4899" />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[24, 24]} />
          <meshStandardMaterial
            color="#1a1033"
            metalness={0.6}
            roughness={0.4}
            emissive="#3b1d6e"
            emissiveIntensity={0.15}
          />
        </mesh>
        <gridHelper args={[24, 24, "#7c3aed", "#312e81"]} position={[0, -0.49, 0]} />

        <CentralDome />

        <Building position={[-3, 0.5, 2]} height={2} color="#6366f1" />
        <Building position={[3, 0.75, 2]} height={2.5} color="#22d3ee" />
        <Building position={[-3, 0.75, -2]} height={2.5} color="#ec4899" />
        <Building position={[3, 0.5, -2]} height={2} color="#8b5cf6" />
        <Building position={[-5, 1, 0]} height={3} color="#06b6d4" />
        <Building position={[5, 1.25, 0]} height={3.5} color="#a78bfa" />
        <Building position={[0, 0.6, -4.5]} height={2.2} color="#f472b6" />

        <Float speed={2} floatIntensity={2}>
          <mesh position={[-2, 3, 1]}>
            <sphereGeometry args={[0.18, 16, 16]} />
            <meshStandardMaterial emissive="#22d3ee" color="#22d3ee" emissiveIntensity={1.5} />
          </mesh>
        </Float>
        <Float speed={1.5} floatIntensity={2.5}>
          <mesh position={[2.5, 3.5, -1]}>
            <sphereGeometry args={[0.22, 16, 16]} />
            <meshStandardMaterial emissive="#ec4899" color="#ec4899" emissiveIntensity={1.5} />
          </mesh>
        </Float>
        <Float speed={2.2} floatIntensity={2}>
          <mesh position={[0, 4, 2]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial emissive="#a78bfa" color="#a78bfa" emissiveIntensity={1.5} />
          </mesh>
        </Float>

        <Stars radius={50} depth={30} count={1000} factor={2} fade speed={0.4} />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.6}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 3.5}
        />
      </Suspense>
    </Canvas>
  );
};

export default CampusScene;
