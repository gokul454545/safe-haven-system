import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatusCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  variant?: "default" | "emergency" | "warning" | "success";
  trend?: "up" | "down" | "stable";
}

export const StatusCard = ({ 
  title, 
  value,  
  subtitle, 
  icon: Icon, 
  variant = "default",
  trend 
}: StatusCardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "emergency":
        return "border-emergency bg-emergency/5 shadow-emergency";
      case "warning":
        return "border-warning bg-warning/5 shadow-primary";
      case "success":
        return "border-success bg-success/5 shadow-success";
      default:
        return "border-border bg-card shadow-card";
    }
  };

  const getIconStyles = () => {
    switch (variant) {
      case "emergency":
        return "text-emergency bg-emergency/10";
      case "warning":
        return "text-warning bg-warning/10";
      case "success":
        return "text-success bg-success/10";
      default:
        return "text-primary bg-primary/10";
    }
  };

  return (
    <Card className={`transition-smooth hover:shadow-lg ${getVariantStyles()}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-lg ${getIconStyles()}`}>
          <Icon className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
};