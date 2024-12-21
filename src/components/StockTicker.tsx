import { useEffect, useState } from "react";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface StockIndex {
  country: string;
  indexName: string;
  value: number;
  change: number;
  code: string;
  previousValue?: number;
}

const initialStockData: StockIndex[] = [
  {
    country: "Cameroun",
    indexName: "SEMC.BRVM",
    value: 9674.58,
    change: 0.6,
    code: "XOF",
    previousValue: 9674.58
  },
  {
    country: "Côte d'Ivoire",
    indexName: "SDSC.BRVM",
    value: 4414.52,
    change: 0.7,
    code: "XOF",
    previousValue: 4414.52
  },
  {
    country: "Sénégal",
    indexName: "PALC.BRVM",
    value: 9227.64,
    change: 0.4,
    code: "XOF",
    previousValue: 9227.64
  },
  {
    country: "Bénin",
    indexName: "BICC.BRVM",
    value: 7021.68,
    change: 0.6,
    code: "XOF",
    previousValue: 7021.68
  },
  {
    country: "Burkina Faso",
    indexName: "SGBC.BRVM",
    value: 9674.58,
    change: 0.6,
    code: "XOF",
    previousValue: 9674.58
  }
];

export const StockTicker = () => {
  const [stockData, setStockData] = useState<StockIndex[]>(initialStockData);
  const [isUpdating, setIsUpdating] = useState(false);

  // Calculer le pourcentage de variation
  const calculateChange = (currentValue: number, previousValue: number): number => {
    return ((currentValue - previousValue) / previousValue) * 100;
  };

  // Mise à jour des données toutes les 10 secondes
  useEffect(() => {
    const updateStockData = () => {
      setIsUpdating(true);
      
      const updatedData = stockData.map(stock => {
        const previousValue = stock.value;
        const newValue = previousValue + (Math.random() - 0.5) * (previousValue * 0.02); // Variation max de 2%
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

    const interval = setInterval(updateStockData, 10000); // Mise à jour toutes les 10 secondes
    return () => clearInterval(interval);
  }, [stockData]);

  return (
    <div className="bg-secondary text-white overflow-hidden whitespace-nowrap">
      <div
        className={`inline-flex animate-[slide_30s_linear_infinite] ${
          isUpdating ? "opacity-50 transition-opacity duration-500" : ""
        }`}
      >
        {stockData.concat(stockData).map((stock, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 px-4 py-1"
          >
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
        ))}
      </div>
    </div>
  );
};