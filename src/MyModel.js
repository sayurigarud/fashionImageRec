import React from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function MyModel({ scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  // Load the GLB model
  const { scene } = useGLTF('/assets/girl_updated.glb'); // Update the path to your model file
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.side = THREE.DoubleSide;
    }
   });

  return (
    
    <primitive
        object={scene}
        scale={[0.75, 0.75, 0.75]} // Adjust scale as needed
        position={[0, 0, 0]}    // Center the model
        rotation={rotation}
    />
      
  );
}

// Preload the model for performance
useGLTF.preload('/assets/girl_updated.glb');
