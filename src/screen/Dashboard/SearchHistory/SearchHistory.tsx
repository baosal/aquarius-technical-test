import React from 'react';
import { ISearchHistory } from './interface';
import { WeatherItemListing } from 'src/components/WeatherItemListing/WeatherItemListing';

export const SearchHistory = ({
  items,
  onSearch,
  onDelete,
}: ISearchHistory) => {
  return (
    <WeatherItemListing items={items} onSearch={onSearch} onDelete={onDelete} label='Search History' />
  );
};
