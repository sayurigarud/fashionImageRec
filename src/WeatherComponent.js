import React, { useState, useEffect } from 'react';

const WeatherComponent = () => {
  // Using the useState hook for storing weather data and errors
  // const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [currentDay, setCurrentDay] = useState("");
  
    // Get the current day
    useEffect(() => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const today = new Date();
      setCurrentDay(days[today.getDay()]);
    }, []);

      // Get user's location and fetch weather
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        }, (err) => {
          setError("Location access denied.");
        });
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    }, []);

    useEffect(() => {
      if (location.lat && location.lon) {
        const fetchWeather = async () => {
          try {
            const response = await fetch('https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=pBoXWdYZRvGRihkxNndL0fvsPKGRlNCV');
            const data = await response.json();


            console.log('API Response:', data);
    
            // Try to set the weather data here
            if (data?.data?.timelines?.length > 0 && data.data.timelines[0]?.intervals?.length > 0) {
              setWeather(data.data.timelines[0].intervals[0].values);
            } else {
              setError("No weather data available.");
            }
          } catch (err) {
            setError("Failed to fetch weather data.");
          }

          //   setWeather(data.data.timelines[0].location[0].values);
          // } catch (err) {
          //   setError("Failed to fetch weather data.");
          // }
        };
        fetchWeather();
      }
    }, [location]);
  

//   useEffect(() => {
//     // Setting the fetch options
//     const options = { method: 'GET', headers: 
// { accept: 'application/json' } };

//     // Fetching weather data
//     fetch('https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=YOUR_API_KEY', options)
//       .then(response => response.json())
//       .then(data => {
//         // Set the weather data to state
//         setWeatherData(data);
//       })
//       .catch(err => {
//         // Set the error to state if there is an error
//         setError(err);
//         console.error(err);
//       });
//   }, []);

  return (
    <div>
      <main>
        {location && (
          <div>
            <p>Weather Data</p>
            <p>Today is {currentDay}</p>
            {weather ? (
              <div>
                <h2>Your Location</h2>
                <p>Temperature: {weather.temperature}°C</p>
                <p>Weather Code: {weather.weatherCode}</p>
              </div>
            ) : (
              <p>Loading weather...</p>
            )}
          </div>
        )}
        {error && <p>Error fetching data: {error.message}</p>}
      </main>
    </ div>
  );
}

export default WeatherComponent;