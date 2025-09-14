import { useState } from "react";
import Navigation from "@/components/Navigation";
import { StatusCard } from "@/components/StatusCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DroneLiveFeed from "@/components/DroneLiveFeed";
import { Radio, Battery, MapPin, Package, AlertTriangle, Eye, Navigation2 } from "lucide-react";

const DroneOperations = () => {
  const [selectedDrone, setSelectedDrone] = useState<any>(null);
  const [liveFeedOpen, setLiveFeedOpen] = useState(false);
  const droneFleet = [
    {
      id: "D-01",
      name: "Medical Response Alpha",
      status: "Active",
      mission: "Medical Supply Delivery",
      location: { sector: "Sector 7", coords: "28.6139° N, 77.2090° E" },
      battery: 87,
      altitude: 120,
      speed: 25, 
      eta: "3 min",
      payload: "Emergency Medical Kit"
    },
    {
      id: "D-02",
      name: "Crowd Monitor Beta",
      status: "Active",
      mission: "Crowd Surveillance",
      location: { sector: "Main Plaza", coords: "28.6129° N, 77.2080° E" },
      battery: 92,
      altitude: 150,
      speed: 15,
      eta: "Patrol Mode",
      payload: "4K Camera System"
    },
    {
      id: "D-03",
      name: "Emergency Response Gamma",
      status: "Charging",
      mission: "Standby",
      location: { sector: "Base Station", coords: "28.6119° N, 77.2070° E" },
      battery: 15,
      altitude: 0,
      speed: 0,
      eta: "45 min charge",
      payload: "None"
    },
    {
      id: "D-04",
      name: "First Aid Delta",
      status: "Active",
      mission: "Emergency Announcement",
      location: { sector: "Ghat Area", coords: "28.6149° N, 77.2100° E" },
      battery: 78,
      altitude: 80,
      speed: 20,
      eta: "Broadcasting",
      payload: "Speaker System"
    }
  ];

  const missionQueue = [
    { id: "M-001", type: "Medical Delivery", priority: "Critical", location: "Sector 5", requestTime: "2 min ago" },
    { id: "M-002", type: "Crowd Monitoring", priority: "High", location: "Temple Complex", requestTime: "5 min ago" },
    { id: "M-003", type: "Emergency Broadcast", priority: "Medium", location: "Parking Zone B", requestTime: "8 min ago" },
  ];

  const deliveryStats = {
    completedToday: 47,
    averageTime: "4.2 min",
    successRate: "98.7%",
    activeMissions: 12
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Drone Operations Center</h1>
          <p className="text-muted-foreground">Autonomous medical delivery and emergency response coordination</p>
        </div>

        {/* Fleet Status */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatusCard
            title="Active Drones"
            value="12"
            subtitle="3 on medical missions"
            icon={Radio}
            variant="success"
          />
          <StatusCard
            title="Deliveries Today"
            value={deliveryStats.completedToday}
            subtitle={`${deliveryStats.successRate} success rate`}
            icon={Package}
            variant="default"
          />
          <StatusCard
            title="Response Time"
            value={deliveryStats.averageTime}
            subtitle="Average delivery time"
            icon={Navigation2}
            variant="default"
          />
          <StatusCard
            title="Fleet Health"
            value="Optimal"
            subtitle="All systems operational"
            icon={Battery}
            variant="success"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Drone Fleet */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Radio className="h-5 w-5 text-primary" />
                <span>Live Drone Fleet Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {droneFleet.map((drone) => (
                  <div key={drone.id} className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{drone.name}</h4>
                        <p className="text-sm text-muted-foreground">ID: {drone.id}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={
                          drone.status === 'Active' ? 'default' :
                          drone.status === 'Charging' ? 'secondary' : 'destructive'
                        }>
                          {drone.status}
                        </Badge>
                        <div className={`p-1 rounded ${
                          drone.battery > 70 ? 'bg-success/10 text-success' :
                          drone.battery > 30 ? 'bg-warning/10 text-warning' : 'bg-emergency/10 text-emergency'
                        }`}>
                          <Battery className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <span className="text-muted-foreground">Mission:</span>
                        <div className="font-medium text-foreground">{drone.mission}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Location:</span>
                        <div className="font-medium text-foreground">{drone.location.sector}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Battery:</span>
                        <div className={`font-bold ${
                          drone.battery > 70 ? 'text-success' :
                          drone.battery > 30 ? 'text-warning' : 'text-emergency'
                        }`}>
                          {drone.battery}%
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">ETA:</span>
                        <div className="font-medium text-primary">{drone.eta}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Payload: {drone.payload} • Altitude: {drone.altitude}m • Speed: {drone.speed} km/h
                      </div>
                      <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              setSelectedDrone(drone);
                              setLiveFeedOpen(true);
                            }}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            Live Feed
                          </Button>
                        <Button size="sm" variant="outline">
                          <MapPin className="h-4 w-4 mr-1" />
                          Track
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mission Control */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-emergency" />
                <span>Mission Control</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-gradient-emergency text-emergency-foreground hover:opacity-90">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Emergency Deploy All
              </Button>
              
              <Button variant="outline" className="w-full">
                <Package className="h-4 w-4 mr-2" />
                Medical Supply Drop
              </Button>

              <Button variant="outline" className="w-full">
                <Radio className="h-4 w-4 mr-2" />
                Emergency Broadcast
              </Button>

              <div className="space-y-3 mt-6">
                <h4 className="font-semibold text-foreground">Mission Queue</h4>
                {missionQueue.map((mission) => (
                  <div key={mission.id} className="p-3 rounded-lg bg-muted/30 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground text-sm">{mission.type}</span>
                      <Badge variant={
                        mission.priority === 'Critical' ? 'destructive' :
                        mission.priority === 'High' ? 'default' : 'secondary'
                      }>
                        {mission.priority}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <div>{mission.location}</div>
                      <div>{mission.requestTime}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Real-time Map Placeholder */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Live Drone Tracking Map</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-primary rounded-lg p-12 text-center text-white">
              <MapPin className="h-16 w-16 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">Real-time Drone Tracking</h3>
              <p className="opacity-90">Interactive map showing live drone positions, flight paths, and mission zones</p>
              <Button className="mt-4 bg-white text-primary hover:bg-white/90">
                <Eye className="h-4 w-4 mr-2" />
                Open Full Map View
              </Button>
            </div>
          </CardContent>
        </Card>

        <DroneLiveFeed 
          drone={selectedDrone}
          isOpen={liveFeedOpen}
          onClose={() => {
            setLiveFeedOpen(false);
            setSelectedDrone(null);
          }}
        />
      </div>
    </div>
  );
};

export default DroneOperations;