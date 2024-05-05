import React from 'react';
interface IProps {
  temp: number | string;
  variant?: 'primary' | 'secondary';
}
export const Temperature = ({
  temp,
  variant
}: IProps) => {
  const getClassName = () => {
    switch (variant) {
      case 'primary':
        return 'text-81px text-text-primary font-700 leading-[66px]';
      default:
        return '';
    }
  }
  return (
    <div className={getClassName() + ' '}>
      {temp}°
    </div>
  );
}
