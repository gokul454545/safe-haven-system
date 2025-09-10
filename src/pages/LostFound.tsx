import Navigation from "@/components/Navigation";
import { StatusCard } from "@/components/StatusCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Users, Search, Camera, Clock, MapPin, AlertCircle } from "lucide-react";

const LostFound = () => {
  const recentMissing = [
    { 
      id: "LF-2024-001", 
      name: "Ramesh Kumar", 
      age: 65, 
      lastSeen: "Sector 4, Main Ghat", 
      time: "2 hours ago", 
      status: "Active Search",
      description: "Wearing white kurta, grey beard"
    }, 
    { 
      id: "LF-2024-002", 
      name: "Priya Sharma", 
      age: 8, 
      lastSeen: "Temple Complex", 
      time: "45 min ago", 
      status: "High Priority",
      description: "Pink dress, carrying small bag"
    },
    { 
      id: "LF-2024-003", 
      name: "Mukesh Patel", 
      age: 45, 
      lastSeen: "Parking Area B", 
      time: "1 hour ago", 
      status: "Found",
      description: "Blue shirt, glasses"
    },
  ];

  const aiSearchStats = [
    { camera: "Camera Zone A", scans: 2847, matches: 12 },
    { camera: "Camera Zone B", scans: 3521, matches: 8 },
    { camera: "Camera Zone C", scans: 1964, matches: 15 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Lost & Found System</h1>
          <p className="text-muted-foreground">AI-powered facial recognition and tracking for missing persons</p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatusCard
            title="Active Cases"
            value="12"
            subtitle="2 high priority"
            icon={Users}
            variant="warning"
          />
          <StatusCard
            title="Found Today"
            value="8"
            subtitle="Average 15 min resolution"
            icon={Search}
            variant="success"
          />
          <StatusCard
            title="AI Cameras Active"
            value="247"
            subtitle="Scanning continuously"
            icon={Camera}
            variant="default"
          />
          <StatusCard
            title="Response Time"
            value="12 min"
            subtitle="Average case resolution"
            icon={Clock}
            variant="default"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Report Missing Person */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-emergency" />
                <span>Report Missing Person</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Input placeholder="Full Name" />
                <Input placeholder="Age" type="number" />
                <Input placeholder="Last seen location" />
                <Input placeholder="Physical description" />
                <Input placeholder="Contact number" />
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg border border-border">
                <div className="flex items-center space-x-2 mb-2">
                  <Camera className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">Upload Photo</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Upload a clear photo for AI facial recognition search
                </p>
                <Button variant="outline" className="w-full mt-3">
                  <Camera className="h-4 w-4 mr-2" />
                  Choose Photo
                </Button>
              </div>

              <Button className="w-full bg-gradient-emergency text-emergency-foreground hover:opacity-90">
                <AlertCircle className="h-4 w-4 mr-2" />
                Submit Missing Person Report
              </Button>
            </CardContent>
          </Card>

          {/* Active Cases */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Recent Missing Persons</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMissing.map((person) => (
                  <div key={person.id} className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{person.name}</h4>
                        <p className="text-sm text-muted-foreground">Age: {person.age} • ID: {person.id}</p>
                      </div>
                      <Badge variant={
                        person.status === 'Found' ? 'default' :
                        person.status === 'High Priority' ? 'destructive' : 'secondary'
                      }>
                        {person.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">Last seen: {person.lastSeen}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">{person.time}</span>
                      </div>
                      <p className="text-muted-foreground">{person.description}</p>
                    </div>

                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline">
                        <Camera className="h-4 w-4 mr-1" />
                        View AI Search
                      </Button>
                      <Button size="sm" variant="outline">
                        <MapPin className="h-4 w-4 mr-1" />
                        Track Location
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Search Performance */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Camera className="h-5 w-5 text-primary" />
              <span>AI Facial Recognition Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aiSearchStats.map((stat, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h4 className="font-semibold text-foreground mb-3">{stat.camera}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Faces Scanned:</span>
                      <span className="font-medium text-foreground">{stat.scans.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Potential Matches:</span>
                      <span className="font-medium text-primary">{stat.matches}</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2 mt-3">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full" 
                        style={{ width: `${(stat.matches / stat.scans) * 100 * 100}%` }}
                      ></div>
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

export default LostFound;