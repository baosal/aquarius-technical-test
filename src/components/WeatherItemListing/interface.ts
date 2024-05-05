import { IWeatherItem } from "../WeatherItem/interface";
export interface ISearchHistory {
  items: IWeatherItem[];
  label: string;
  onSearch?: Function;
  onDelete?: Function;
}