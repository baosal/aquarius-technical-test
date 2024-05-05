export interface IWeatherItem {
  name: string,
  country: string,
  state: string,
  time: string | Date | null
  long: string | number,
  lat: string | number,
}
export interface IProps {
  item: IWeatherItem
  onSearch?: Function | null
  onDelete?: Function | null
  customClass?: string
}