import React from 'react';
import './WeatherItem.css';
import { IWeatherItem } from './interface';
import { IconSVG } from 'src/components/IconSVG/IconSVG';
import moment from 'moment';

export const WeatherItem = ({
  location = '',
  time = null,
  customClass
}: IWeatherItem) => {
  const formatTime = moment(time).format('DD-MM-YYYY HH:mma')
  const onSearch = () => {
    console.log('onSearch');
  }
  return (
    <div className={`h-[60px] w-full min-w-[290px] p-21px bg-bg-clear-40 rounded-20 flex items-center justify-between ${customClass}`} >
      <div>
        {location}
      </div>
      <div className='flex justify-between items-center gap-10px'>
        <div>{formatTime}</div>
        <IconSVG name='Search_34' onClick={onSearch}></IconSVG>
        <IconSVG name='Delete_34' onClick={onSearch}></IconSVG>
      </div>
    </div>
  );
};
