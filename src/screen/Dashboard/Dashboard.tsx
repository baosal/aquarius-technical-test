import React from 'react';
import { WeatherCard } from 'src/components/WeatherCard/WeatherCard';
import { SearchHistory } from './SearchHistory/SearchHistory';

export const DashBoard = ({
}: any) => {
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
  return (
    <div className='flex justify-center'>
      <div className='max-w-[718px] min-w-[378px] w-full'>
        <WeatherCard humidity={58} location='Johor, MY' temp='26' tempH='28' tempL='26' weather='Sunny' time={new Date()}>
          <SearchHistory items={items} />
        </WeatherCard>
      </div>
    </div>
  );
};