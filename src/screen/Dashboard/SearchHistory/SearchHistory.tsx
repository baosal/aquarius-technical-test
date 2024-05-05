import React from 'react';
import { ISearchHistory } from './interface';
import { WeatherItemListing } from 'src/components/WeatherItemListing/WeatherItemListing';

const formatData = (items: any) => {
  return items.map((item: { name: string; country: string; time: any; long: any; lat: any; }) => {
    return {
      location: item.name + ', ' + item.country,
      time: item.time,
      long: item.long,
      lat: item.lat,
    }
  })
}

export const SearchHistory = ({
  items,
  onSearch,
  onDelete,
}: ISearchHistory) => {
  return (
    <WeatherItemListing items={formatData(items)} onSearch={onSearch} onDelete={onDelete} label='Search History' />
  );
};
