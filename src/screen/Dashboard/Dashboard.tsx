import React, { useState } from 'react';
import { WeatherCard } from 'src/components/WeatherCard/WeatherCard';
import { SearchHistory } from './SearchHistory/SearchHistory';
import { SearchBard } from './SearchBard/SearchBard';
import LocalStorageUtil from 'src/helper/local-storage';

const localSearchHistory = LocalStorageUtil.getItem('searchHistory') || []
const fomatData = (location: any) => {
  return {
    location: location.name + ', ' + location.country,
    temp: Math.round(location.main.temp - 273.15),
    tempMax: location.main.temp_max,
    tempMin: location.main.temp_min,
    weather: ['Rain'].includes(location.weather) ? 'Clouds' : 'Sunny' as ('Clouds' | 'Sunny'),
    humidity: location.main.humidity,
    time: new Date(),
  }
}
export const DashBoard = ({
}: any) => {
  const [searchHistory, setSearchHistory] = useState(localSearchHistory)
  const [selectedLocation, setSelectedLocation] = useState(fomatData(localSearchHistory[0]) || {})
  const items = [
    {
      id: 123,
      location: 'Johor, MY',
      time: new Date(),
    },
    {
      id: 123,
      location: 'Johor, MY',
      time: new Date(),
    },
    {
      id: 123,
      location: 'Johor, MY',
      time: new Date(),
    },
    {
      id: 123,
      location: 'Johor, MY',
      time: new Date(),
    },
    {
      id: 123,
      location: 'Johor, MY',
      time: new Date(),
    },
    {
      id: 123,
      location: 'Johor, MY',
      time: new Date(),
    }
  ];
  const onSelectLocation = (location: any) => {
    setSelectedLocation(fomatData(location))
    setSearchHistory([location, ...searchHistory])
    LocalStorageUtil.setItem('searchHistory', searchHistory);
  };
  return (
    <div className='flex justify-center'>
      <div className='max-w-[718px] min-w-[378px] w-full my-26px'>
        <div className='mx-16px relative z-20'>
          <SearchBard onSelectLocation={onSelectLocation}></SearchBard>
        </div>
        <WeatherCard humidity={58} location={selectedLocation.location}
          temp={selectedLocation.temp}
          tempMax={selectedLocation.tempMax}
          tempMin={selectedLocation.tempMin}
          weather={selectedLocation.weather}
          time={selectedLocation.time}>
          <SearchHistory items={searchHistory} />
        </WeatherCard>
      </div>
    </div>
  );
};