import React from 'react';
import { ISearchHistory } from './interface';
import { WeatherItemListing } from 'components/WeatherItemListing/WeatherItemListing';

const formatData = (items: any) => {
  return items.map((item: any) => {
    return {
      name: [item.name, item.sys?.country].join(', ').replace(/,*$/, ''),
      time: item.time,
      long: item.coord?.lon,
      lat: item.coord?.lat,
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
