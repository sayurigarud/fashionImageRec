// App.js
import React from 'react';
import WeatherComponent from './WeatherComponent'; // Import the WeatherComponent
import Appearance from './Appearance';
import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import Girl_frontend from './assets/Girl_frontend'
import MyModel from './MyModel';

function App() {
  return (
    <div className="App">
      <Appearance/>
      {/* <WeatherComponent /> Use the WeatherComponent here */}

      <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        {/* Render the 3D model */}
        <MyModel scale={1.5} position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]} />

        {/* Orbit Controls */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
    </div>
  );
}

export default App;