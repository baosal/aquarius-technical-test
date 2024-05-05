export interface IWeatherItem {
  id: number | string;
  location: string
  time: string | Date | null
  onSearch?: Function | null
  onDelete?: Function | null
  customClass?: string
}