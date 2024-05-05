import React from 'react';
import { ISearchHistory } from './interface';
import { WeatherItem } from 'src/components/WeatherItem/WeatherItem';

export const WeatherItemListing = ({
  items,
  label,
  onSearch,
  onDelete = () => { }
}: ISearchHistory) => {
  return (
    <div className='bg-bg-clear-20 rounded-20 flex flex-col gap-26px px-20px py-20px'>
      {label}
      <div className='flex flex-col gap-18px'>
        {items.map((item, index) =>
          <WeatherItem key={index} item={item} onSearch={onSearch} onDelete={() => onDelete(index)} />
        )}
      </div>
    </div>
  );
};
