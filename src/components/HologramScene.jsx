import { Float, MeshDistortMaterial, OrbitControls, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function Core() {
  const mesh = useRef();
  const ring = useRef();

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.22;
      mesh.current.rotation.y += delta * 0.34;
    }
    if (ring.current) ring.current.rotation.z -= delta * 0.45;
  });

  return (
    <group>
      <Float speed={2.2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={mesh}>
          <icosahedronGeometry args={[1.35, 4]} />
          <MeshDistortMaterial
            color="#00f5ff"
            emissive="#1877ff"
            emissiveIntensity={1.5}
            roughness={0.18}
            metalness={0.85}
            distort={0.34}
            speed={2}
            transparent
            opacity={0.68}
          />
        </mesh>
      </Float>
      <mesh ref={ring} rotation={[Math.PI / 2, 0.2, 0]}>
        <torusGeometry args={[2.1, 0.018, 16, 160]} />
        <meshBasicMaterial color="#ff2ef7" transparent opacity={0.82} />
      </mesh>
      <mesh rotation={[Math.PI / 2.2, 0.6, 0.4]}>
        <torusGeometry args={[2.75, 0.012, 12, 180]} />
        <meshBasicMaterial color="#00f5ff" transparent opacity={0.62} />
      </mesh>
    </group>
  );
}

export default function HologramScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 52 }} dpr={[1, 1.6]}>
      <ambientLight intensity={0.35} />
      <pointLight position={[3, 4, 4]} color="#00f5ff" intensity={2.5} />
      <pointLight position={[-4, -2, 3]} color="#ff2ef7" intensity={1.7} />
      <Stars radius={48} depth={22} count={900} factor={2.7} saturation={0} fade speed={0.7} />
      <Core />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
    </Canvas>
  );
}
