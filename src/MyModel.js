import React, {useRef} from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export default function MyModel({ scale = 1.0, position = [0, -40, 50], rotation = [0, 0, 0] }) {
  // Load the GLB model
 
  const { scene } = useGLTF('/assets/girl_updated.glb'); // Update the path to your model file
  
  const modelRef = useRef(); // Reference to the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rotate around the Y-axis
    }
  });
  
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.side = THREE.DoubleSide;
    }
   });

  return (
    <mesh ref={modelRef}>
    <primitive
        object={scene}
        scale={[1.0, 1.0, 1.0]} // Adjust scale as needed
        position={[0, 0, 0]}    // Center the model
        rotation={rotation}
    />
    </mesh>
    
      
  );
}

// Preload the model for performance
useGLTF.preload('/assets/girl_updated.glb');
