import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  country: string;
  currency: string;
  lastUpdate: string;
}

const mockMarketData: MarketData[] = [
  {
    symbol: "^GSPC",
    name: "S&P 500",
    price: 4927.12,
    change: 25.61,
    changePercent: 0.52,
    country: "États-Unis",
    currency: "USD",
    lastUpdate: new Date().toISOString(),
  },
  {
    symbol: "^FCHI",
    name: "CAC 40",
    price: 7634.15,
    change: -12.45,
    changePercent: -0.16,
    country: "France",
    currency: "EUR",
    lastUpdate: new Date().toISOString(),
  },
  {
    symbol: "^GDAXI",
    name: "DAX",
    price: 16921.48,
    change: 43.21,
    changePercent: 0.26,
    country: "Allemagne",
    currency: "EUR",
    lastUpdate: new Date().toISOString(),
  },
  {
    symbol: "^N225",
    name: "Nikkei 225",
    price: 36897.42,
    change: 873.12,
    changePercent: 2.42,
    country: "Japon",
    currency: "JPY",
    lastUpdate: new Date().toISOString(),
  },
  {
    symbol: "^HSI",
    name: "Hang Seng",
    price: 16645.98,
    change: -156.32,
    changePercent: -0.93,
    country: "Hong Kong",
    currency: "HKD",
    lastUpdate: new Date().toISOString(),
  },
  {
    symbol: "^FTSE",
    name: "FTSE 100",
    price: 7612.45,
    change: 32.18,
    changePercent: 0.42,
    country: "Royaume-Uni",
    currency: "GBP",
    lastUpdate: new Date().toISOString(),
  },
];

const fetchMarketData = async (): Promise<MarketData[]> => {
  // Dans un environnement de production, remplacer par un vrai appel API
  return new Promise((resolve) => {
    const updatedData = mockMarketData.map(market => ({
      ...market,
      price: market.price * (1 + (Math.random() - 0.5) * 0.01),
      change: market.change * (1 + (Math.random() - 0.5) * 0.1),
      changePercent: market.changePercent * (1 + (Math.random() - 0.5) * 0.1),
      lastUpdate: new Date().toISOString()
    }));
    setTimeout(() => resolve(updatedData), 1000);
  });
};

export const MarketTable = () => {
  const { data: marketData, isLoading } = useQuery({
    queryKey: ["marketData"],
    queryFn: fetchMarketData,
    refetchInterval: 10000, // Actualisation toutes les 10 secondes
  });

  if (isLoading) {
    return <div className="text-center">Chargement des données...</div>;
  }

  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Indice</TableHead>
            <TableHead>Pays</TableHead>
            <TableHead className="text-right">Dernier</TableHead>
            <TableHead className="text-right">Variation</TableHead>
            <TableHead className="text-right">% Variation</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {marketData?.map((market) => (
            <TableRow key={market.symbol}>
              <TableCell className="font-medium">{market.name}</TableCell>
              <TableCell>{market.country}</TableCell>
              <TableCell className="text-right">
                {market.price.toLocaleString()} {market.currency}
              </TableCell>
              <TableCell className="text-right">
                <span
                  className={`flex items-center justify-end ${
                    market.change >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {market.change >= 0 ? (
                    <ArrowUpIcon className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4 mr-1" />
                  )}
                  {Math.abs(market.change).toLocaleString()}
                </span>
              </TableCell>
              <TableCell
                className={`text-right ${
                  market.changePercent >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {market.changePercent.toFixed(2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};