// WeatherDisplay.js
import React from 'react';
import { useWeather } from './WeatherContext';
import Image from 'next/image';
import { ctoF, degToCompass, ktoC } from '@/converter/converter';
import { getWeekDay } from '@/converter/converter';
import Alert from './Alert';
import Loader from './Loader';

const WeatherDisplay = () => {
  const { weatherData, error } = useWeather();
 
  if (error) {

    return <Alert text={error} />
  }

  const { main, weather, wind } = weatherData;
  return (
    <div className='md:flex md:space-x-4 md:justify-center py-24 md:py-10'>
      <div className='md:flex md:space-x-4 md:items-center px-8 mx-4 md:mx-0 md:px-0 rounded-2xl  p-4'>
        <div className='rounded-lg p-4 '>
          <Image
            width={400}
            height={400}
            src={`/icons/${weather[0].icon}.svg`}
            alt="weatherIcon"
          />
          <h1 className='text-4xl font-semibold text-center'>
            {weatherData.name}, {weatherData.sys.country}
          </h1>
          <h1 className='text-2xl font-semibold text-center'>
            {getWeekDay(weatherData)}
          </h1>
        </div>
        <div className='space-y-4 pt-8 md:pt-0 p-6'>

          <p className='text-6xl font-bold text-center'>
           
              {Math.round(ktoC(main.temp)) }
           
            °C</p>
          <p className='text-3xl font-semibold mb-3 text-center' >  {weather[0].description}</p>

          <DetailCard text={"Wind Direction"} img={"compass"} value={wind.deg} unit={degToCompass(wind.deg)} />
          <DetailCard text={"Humidity"} img={"humidity"} value={main.humidity} unit={"%"} />
          <DetailCard text={"Wind Speed"} img={"wind"} value={wind.speed} unit={"m/s"} />

        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;

const DetailCard = ({ img, text, value, unit }) => {
  return (
    <div className='flex space-x-4 items-center'>
      <div>
        <Image
          width={300}
          height={300}
          className='h-12 w-12'
          src={`/icons/${img}.png`}
          alt={img}
        />
      </div>
      <div className='text-lg font-medium flex space-x-3'>
        {text}: {value} {unit}
      </div>
    </div>
  )
}
