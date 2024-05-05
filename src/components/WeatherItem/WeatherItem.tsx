import React from 'react';
import { IProps } from './interface';
import { IconSVG } from 'components/IconSVG/IconSVG';
import moment from 'moment';

export const WeatherItem = ({
  item,
  onDelete,
  onSearch,
  customClass
}: IProps) => {
  const formatTime = moment(item.time).format('DD-MM-YYYY HH:mma')
  return (
    <div className={`max-sm:px-10px gap-10px px-21px p-13px bg-bg-clear-40 rounded-10 flex items-center justify-between ${customClass}`} >
      <div className='max-sm:flex-col flex justify-between items-center flex-1 w-fit gap-10px max-sm:gap-2px'>
        <div className='max-sm:text-14px'>
          {item.name}
        </div>
        <div className='max-sm:text-10px text-14px text-text-dark-flex'>{formatTime}</div>
      </div>
      <div className='flex justify-between items-center gap-10px'>
        {onSearch && <IconSVG name='Search_34' onClick={() => onSearch(item)}></IconSVG>}
        {onDelete && <IconSVG name='Delete_34' onClick={() => onDelete()}></IconSVG>}
      </div>
    </div>
  );
};
