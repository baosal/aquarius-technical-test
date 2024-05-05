import React from 'react';
import { IWeatherCard } from './interface';
import moment from 'moment';
import { Temperature } from '../Temperature/Temperature';
import sun from '@/background/sun.png';
import cloud from '@/background/cloud.png';

export const WeatherCard = ({
  humidity,
  location,
  temp,
  tempH,
  tempL,
  time,
  children,
  weather
}: IWeatherCard) => {
  const formatTime = moment(time).format('DD-MM-YYYY HH:mma')
  const weatherIcon = weather === 'Clouds' ? cloud : sun
  return (
    <div className='relative'>
      <img src={weatherIcon} className='absolute top-[-100px] max-sm:top-[-60px] z-10 bg-opacity-0 right-0px max-sm:w-157px max-sm:h-157px w-[300px] h-[300px]' alt='weatherIcon'></img>
      <div className='flex flex-col px-40px py-46px max-sm:px-20px max-sm:py-20px mx-16px mt-95px bg-bg-clear-20 rounded-32 border border-border-clear border-solid'>
        <div className='relative px-10px'>
          <div className='mb-16px'>Today’s Weather</div>
          <Temperature temp={temp} variant='primary'></Temperature>
          <div className='flex gap-4px mt-8px'>
            H: <Temperature temp={tempH} /> L: <Temperature temp={tempL} />
          </div>
          <div className='mt-4px flex justify-between gap-24px text-text-neutral font-700'>
            {location}
          </div>
          <div className='flex max-sm:flex-col-reverse max-sm:text-end justify-between absolute bottom-0px right-10px gap-16px' style={{ width: 'calc(100% - 120px)' }}>
            <div>
              {formatTime}
            </div>
            <div>
              {`Humidity: ${humidity}%`}
            </div>
            <div>
              {weather}
            </div>
          </div>
        </div>
        <div className='mt-26px'>
          {children ?
            children :
            <div className='bg-bg-clear-20 flex flex-col gap-26px px-20px py-20px'></div>}
        </div>
      </div>
    </div>
  );
};
