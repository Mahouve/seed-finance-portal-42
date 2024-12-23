import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface CurrencyCardProps {
  name: string;
  value: number;
  change: number;
  historicalData?: number[];
}

export const CurrencyCard = ({ name, value, change, historicalData = [] }: CurrencyCardProps) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Valeur",
        data: historicalData.length ? historicalData : [
          value * 0.95,
          value * 0.98,
          value * 0.97,
          value * 1.02,
          value * 1.01,
          value,
        ],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-2xl font-bold">{value.toFixed(2)}</p>
          <p className={`text-sm font-medium ${
            change >= 0 ? "text-green-600" : "text-red-600"
          }`}>
            {change >= 0 ? "+" : ""}{change.toFixed(2)}%
          </p>
          <div className="h-[200px]">
            <Line data={data} options={options} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};