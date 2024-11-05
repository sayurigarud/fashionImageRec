// App.js
import React from 'react';
import WeatherComponent from './WeatherComponent'; // Import the WeatherComponent
import Appearance from './Appearance';


function App() {
  return (
    <div className="App">
      <Appearance/>
      {/* <WeatherComponent /> Use the WeatherComponent here */}
    </div>
  );
}

export default App;