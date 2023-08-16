import Image from 'next/image'
import { useWeather } from '@/components/WeatherContext';
import WeatherDisplay from '@/components/WeatherDetails'
import Header from '@/components/Header';
import SearchBar from '@/components/Searchbar'
import Alert from '@/components/Alert';
import Footer from '@/components/Footer';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import WeatherForecast from '@/components/WeatherForcast';
import Loader from '@/components/Loader';
export default function Home() {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  const { enable, setEnable, weatherData, forecastData, error } = useWeather();

  return (
    <div className="">


      {(weatherData && forecastData) ?
        <>

          <Header enable={enable} setEnable={setEnable} />
          <div className={classNames(enable ? 'bg-black text-white' : 'bg text-black', '')}>

            <SearchBar enable={enable} />
            {error ? <div className=' flex justify-center py-24'>
              <div>
              <ExclamationTriangleIcon className='h-56 w-56 text-red-500' />
              <p className='text-center font-semibold'>No City Found</p>
              <Alert text={error}/>
              </div>
              </div>
              :
              <>
                <WeatherDisplay enable={enable} />
                <WeatherForecast />
              </>
            }
          </div>
          <Footer enable={enable} />
        </>
        :
        <Loader />
      }


    </div>
  )
}
