export interface IWeatherCard {
  data: {
    name: string;
    temp: string | number;
    tempMin: string;
    tempMax: string;
    time: string | Date;
    humidity: string | number;
    weather: 'Clouds' | 'Sunny'
  }
  children?: any
}