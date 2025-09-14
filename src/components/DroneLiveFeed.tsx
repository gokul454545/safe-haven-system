import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Navigation, Battery, Signal, MapPin, X } from "lucide-react";

interface DroneLiveFeedProps {
  drone: any;
  isOpen: boolean;
  onClose: () => void;
}

const DroneLiveFeed = ({ drone, isOpen, onClose }: DroneLiveFeedProps) => {
  const [feedActive, setFeedActive] = useState(true);

  if (!isOpen || !drone) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl bg-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Camera className="h-5 w-5 text-primary" />
              <span>Live Feed - {drone.name}</span>
              <Badge variant="default" className="bg-red-500 text-white animate-pulse">
                ● LIVE
              </Badge>
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Live Feed Display */}
          <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
            {feedActive ? (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                {/* Simulated drone feed background */}
                <div className="absolute inset-0 bg-gray-900">
                  <div className="absolute inset-0 opacity-30">
                    {/* Grid overlay */}
                    <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className="border border-green-400/20"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Crowd simulation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-green-400 text-lg font-mono">
                        CROWD DENSITY: HIGH
                      </div>
                      <div className="text-green-400 text-sm font-mono">
                        SECTOR 3 - MAIN GATHERING AREA
                      </div>
                      <div className="flex justify-center space-x-8 text-green-400 text-xs font-mono">
                        <div>LAT: 22.7196° N</div>
                        <div>LON: 75.8577° E</div>
                        <div>ALT: {drone.altitude}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Moving elements to simulate crowd */}
                  <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/2 right-1/3 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
                
                {/* Overlay UI elements */}
                <div className="absolute top-4 left-4 space-y-2">
                  <div className="bg-black/70 text-green-400 px-2 py-1 rounded text-xs font-mono">
                    REC ● {new Date().toLocaleTimeString()}
                  </div>
                  <div className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                    Zoom: 2.4x
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 space-y-2 text-right">
                  <div className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                    Signal: Excellent
                  </div>
                  <div className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                    Battery: {drone.battery}%
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/70 text-white px-3 py-2 rounded">
                    <div className="flex justify-between items-center text-sm">
                      <span>Current Mission: {drone.mission}</span>
                      <span>Speed: {drone.speed}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-400">
                  <Camera className="h-12 w-12 mx-auto mb-2" />
                  <p>Feed Disconnected</p>
                </div>
              </div>
            )}
          </div>

          {/* Drone Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Battery className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">{drone.battery}%</div>
                <div className="text-xs text-muted-foreground">Battery</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Signal className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">Excellent</div>
                <div className="text-xs text-muted-foreground">Signal</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Navigation className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">{drone.speed}</div>
                <div className="text-xs text-muted-foreground">Speed</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">{drone.altitude}</div>
                <div className="text-xs text-muted-foreground">Altitude</div>
              </div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex space-x-2">
            <Button 
              variant={feedActive ? "destructive" : "default"}
              onClick={() => setFeedActive(!feedActive)}
            >
              {feedActive ? "Stop Feed" : "Start Feed"}
            </Button>
            <Button variant="outline">
              <MapPin className="h-4 w-4 mr-2" />
              Track on Map
            </Button>
            <Button variant="outline">
              <Navigation className="h-4 w-4 mr-2" />
              Control Drone
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DroneLiveFeed;