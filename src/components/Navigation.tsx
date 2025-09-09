import { Button } from "@/components/ui/button";
import { Shield, Heart, Users, Radio, MapPin, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Shield, label: "Command Dashboard", active: location.pathname === "/" },
    { path: "/pilgrim-safety", icon: MapPin, label: "Pilgrim Safety", active: location.pathname === "/pilgrim-safety" },
    { path: "/lost-found", icon: Users, label: "Lost & Found", active: location.pathname === "/lost-found" },
    { path: "/health-monitoring", icon: Heart, label: "Health Monitor", active: location.pathname === "/health-monitoring" },
    { path: "/drone-ops", icon: Radio, label: "Drone Operations", active: location.pathname === "/drone-ops" },
    { path: "/analytics", icon: BarChart3, label: "AI Analytics", active: location.pathname === "/analytics" },
  ];

  return (
    <nav className="bg-card shadow-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Simhastha Safety AI</h1>
              <p className="text-xs text-muted-foreground">Smart Safety & Medical Ecosystem</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={item.active ? "default" : "ghost"}
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex items-center space-x-2">
              <div className="h-2 w-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">System Active</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;