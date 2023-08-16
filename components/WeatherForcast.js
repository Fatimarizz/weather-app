import React from 'react';
import ForecastCard from './ForcastCard';
import { useWeather } from './WeatherContext';
import Alert from './Alert';

const WeatherForecast = () => {
 const {forecastData}=useWeather();

 
  if (!forecastData) {

    return <Alert text="Enter a city to get weather information" />
  }
  return (
    <div className=' py-5'>
     <h3 className='flex justify-center text-2xl md:text-3xl font-semibold pb-9'>Weather Forecast for 5 Days </h3>
   
    <div className="md:flex md:space-x-4 justify-center px-8 space-y-5 md:space-y-0 mb-8">
       
      {forecastData.map((dayData, index) => (
        <ForecastCard

          key={index}
          day={dayData.day}
          icon={dayData.hourlyDetails[0]?.weather[0]?.icon}
          highTemp={dayData.hourlyDetails[0]?.main.temp_max}
          lowTemp={dayData.hourlyDetails[0]?.main.temp_min}
          hourlyDetails={dayData.hourlyDetails}
        />
      ))}
    </div>
    </div>
  );

}

export default WeatherForecast;
