// WeatherContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '@/api/constants';
import { getDayName } from '@/converter/converter';
const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData,setForecastData]=useState([])
  const [error, setError] = useState(null);
  const [forecastError,setForecastError]=useState(null)
  const [enable,setEnable]=useState(false)

 const [defaultCity, setDefaultCity] = useState('faisalabad');

 useEffect(() => {
   fetchWeatherData(defaultCity);
   fetchForecastData(defaultCity)
 }, [defaultCity]);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('City not found or error fetching data');
    }
  };

  const fetchForecastData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
  
      const today = new Date().toISOString().split('T')[0];
      const hourlyData = response.data.list.reduce((acc, data) => {
        const date = new Date(data.dt_txt);
        const dayKey = date.toISOString().split('T')[0];
  
        if (dayKey !== today && Object.keys(acc).length < 5) {
          if (!acc[dayKey]) {
            acc[dayKey] = { day: getDayName(data.dt), hourlyDetails: [] };
          }
          acc[dayKey].hourlyDetails.push(data);
        }
  
        return acc;
      }, {});
  
      const forecastArray = Object.values(hourlyData);
  
      setForecastData(forecastArray);
    } catch (error) {
    }
  };
  console.log("foreca",forecastData)

  return (
    <WeatherContext.Provider value={{ weatherData, forecastData ,  error, fetchWeatherData , fetchForecastData ,enable, setEnable }}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = () => {
  return useContext(WeatherContext);
};

export { WeatherProvider, useWeather };
