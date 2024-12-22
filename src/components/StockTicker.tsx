import { StockTickerItem } from "./StockTickerItem";
import { useStockData } from "@/hooks/useStockData";

export const StockTicker = () => {
  const { stockData, isUpdating } = useStockData();

  return (
    <div className="bg-secondary text-white overflow-hidden whitespace-nowrap fixed top-0 w-full z-50">
      <div
        className={`inline-flex animate-[slide_30s_linear_infinite] ${
          isUpdating ? "opacity-50 transition-opacity duration-500" : ""
        }`}
      >
        {stockData.concat(stockData).map((stock, index) => (
          <StockTickerItem key={index} stock={stock} />
        ))}
      </div>
    </div>
  );
};