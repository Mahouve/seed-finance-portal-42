import { StockIndex } from "@/types/stock";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface StockTickerItemProps {
  stock: StockIndex;
}

export const StockTickerItem = ({ stock }: StockTickerItemProps) => {
  return (
    <div className="flex items-center space-x-2 px-4 py-1">
      <span className="font-semibold">{stock.country}</span>
      <span className="text-gray-300">{stock.indexName}</span>
      <span>{stock.value.toFixed(2)} {stock.code}</span>
      <span
        className={`flex items-center ${
          stock.change >= 0 ? "text-green-400" : "text-red-400"
        }`}
      >
        {stock.change >= 0 ? (
          <ArrowUpIcon className="h-4 w-4" />
        ) : (
          <ArrowDownIcon className="h-4 w-4" />
        )}
        {Math.abs(stock.change).toFixed(2)}%
      </span>
    </div>
  );
};