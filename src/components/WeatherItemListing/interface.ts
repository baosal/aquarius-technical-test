export interface ISearchHistoryItem {
  id: number | string;
  location: string;
  time: string | Date
}
export interface ISearchHistory {
  items: ISearchHistoryItem[];
  label: string;
  onSearch?: Function;
  onDelete?: Function;
}