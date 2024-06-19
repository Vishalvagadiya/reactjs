import React, { useState, useRef, useEffect } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const apiKey = '4d077f34de839f0a9d593bb80348efc2';

  const getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          setWeather(data);
          setError('');
        } else {
          setError('City not found');
          setWeather(null);
        }
      })
      .catch(() => {
        setError('An error occurred while fetching the weather data');
        setWeather(null);
      });
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="weather-card">
    <div className="search">
      <input type="search" placeholder="Enter city name" value={city} onChange={handleChange} ref={inputRef}/>
      <button onClick={getWeather}>
        <i className="bi bi-search"></i>
      </button>
    </div>
    {error && <p>{error}</p>}
    {weather && (
      <div className="weather">
        <img 
          className="weather-icon" 
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} 
          alt="weather icon" 
        />
        <h1 className="temp">{weather.main.temp}°C</h1>
        <h2 className="city">{weather.name}</h2>
        <div className="details">
          <div style={{ display: 'flex' }} className="col">
            <img 
              className="humi" 
              src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png" 
              alt="humidity icon"
            />
            <div className="info">
              <p className="humidity">{weather.main.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="col">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/136/136712.png" 
              alt="wind icon"
            />
            <div className="info">
              <p className="wind">{weather.wind.speed} m/s</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>

  );
};

export default Weather;
