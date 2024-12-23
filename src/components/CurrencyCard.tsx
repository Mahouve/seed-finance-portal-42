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
        borderColor: "rgb(59, 130, 246)", // Blue-500
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#1F2937",
        bodyColor: "#1F2937",
        borderColor: "#E5E7EB",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          font: {
            family: "'Poppins', sans-serif",
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "'Poppins', sans-serif",
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/50">
      <CardHeader className="bg-card">
        <CardTitle className="text-lg font-medium">{name}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-end justify-between">
            <p className="text-3xl font-bold text-foreground">{value.toFixed(2)}</p>
            <p className={`text-sm font-medium px-2 py-1 rounded-full ${
              change >= 0 
                ? "text-green-600 bg-green-50" 
                : "text-red-600 bg-red-50"
            }`}>
              {change >= 0 ? "+" : ""}{change.toFixed(2)}%
            </p>
          </div>
          <div className="h-[200px] pt-4">
            <Line data={data} options={options} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};