import Navigation from "@/components/Navigation";
import { StatusCard } from "@/components/StatusCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, Thermometer, AlertTriangle, TrendingUp, Zap } from "lucide-react";

const HealthMonitoring = () => {
  const criticalAlerts = [
    {
      id: "HB-4521",
      pilgrim: "Radha Devi",
      age: 67,
      condition: "Abnormal Heart Rate",
      severity: "High",
      vitals: { heartRate: 145, temperature: 99.8, location: "Sector 7" },
      time: "2 min ago"
    },
    { 
      id: "HB-4522", 
      pilgrim: "Suresh Gupta",
      age: 45,
      condition: "Heat Exhaustion Risk",
      severity: "Medium",
      vitals: { heartRate: 110, temperature: 102.1, location: "Main Plaza" },
      time: "5 min ago"
    },
    {
      id: "HB-4523",
      pilgrim: "Meera Singh",
      age: 34,
      condition: "Low Blood Oxygen",
      severity: "Medium",
      vitals: { heartRate: 88, temperature: 98.2, location: "Ghat Area" },
      time: "8 min ago"
    }
  ];

  const haloBandStats = {
    active: 2847632,
    healthy: 2847420,
    attention: 189,
    critical: 23
  };

  const vitalTrends = [
    { metric: "Average Heart Rate", value: "78 BPM", trend: "stable", change: "+0.2%" },
    { metric: "Body Temperature", value: "98.9°F", trend: "up", change: "+1.8%" },
    { metric: "Stress Level", value: "Moderate", trend: "down", change: "-5.3%" },
    { metric: "Hydration", value: "Good", trend: "stable", change: "+0.5%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Health Monitoring Center</h1>
          <p className="text-muted-foreground">Real-time health tracking and medical emergency management</p>
        </div>

        {/* Halo Band Status */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatusCard
            title="Active Halo Bands"
            value={haloBandStats.active.toLocaleString()}
            subtitle="Real-time monitoring"
            icon={Heart}
            variant="default"
          />
          <StatusCard
            title="Healthy Vitals"
            value={haloBandStats.healthy.toLocaleString()}
            subtitle={`${((haloBandStats.healthy / haloBandStats.active) * 100).toFixed(1)}% of pilgrims`}
            icon={Activity}
            variant="success"
          />
          <StatusCard
            title="Need Attention"
            value={haloBandStats.attention}
            subtitle="Moderate risk detected"
            icon={Thermometer}
            variant="warning"
          />
          <StatusCard
            title="Critical Alerts"
            value={haloBandStats.critical}
            subtitle="Immediate response required"
            icon={AlertTriangle}
            variant="emergency"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Critical Health Alerts */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-emergency" />
                <span>Critical Health Alerts</span>
                <Badge variant="destructive" className="animate-pulse-emergency">{criticalAlerts.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {criticalAlerts.map((alert) => (
                  <div key={alert.id} className={`p-4 rounded-lg border ${
                    alert.severity === 'High' ? 'border-emergency bg-emergency/5' : 'border-warning bg-warning/5'
                  }`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{alert.pilgrim}</h4>
                        <p className="text-sm text-muted-foreground">Age: {alert.age} • Band ID: {alert.id}</p>
                      </div>
                      <Badge variant={alert.severity === 'High' ? 'destructive' : 'default'}>
                        {alert.severity} Priority
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <p className="font-medium text-foreground">{alert.condition}</p>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Heart Rate:</span>
                          <div className={`font-bold ${
                            alert.vitals.heartRate > 120 ? 'text-emergency' :
                            alert.vitals.heartRate > 100 ? 'text-warning' : 'text-success'
                          }`}>
                            {alert.vitals.heartRate} BPM
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Temperature:</span>
                          <div className={`font-bold ${
                            alert.vitals.temperature > 101 ? 'text-emergency' :
                            alert.vitals.temperature > 99 ? 'text-warning' : 'text-success'
                          }`}>
                            {alert.vitals.temperature}°F
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Location:</span>
                          <div className="font-bold text-foreground">{alert.vitals.location}</div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-gradient-emergency text-emergency-foreground hover:opacity-90">
                        <Zap className="h-4 w-4 mr-1" />
                        Deploy Medical Drone
                      </Button>
                      <Button size="sm" variant="outline">
                        <Heart className="h-4 w-4 mr-1" />
                        View Full Vitals
                      </Button>
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
                <Heart className="h-5 w-5 text-primary" />
                <span>Emergency Response</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-gradient-emergency text-emergency-foreground hover:opacity-90">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Mass Medical Alert
              </Button>
              
              <Button variant="outline" className="w-full">
                <Zap className="h-4 w-4 mr-2" />
                Deploy All Medical Drones
              </Button>
              
              <div className="space-y-3 mt-6">
                <h4 className="font-semibold text-foreground">Quick Stats</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Medical Teams:</span>
                    <span className="text-success font-medium">47 Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ambulances:</span>
                    <span className="text-success font-medium">12 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="text-primary font-medium">3.2 min avg</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Health Trends */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Population Health Trends</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {vitalTrends.map((trend, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">{trend.metric}</h4>
                  <div className="text-2xl font-bold text-foreground mb-1">{trend.value}</div>
                  <div className={`text-sm flex items-center space-x-1 ${
                    trend.trend === 'up' ? 'text-warning' :
                    trend.trend === 'down' ? 'text-success' : 'text-muted-foreground'
                  }`}>
                    <TrendingUp className={`h-3 w-3 ${
                      trend.trend === 'down' ? 'rotate-180' : ''
                    }`} />
                    <span>{trend.change}</span>
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

export default HealthMonitoring;