import { CreditCard, PiggyBank, Wallet, ChartBar, LineChart, TrendingUp, DollarSign, Coins } from "lucide-react";

export const DecorativeElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top left decorative elements */}
      <div className="absolute top-20 left-10 text-primary/20 animate-[float_6s_ease-in-out_infinite]">
        <CreditCard size={48} />
      </div>
      <div className="absolute top-40 left-[15%] text-[#8B5CF6]/10 animate-[float_7s_ease-in-out_infinite]">
        <LineChart size={36} />
      </div>
      
      {/* Top right decorative elements */}
      <div className="absolute top-40 right-20 text-secondary/20 animate-[float_8s_ease-in-out_infinite]">
        <PiggyBank size={48} />
      </div>
      <div className="absolute top-60 right-[25%] text-[#F97316]/10 animate-[float_5s_ease-in-out_infinite]">
        <TrendingUp size={42} />
      </div>
      
      {/* Middle decorative elements */}
      <div className="absolute top-[50%] left-[10%] text-[#0EA5E9]/10 animate-[float_9s_ease-in-out_infinite]">
        <Coins size={36} />
      </div>
      <div className="absolute top-[45%] right-[15%] text-[#D946EF]/10 animate-[float_7s_ease-in-out_infinite]">
        <DollarSign size={42} />
      </div>
      
      {/* Bottom left decorative elements */}
      <div className="absolute bottom-40 left-20 text-accent/20 animate-[float_7s_ease-in-out_infinite]">
        <Wallet size={48} />
      </div>
      
      {/* Bottom right decorative elements */}
      <div className="absolute bottom-20 right-10 text-primary/20 animate-[float_5s_ease-in-out_infinite]">
        <ChartBar size={48} />
      </div>
    </div>
  );
};