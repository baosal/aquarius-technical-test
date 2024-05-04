export interface IWeatherItem {
  location: string,
  time: string | Date | null,
  customClass?: string;
}