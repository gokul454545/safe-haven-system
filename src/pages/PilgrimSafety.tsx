import Navigation from "@/components/Navigation";
import { StatusCard } from "@/components/StatusCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation2, Shield, AlertTriangle, Route, Smartphone } from "lucide-react";

const PilgrimSafety = () => {
  const safeRoutes = [
    { id: 1, from: "Main Gate", to: "Ghat Area", status: "Optimal", crowdLevel: "Low", estimatedTime: "12 min" },
    { id: 2, from: "Parking Zone A", to: "Temple Complex", status: "Moderate", crowdLevel: "Medium", estimatedTime: "18 min" },
    { id: 3, from: "Station Entry", to: "Sacred Ghats", status: "Congested", crowdLevel: "High", estimatedTime: "35 min" },
  ];

  const emergencyServices = [
    { type: "Medical Aid", location: "Sector 3", distance: "200m", responseTime: "3 min" },
    { type: "Security Post", location: "Main Plaza", distance: "150m", responseTime: "2 min" },
    { type: "Lost & Found", location: "Help Center", distance: "300m", responseTime: "5 min" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Pilgrim Safety Portal</h1>
          <p className="text-muted-foreground">AI-powered navigation and safety guidance for pilgrims</p>
        </div>

        {/* Safety Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatusCard
            title="Current Location Safety"
            value="Safe"
            subtitle="Low crowd density area"
            icon={Shield}
            variant="success"
          />
          <StatusCard
            title="Nearest Emergency Service"
            value="150m"
            subtitle="Medical aid available"
            icon={MapPin}
            variant="default"
          />
          <StatusCard
            title="AR Navigation Active"
            value="Connected"
            subtitle="Real-time route guidance"
            icon={Navigation2}
            variant="success"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AR Navigation Panel */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Route className="h-5 w-5 text-primary" />
                <span>AR Safe Route Navigation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-primary rounded-lg p-6 text-white mb-6">
                <h3 className="text-xl font-bold mb-2">AR Navigation Active</h3>
                <p className="opacity-90">Point your phone camera to see real-time safety guidance and crowd-aware routing</p>
                <Button className="mt-4 bg-white text-primary hover:bg-white/90">
                  <Smartphone className="h-4 w-4 mr-2" />
                  Open AR Navigation
                </Button>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Recommended Safe Routes</h4>
                {safeRoutes.map((route) => (
                  <div key={route.id} className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Navigation2 className="h-4 w-4 text-primary" />
                        <span className="font-medium text-foreground">
                          {route.from} → {route.to}
                        </span>
                      </div>
                      <Badge variant={
                        route.status === 'Optimal' ? 'default' :
                        route.status === 'Moderate' ? 'secondary' : 'destructive'
                      }>
                        {route.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Crowd Level: {route.crowdLevel}</span>
                      <span>Est. Time: {route.estimatedTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Emergency Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-emergency" />
                <span>Emergency Services</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-gradient-emergency text-emergency-foreground hover:opacity-90">
                <AlertTriangle className="h-4 w-4 mr-2" />
                SOS Emergency Alert
              </Button>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Nearby Services</h4>
                {emergencyServices.map((service, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/30 border border-border">
                    <div className="font-medium text-foreground">{service.type}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      <div>{service.location}</div>
                      <div className="flex justify-between mt-1">
                        <span>{service.distance} away</span>
                        <span className="text-primary">{service.responseTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Safety Tips */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Safety Guidelines</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Keep Your Halo Band Active</h4>
                <p className="text-sm text-muted-foreground">Ensure your wearable device is charged and connected for continuous health monitoring.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Navigation2 className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Follow AR Guidance</h4>
                <p className="text-sm text-muted-foreground">Use the AR app for real-time safe path navigation and crowd-aware routing.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Emergency Protocols</h4>
                <p className="text-sm text-muted-foreground">Press the SOS button on your Halo Band or app for immediate emergency response.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PilgrimSafety;