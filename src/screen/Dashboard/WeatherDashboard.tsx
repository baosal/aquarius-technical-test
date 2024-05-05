import { useEffect, useState } from 'react';
import { WeatherCard as WeatherInformation } from 'src/components/WeatherCard/WeatherCard';
import { SearchHistory } from './SearchHistory/SearchHistory';
import { SearchWeatherBar } from './SearchWeatherBar/SearchWeatherBar';
import LocalStorageUtil from 'src/helper/local-storage';
import { formatWeatherInformation } from './helper';
import { fetchWeather } from 'src/api/api';
import { ToastContainer, toast } from 'react-toastify';

const localSearchHistory = LocalStorageUtil.getItem('searchHistory') || []
export const WeatherDashboard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [searchHistory, setSearchHistory] = useState(localSearchHistory)
  const [selectedLocation, setSelectedLocation] = useState<any>(formatWeatherInformation(localSearchHistory[0]))
  const onGetWeather = async (item: any, noUpdateHistory = false) => {
    setIsLoading(true)
    try {
      const response = await fetchWeather(item.long, item.lat)
      setSelectedLocation(formatWeatherInformation(response))
      if (!noUpdateHistory) {
        setSearchHistory([{ ...response, time: new Date() }, ...searchHistory])
        LocalStorageUtil.setItem('searchHistory', searchHistory);
      }
    } catch (error) {
      console.error(error);
      toast.error("Apologies, we encountered an error retrieving the weather information. Please try again later. !", {
        position: "top-left"
      });
    }
    setIsLoading(false)
  };
  const onDelete = (index: number) => {
    const newSearchHistory = searchHistory.filter((item: any, i: number) => i !== index)
    setSearchHistory(newSearchHistory)
    LocalStorageUtil.setItem('searchHistory', newSearchHistory);
  }
  useEffect(() => {
    if (searchHistory.length === 0) {
      onGetWeather({ long: -81.2434, lat: 42.9832 }, true);
    }
  }, [])
  return (
    <>
      <ToastContainer />
      {isLoading && <div className='opacity-30 bg-bg-clear fixed w-full h-full flex justify-center items-center'>
        <div className='loading loading-bars loading-lg' />
      </div>}

      <div className='flex justify-center'>
        <div className='max-w-[718px] min-w-[378px] w-full my-26px'>
          <div className='mx-16px relative z-20'>
            <SearchWeatherBar onSelectLocation={onGetWeather}></SearchWeatherBar>
          </div>
          <WeatherInformation data={selectedLocation}>
            <SearchHistory items={searchHistory} onDelete={onDelete} onSearch={(name: any) => onGetWeather(name, true)} />
          </WeatherInformation>
        </div>
      </div>
    </>
  );
};