"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

const Orb = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (!meshRef.current) return;

    meshRef.current.rotation.y = time * 0.3;

    const scale = 1 + Math.sin(time * 2) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);

    // floating effect (optional 🔥)
    meshRef.current.position.y = Math.sin(time) * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#000000"
        wireframe
      />
    </mesh>
  );
};

export default function AICoreOrb() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🚨 prevents SSR crash

  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />

        <Orb />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}