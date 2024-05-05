import React from 'react';
import { ISearchHistory, ISearchHistoryItem } from './interface';
import { WeatherItemListing } from 'src/components/WeatherItemListing/WeatherItemListing';

export const SearchHistory = ({
  items,
}: ISearchHistory) => {
  const handleSearch = (item: ISearchHistoryItem) => {
    console.log('search', item);
  }
  const handleDelete = (item: ISearchHistoryItem) => {
    console.log('delete', item);
  }
  return (
    <WeatherItemListing items={items} onSearch={handleSearch} onDelete={handleDelete} label='Search History' />
  );
};
