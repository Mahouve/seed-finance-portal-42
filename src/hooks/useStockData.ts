import { useState, useEffect } from "react";
import { StockIndex } from "@/types/stock";
import { initialStockData } from "@/data/initialStocks";

const calculateChange = (currentValue: number, previousValue: number): number => {
  return ((currentValue - previousValue) / previousValue) * 100;
};

export const useStockData = () => {
  const [stockData, setStockData] = useState<StockIndex[]>(initialStockData);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const updateStockData = () => {
      setIsUpdating(true);
      
      const updatedData = stockData.map(stock => {
        const previousValue = stock.value;
        const newValue = previousValue + (Math.random() - 0.5) * (previousValue * 0.02);
        const change = calculateChange(newValue, previousValue);
        
        return {
          ...stock,
          previousValue: previousValue,
          value: newValue,
          change: change
        };
      });
      
      setStockData(updatedData);
      setTimeout(() => setIsUpdating(false), 500);
    };

    const interval = setInterval(updateStockData, 10000);
    return () => clearInterval(interval);
  }, [stockData]);

  return { stockData, isUpdating };
};