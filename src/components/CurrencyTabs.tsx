import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CurrencyCard } from "./CurrencyCard";
import { useQuery } from "@tanstack/react-query";

interface ExchangeRates {
  [key: string]: number;
}

const fetchExchangeRates = async () => {
  const response = await fetch("https://open.er-api.com/v6/latest/USD");
  const data = await response.json();
  return data.rates;
};

const centralAfricanCurrencies = {
  "CFA Franc BEAC (XAF)": { code: "XAF", name: "Franc CFA BEAC" },
  "CFA Franc BCEAO (XOF)": { code: "XOF", name: "Franc CFA BCEAO" },
};

const otherAfricanCurrencies = {
  "Nigerian Naira (NGN)": { code: "NGN", name: "Naira Nigérian" },
  "South African Rand (ZAR)": { code: "ZAR", name: "Rand Sud-africain" },
  "Kenyan Shilling (KES)": { code: "KES", name: "Shilling Kenyan" },
  "Egyptian Pound (EGP)": { code: "EGP", name: "Livre Égyptienne" },
};

export const CurrencyTabs = () => {
  const [activeTab, setActiveTab] = useState("central");

  const { data: rates, isLoading } = useQuery({
    queryKey: ["exchangeRates"],
    queryFn: fetchExchangeRates,
    refetchInterval: 300000, // Refresh every 5 minutes
  });

  if (isLoading) {
    return <div className="text-center py-8">Chargement des taux de change...</div>;
  }

  const calculateChange = (current: number, previous: number) => {
    return ((current - previous) / previous) * 100;
  };

  const renderCurrencyCards = (currencies: typeof centralAfricanCurrencies) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(currencies).map(([key, { code }]) => (
          <CurrencyCard
            key={code}
            name={key}
            value={rates?.[code] || 0}
            change={calculateChange(rates?.[code] || 0, (rates?.[code] || 0) * 0.99)}
          />
        ))}
      </div>
    );
  };

  return (
    <Tabs defaultValue="central" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="central">Afrique Centrale</TabsTrigger>
        <TabsTrigger value="other">Autres Pays Africains</TabsTrigger>
      </TabsList>
      <TabsContent value="central" className="mt-4">
        {renderCurrencyCards(centralAfricanCurrencies)}
      </TabsContent>
      <TabsContent value="other" className="mt-4">
        {renderCurrencyCards(otherAfricanCurrencies)}
      </TabsContent>
    </Tabs>
  );
};