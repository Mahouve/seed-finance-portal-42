export interface StockIndex {
  country: string;
  indexName: string;
  value: number;
  change: number;
  code: string;
  previousValue?: number;
}