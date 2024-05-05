import React, { useState } from 'react';
import { WeatherCard as WeatherInformation } from 'src/components/WeatherCard/WeatherCard';
import { SearchHistory } from './SearchHistory/SearchHistory';
import { SearchWeatherBar } from './SearchWeatherBar/SearchWeatherBar';
import LocalStorageUtil from 'src/helper/local-storage';
import { formatWeatherInformation } from './helper';
import { fetchWeather } from 'src/api/api';

const localSearchHistory = LocalStorageUtil.getItem('searchHistory') || []
export const WeatherDashboard = () => {
  const [searchHistory, setSearchHistory] = useState(localSearchHistory)
  const [selectedLocation, setSelectedLocation] = useState<any>(formatWeatherInformation(localSearchHistory[0]))
  const onGetWeather = async (location: any) => {
    const response = await fetchWeather(location.long, location.lat)
    setSelectedLocation(formatWeatherInformation(response))
    setSearchHistory([{ ...location, time: new Date() }, ...searchHistory])
    LocalStorageUtil.setItem('searchHistory', searchHistory);
  };
  const onDelete = (index: number) => {
    const newSearchHistory = searchHistory.filter((item: any, i: number) => i !== index)
    setSearchHistory(newSearchHistory)
    LocalStorageUtil.setItem('searchHistory', newSearchHistory);
  }
  const onSearch = (location: any) => {
    fetchWeather(location.long, location.lat)
  }
  return (
    <div className='flex justify-center'>
      <div className='max-w-[718px] min-w-[378px] w-full my-26px'>
        <div className='mx-16px relative z-20'>
          <SearchWeatherBar onSelectLocation={onGetWeather}></SearchWeatherBar>
        </div>
        <WeatherInformation
          humidity={selectedLocation.humidity}
          location={selectedLocation.location}
          temp={selectedLocation.temp}
          tempMax={selectedLocation.tempMax}
          tempMin={selectedLocation.tempMin}
          weather={selectedLocation.weather}
          time={selectedLocation.time}>
          <SearchHistory items={searchHistory} onDelete={onDelete} onSearch={onSearch} />
        </WeatherInformation>
      </div>
    </div>
  );
};