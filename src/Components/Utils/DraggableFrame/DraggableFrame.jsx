import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useTexture } from "@react-three/drei";

export default function Frame() {
  const meshRef = useRef();
  const texture = useTexture("src\\assets\\HomeImages\\xray.png");

  const [isDragging, setIsDragging] = useState(false);
  const targetRotation = useRef([0, 0]);

  const handlePointerDown = () => setIsDragging(true);
  const handlePointerUp = () => setIsDragging(false);

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    targetRotation.current = [
      targetRotation.current[0] + e.movementY * 0.005,
      targetRotation.current[1] + e.movementX * 0.005,
    ];
  };

  useFrame(() => {
    if (!meshRef.current) return;

    // smooth follow
    meshRef.current.rotation.x +=
      (targetRotation.current[0] - meshRef.current.rotation.x) * 0.1;

    meshRef.current.rotation.y +=
      (targetRotation.current[1] - meshRef.current.rotation.y) * 0.1;

    // snap back when released
    if (!isDragging) {
      targetRotation.current[0] *= 0.9;
      targetRotation.current[1] *= 0.9;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Frame (slightly bigger behind) */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[3.2, 4.2, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* Image */}
      <mesh
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}
      >
        <planeGeometry args={[3, 4]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
}
