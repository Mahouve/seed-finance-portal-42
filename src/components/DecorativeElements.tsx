import { CreditCard, PiggyBank, Wallet, ChartBar } from "lucide-react";

export const DecorativeElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top left decorative element */}
      <div className="absolute top-20 left-10 text-primary/20 animate-[float_6s_ease-in-out_infinite]">
        <CreditCard size={48} />
      </div>
      
      {/* Top right decorative element */}
      <div className="absolute top-40 right-20 text-secondary/20 animate-[float_8s_ease-in-out_infinite]">
        <PiggyBank size={48} />
      </div>
      
      {/* Bottom left decorative element */}
      <div className="absolute bottom-40 left-20 text-accent/20 animate-[float_7s_ease-in-out_infinite]">
        <Wallet size={48} />
      </div>
      
      {/* Bottom right decorative element */}
      <div className="absolute bottom-20 right-10 text-primary/20 animate-[float_5s_ease-in-out_infinite]">
        <ChartBar size={48} />
      </div>
    </div>
  );
};