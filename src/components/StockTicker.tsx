import { useEffect, useState } from "react";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface StockIndex {
  country: string;
  indexName: string;
  value: number;
  change: number;
  code: string;
}

const initialStockData: StockIndex[] = [
  {
    country: "Cameroun",
    indexName: "SEMC.BRVM",
    value: 9674.58,
    change: 0.6,
    code: "XOF"
  },
  {
    country: "Côte d'Ivoire",
    indexName: "SDSC.BRVM",
    value: 4414.52,
    change: 0.7,
    code: "XOF"
  },
  {
    country: "Sénégal",
    indexName: "PALC.BRVM",
    value: 9227.64,
    change: 0.4,
    code: "XOF"
  },
  {
    country: "Bénin",
    indexName: "BICC.BRVM",
    value: 7021.68,
    change: 0.6,
    code: "XOF"
  },
  {
    country: "Burkina Faso",
    indexName: "SGBC.BRVM",
    value: 9674.58,
    change: 0.6,
    code: "XOF"
  }
];

export const StockTicker = () => {
  const [stockData, setStockData] = useState<StockIndex[]>(initialStockData);
  const [isUpdating, setIsUpdating] = useState(false);

  // Simuler une mise à jour des données toutes les minutes
  useEffect(() => {
    const updateStockData = () => {
      setIsUpdating(true);
      // Simuler une légère variation des valeurs
      const updatedData = stockData.map(stock => ({
        ...stock,
        value: stock.value + (Math.random() - 0.5) * 10,
        change: stock.change + (Math.random() - 0.5) * 0.2
      }));
      setStockData(updatedData);
      setTimeout(() => setIsUpdating(false), 500);
    };

    const interval = setInterval(updateStockData, 60000); // Mise à jour toutes les minutes
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
              {Math.abs(stock.change).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};