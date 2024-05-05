export interface IWeatherItem {
  location: string
  time: string | Date | null
  onSearch?: Function | null
  onDelete?: Function | null
  customClass?: string
}