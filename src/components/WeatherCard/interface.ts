export interface IWeatherCard {
  location: string;
  temp: string;
  tempL: string;
  tempH: string;
  time: string | Date;
  humidity: string | number;
  weather: 'Clouds' | 'Sunny'
  children?: any
}