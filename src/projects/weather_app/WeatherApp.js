import React, { useState } from 'react'

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const API_KEY = '29d994d57799de0fb748c03247e695be'; // Replace with your OpenWeather API key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    setWeather(data);
    console.log(data);
  };
  
  return (
    <div className='center text-5xl h-screen'>
       <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Weather App</h1>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="border p-2 rounded w-full mb-4"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Get Weather
        </button>
        {weather && (
          <div className="mt-4">
            <h2 className="text-xl font-bold">{weather.name}</h2>
            <p className="text-gray-700">{weather.weather[0].description}</p>
            <p className="text-gray-700">Temperature: {weather.main.temp}°C</p>
            <p className="text-gray-700">Humidity: {weather.main.humidity}%</p>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}

export default WeatherApp