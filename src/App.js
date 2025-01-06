// App.js
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import WeatherComponent from './WeatherComponent'; // Import the WeatherComponent
import Home from './Home';
import { useState, useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import Girl_frontend from './assets/Girl_frontend'
import MyModel from './MyModel';
import Calendar from './Calendar';


function App () {

  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);

  const [hoveredButton, setHoveredButton] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false); // New state variable

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:5000/api/data')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  const sendData = async () => {
    const dataToSend = { name: 'Sayuri', age: 23 };
    try {
      const res = await fetch('http://localhost:5000/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });
      const result = await res.json();
      setResponse(result);
    } catch (error) {
      console.error(error);
    }
  };



  const handleMouseEnter = (buttonId) => {
      setHoveredButton(buttonId);
  };

  const handleMouseLeave = () => {
      setHoveredButton(null);
  };

  const handleClick = (buttonId) => {
    if (buttonId === "button1") {
      setShowCalendar(true); // Show calendar when "Fits Wrapped" is clicked
    }
      setClickedButton(buttonId);
  };

  return (
    <Router>
      
    <div className="App">
    <div>
      <h1>{message}</h1>
      <button onClick={sendData}>Send Data</button>
      {response && <p>Server Response: {JSON.stringify(response)}</p>}
    </div>
        {showCalendar ? ( // Conditionally render the calendar or home screen
          <Calendar />
        ) : (
          <>
           <Home />
      
      {/* <WeatherComponent /> Use the WeatherComponent here */}

    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Bullet Points Section */}
      <div style={{ flex: 1.5 }}>
        <div className="button-container">
        <Link to="/calendar">
            <button id="button1"
                className={`pop-text ${
                hoveredButton === "button1" ? "hover" : ""
                } ${clickedButton === "button1" ? "click" : ""}`}
                onMouseEnter={() => handleMouseEnter("button1")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("button1")}
                >
                Fits Wrapped
            </button>
        </Link>
    
    
        
          <button id="button2"
          className={`pop-text ${
          hoveredButton === "button2" ? "hover" : ""
          } ${clickedButton === "button2" ? "click" : ""}`}
          onMouseEnter={() => handleMouseEnter("button2")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("button2")}
          >
          Style Your Day
          </button>   
        </div> 
      </div>

      {/* 3D Model Section */}
      <div style={{ flex: 1.5, height: '150vh', width: '50wh', display: 'flex', justifyContent:'flex-end', alignItems: 'center', objectFit: 'contain'}}>
            <Canvas camera={{position: [0, 2, 5], // Move the camera backward and higher
            fov: 90, near: 0.1, far: 1000,}} style={{height: '100%', width: '100%'}}>
              {/* Lighting */}
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} />

              {/* Render the 3D model */}
              <MyModel scale={0.5} position={[1, -1, 0]} rotation={[0, Math.PI / 4, 0]} />

              {/* Orbit Controls */}
              <OrbitControls enableZoom={false}/>
             </Canvas>
              </div>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;