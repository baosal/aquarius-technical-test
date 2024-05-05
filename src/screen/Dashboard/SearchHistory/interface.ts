export interface ISearchHistoryItem {
  id: number | string;
  location: string;
  time: string | Date
}
export interface ISearchHistory {
  items: ISearchHistoryItem[]
  onSearch?: Function,
  onDelete?: Function,
}