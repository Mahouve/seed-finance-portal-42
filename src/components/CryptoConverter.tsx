import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";

interface CryptoData {
  [key: string]: {
    usd: number;
    usd_24h_change: number;
  };
}

const fetchCryptoData = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,ripple&vs_currencies=usd&include_24hr_change=true"
  );
  return response.json();
};

export const CryptoConverter = () => {
  const [amount, setAmount] = useState("1");
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");

  const { data: cryptoData, isLoading } = useQuery<CryptoData>({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoData,
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  const calculateConversion = () => {
    if (!cryptoData || !cryptoData[selectedCrypto]) return "0";
    const rate = cryptoData[selectedCrypto].usd;
    return (parseFloat(amount) * rate).toFixed(2);
  };

  const getChangeColor = (change: number) => {
    return change >= 0 ? "text-green-600" : "text-red-600";
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Convertisseur Crypto</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Montant</label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Entrez un montant"
                min="0"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Crypto-monnaie</label>
              <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez une crypto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bitcoin">Bitcoin (BTC)</SelectItem>
                  <SelectItem value="ethereum">Ethereum (ETH)</SelectItem>
                  <SelectItem value="binancecoin">Binance Coin (BNB)</SelectItem>
                  <SelectItem value="ripple">Ripple (XRP)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-4">Chargement des taux...</div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <span className="font-medium">Valeur en USD:</span>
                <span className="text-xl font-bold">${calculateConversion()}</span>
              </div>
              {cryptoData && cryptoData[selectedCrypto] && (
                <div className="flex justify-between items-center text-sm">
                  <span>Variation 24h:</span>
                  <span className={getChangeColor(cryptoData[selectedCrypto].usd_24h_change)}>
                    {cryptoData[selectedCrypto].usd_24h_change.toFixed(2)}%
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};