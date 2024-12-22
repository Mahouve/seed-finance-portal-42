import { CreditCard, PiggyBank, Wallet, ChartBar, LineChart, TrendingUp, DollarSign, Coins, Sparkles, MessageCircle, Star } from "lucide-react";

export const DecorativeElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Section title decorative elements */}
      <div className="absolute top-[600px] left-10 text-primary/30 animate-float" style={{ animationDelay: "0.2s" }}>
        <Sparkles size={32} className="rotate-12" />
      </div>
      
      {/* Testimonials section decorative elements */}
      {/* Right side */}
      <div className="absolute top-[1200px] right-10 text-secondary/30 animate-float" style={{ animationDelay: "0.7s" }}>
        <MessageCircle size={32} className="-rotate-12" />
      </div>
      <div className="absolute top-[1150px] right-32 text-accent/30 animate-float" style={{ animationDelay: "1.2s" }}>
        <Star size={28} className="rotate-45" />
      </div>
      <div className="absolute top-[1250px] right-24 text-primary/30 animate-float" style={{ animationDelay: "1.5s" }}>
        <Sparkles size={24} className="-rotate-12" />
      </div>

      {/* Left side */}
      <div className="absolute top-[1200px] left-10 text-secondary/30 animate-float" style={{ animationDelay: "1.8s" }}>
        <MessageCircle size={32} className="rotate-12" />
      </div>
      <div className="absolute top-[1150px] left-32 text-accent/30 animate-float" style={{ animationDelay: "2.1s" }}>
        <Star size={28} className="-rotate-45" />
      </div>
      <div className="absolute top-[1250px] left-24 text-primary/30 animate-float" style={{ animationDelay: "2.4s" }}>
        <Sparkles size={24} className="rotate-12" />
      </div>

      {/* Top left decorative elements */}
      <div className="absolute top-20 left-10 text-primary/20 animate-float">
        <CreditCard size={48} />
      </div>
      <div className="absolute top-40 left-[15%] text-[#8B5CF6]/10 animate-float" style={{ animationDelay: "0.5s" }}>
        <LineChart size={36} />
      </div>
      
      {/* Top right decorative elements */}
      <div className="absolute top-40 right-20 text-secondary/20 animate-float" style={{ animationDelay: "1s" }}>
        <PiggyBank size={48} />
      </div>
      <div className="absolute top-60 right-[25%] text-[#F97316]/10 animate-float" style={{ animationDelay: "1.5s" }}>
        <TrendingUp size={42} />
      </div>
      
      {/* Middle decorative elements */}
      <div className="absolute top-[50%] left-[10%] text-[#0EA5E9]/10 animate-float" style={{ animationDelay: "2s" }}>
        <Coins size={36} />
      </div>
      <div className="absolute top-[45%] right-[15%] text-[#D946EF]/10 animate-float" style={{ animationDelay: "2.5s" }}>
        <DollarSign size={42} />
      </div>
      
      {/* Bottom left decorative elements */}
      <div className="absolute bottom-40 left-20 text-accent/20 animate-float" style={{ animationDelay: "3s" }}>
        <Wallet size={48} />
      </div>
      
      {/* Bottom right decorative elements */}
      <div className="absolute bottom-20 right-10 text-primary/20 animate-float" style={{ animationDelay: "3.5s" }}>
        <ChartBar size={48} />
      </div>
    </div>
  );
};