// SearchBar.js
import React, { useState } from 'react';
import { useWeather } from './WeatherContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const SearchBar = ({enable}) => {
  const [city, setCity] = useState('');
  const { fetchWeatherData , fetchForecastData} = useWeather();

  const handleSearch = () => {
    if (city.trim() !== '') {
      fetchWeatherData(city);
      fetchForecastData(city)

    }
  };

  return (
    <div className='md:flex md:space-x-4 justify-center pt-12 px-12 md:px-0'>

      <input
        type="text"
        placeholder="Enter a city name"
        className='rounded-md p-2 border text-black  border-blue-400 mb-4 md:mb-0 w-full md:w-56'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className={classNames(!enable ? 'bg-blue-800 text-white' : 'bg-blue-300 text-blue-900',"px-3 py-2 rounded-lg w-full md:w-24 " )} onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
