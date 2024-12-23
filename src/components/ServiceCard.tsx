import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export const ServiceCard = ({ icon: Icon, title, description, onClick }: ServiceCardProps) => {
  return (
    <Button
      variant="outline"
      className="h-auto py-3 flex flex-col items-center gap-2 text-center hover:bg-accent/20 transition-all duration-300"
      onClick={onClick}
    >
      <Icon className="h-5 w-5 text-primary" />
      <span className="font-medium text-sm">{title}</span>
      <span className="text-xs text-muted-foreground">{description}</span>
    </Button>
  );
};