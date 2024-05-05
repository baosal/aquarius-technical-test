export interface ISearchHistoryItem {
  id: number | string;
  name: string;
  time: string | Date
}
export interface ISearchHistory {
  items: ISearchHistoryItem[]
  onSearch?: Function,
  onDelete?: Function,
}