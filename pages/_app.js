import "./globals.css";
import React, { useState } from 'react';
import { WeatherProvider } from "@/components/WeatherContext";

function MyApp({ Component, pageProps }) {
  
  return <>
  <WeatherProvider >
   
  <Component {...pageProps} />;
  </WeatherProvider>
  </>
}

export default MyApp
