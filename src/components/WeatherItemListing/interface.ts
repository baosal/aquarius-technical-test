export interface ISearchHistoryItem {
  id: number | string;
  location: string;
  time: string | Date
  long: string | number,
  lat: string | number,
}
export interface ISearchHistory {
  items: ISearchHistoryItem[];
  label: string;
  onSearch?: Function;
  onDelete?: Function;
}