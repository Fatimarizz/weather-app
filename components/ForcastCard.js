import React, { useState } from 'react';
import HourlyModal from './Modal';
const ForecastCard = ({ day, icon, highTemp, lowTemp, hourlyDetails }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className={`flex flex-col items-center p-8 border bg-gray-100 border-gray-300 rounded cursor-pointer `}
      onClick={() => setIsModalOpen(true)}
    >
       <h3 className="text-lg font-semibold text-black">{day}</h3>
      <img src={`/icons/${icon}.svg`} alt="Weather Icon" className="w-12 h-12 mt-2" />
      <p className="text-lg text-black mt-2">{highTemp}°C</p>
      <p className="text-gray-600">{lowTemp}°C</p>
    
      <HourlyModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        hourlyDetails={hourlyDetails}
      />
    </div>
    
  );
};

export default ForecastCard;
