export interface IOption {
  key: string;
  label: string | number | boolean
}
export interface IProps {
  value?: string | number,
  onSearch: Function
  onSelectItem: Function
  options: any
  loading?: boolean
}