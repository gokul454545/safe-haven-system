import Navigation from "@/components/Navigation";
import { StatusCard } from "@/components/StatusCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Heart, 
  AlertTriangle, 
  Shield, 
  MapPin, 
  Activity,
  Radio,
  Eye,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const CommandDashboard = () => {
  const liveAlerts = [
    { id: 1, type: "warning", message: "High crowd density detected in Sector 7", time: "2 min ago", severity: "Medium" },
    { id: 2, type: "emergency", message: "Medical emergency - Halo Band Alert #HB-4521", time: "5 min ago", severity: "High" },
    { id: 3, type: "info", message: "Drone D-03 deployed for crowd monitoring", time: "8 min ago", severity: "Low" },
  ];

  const droneStatus = [
    { id: "D-01", status: "Active", location: "Sector 3", battery: 85, mission: "Crowd Monitoring" },
    { id: "D-02", status: "Active", location: "Sector 5", battery: 92, mission: "Medical Delivery" },
    { id: "D-03", status: "Charging", location: "Base Station", battery: 15, mission: "Standby" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-hero overflow-hidden">
        <img 
          src={heroImage} 
          alt="Simhastha Command Center" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-safety-secondary/90" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">Simhastha Command Center</h1>
            <p className="text-xl opacity-90">Safer India Begins With Smarter Actions</p>
            <div className="flex items-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-success rounded-full animate-pulse"></div>
                <span>All Systems Operational</span>
              </div>
              <div className="text-sm opacity-80">
                Live Monitoring • 24/7 Protection • Real-time Response
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatusCard
            title="Active Pilgrims"
            value="2,847,632"
            subtitle="↗ 12% from yesterday"
            icon={Users}
            variant="default"
          />
          <StatusCard
            title="Health Alerts"
            value="23"
            subtitle="3 critical, 20 moderate"
            icon={Heart}
            variant="warning"
          />
          <StatusCard
            title="Emergency Incidents"
            value="2"
            subtitle="Both resolved"
            icon={AlertTriangle}
            variant="success"
          />
          <StatusCard
            title="System Health"
            value="98.7%"
            subtitle="All systems operational"
            icon={Shield}
            variant="success"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Alerts */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-primary" />
                <span>Live Alerts & Events</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {liveAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start space-x-3 p-4 rounded-lg bg-card border border-border">
                    <div className={`p-2 rounded-full ${
                      alert.type === 'emergency' ? 'bg-emergency/10 text-emergency' :
                      alert.type === 'warning' ? 'bg-warning/10 text-warning' :
                      'bg-info/10 text-info'
                    }`}>
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-foreground">{alert.message}</p>
                        <Badge variant={
                          alert.severity === 'High' ? 'destructive' :
                          alert.severity === 'Medium' ? 'default' : 'secondary'
                        }>
                          {alert.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-gradient-emergency text-emergency-foreground hover:opacity-90">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Emergency Broadcast
              </Button>
              <Button variant="outline" className="w-full">
                <Radio className="h-4 w-4 mr-2" />
                Deploy Emergency Drone
              </Button>
              <Button variant="outline" className="w-full">
                <MapPin className="h-4 w-4 mr-2" />
                View Crowd Heatmap
              </Button>
              <Button variant="outline" className="w-full">
                <Eye className="h-4 w-4 mr-2" />
                Camera Network
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Drone Status */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Radio className="h-5 w-5 text-primary" />
              <span>Drone Fleet Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {droneStatus.map((drone) => (
                <div key={drone.id} className="p-4 rounded-lg bg-muted/30 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-foreground">{drone.id}</h4>
                    <Badge variant={drone.status === 'Active' ? 'default' : 'secondary'}>
                      {drone.status}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="text-foreground">{drone.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Battery:</span>
                      <span className={`font-medium ${
                        drone.battery > 70 ? 'text-success' :
                        drone.battery > 30 ? 'text-warning' : 'text-emergency'
                      }`}>
                        {drone.battery}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mission:</span>
                      <span className="text-foreground">{drone.mission}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CommandDashboard;