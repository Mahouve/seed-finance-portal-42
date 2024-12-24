import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from "lucide-react";

const data = [
  { month: 'Jan', depenses: 180000, budget: 200000 },
  { month: 'Fév', depenses: 150000, budget: 200000 },
  { month: 'Mar', depenses: 130000, budget: 200000 },
  { month: 'Avr', depenses: 170000, budget: 200000 },
];

export const Recommendations = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Analyse des Tendances
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="depenses" 
                stroke="#3B82F6" 
                name="Dépenses"
              />
              <Line 
                type="monotone" 
                dataKey="budget" 
                stroke="#22C55E" 
                name="Budget"
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};