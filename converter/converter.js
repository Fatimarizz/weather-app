export const getWeekDay = (weatherData) => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return weekday[
      new Date((weatherData.dt + weatherData.timezone) * 1000).getUTCDay()
    ];
  };
  export const degToCompass = (num) => {
    var val = Math.round(num / 22.5);
    var arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return arr[val % 16];
  };
  
  export const getDayName = (timestamp) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(timestamp * 1000); 
    return days[date.getDay()];
  };

  export const ctoF = (c) => (c * 9) / 5 + 32;
  export const ktoC= (k)=>k-273.15