import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Upload, Search, Eye, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PhotoUploadScannerProps {
  isOpen: boolean;
  onClose: () => void;
}

const PhotoUploadScanner = ({ isOpen, onClose }: PhotoUploadScannerProps) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [matches, setMatches] = useState<any[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const startAIScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    
    // Simulate AI scanning process
    setTimeout(() => {
      setMatches([
        {
          camera: "Camera Zone A - Gate 3",
          confidence: 94.2,
          timestamp: "2 hours 15 min ago",
          location: "Main Entry Area"
        },
        {
          camera: "Camera Zone C - Temple",
          confidence: 87.5,
          timestamp: "1 hour 45 min ago", 
          location: "Temple Complex"
        },
        {
          camera: "Camera Zone B - Food Court",
          confidence: 82.1,
          timestamp: "35 min ago",
          location: "Food Distribution Area"
        }
      ]);
      
      setIsScanning(false);
      setScanComplete(true);
      
      toast({
        title: "AI Scan Complete",
        description: "Found 3 potential matches across camera network",
      });
    }, 4000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl bg-card max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Eye className="h-5 w-5 text-primary" />
            <span>AI Facial Recognition Scanner</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Upload Section */}
          <div className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              {uploadedImage ? (
                <div className="space-y-4">
                  <img 
                    src={uploadedImage} 
                    alt="Uploaded" 
                    className="max-h-48 mx-auto rounded-lg border"
                  />
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    variant="outline"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Change Photo
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Camera className="h-12 w-12 mx-auto text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Upload Missing Person Photo</p>
                    <p className="text-sm text-muted-foreground">Clear face photo for best AI recognition</p>
                  </div>
                  <Button onClick={() => fileInputRef.current?.click()}>
                    <Upload className="h-4 w-4 mr-2" />
                    Choose Photo
                  </Button>
                </div>
              )}
            </div>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>

          {/* Scanning Status */}
          {uploadedImage && (
            <div className="bg-muted/30 p-4 rounded-lg border">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-foreground">AI Camera Network</span>
                <Badge variant="outline">247 Active Cameras</Badge>
              </div>
              
              {!isScanning && !scanComplete && (
                <Button 
                  onClick={startAIScan}
                  className="w-full bg-gradient-primary text-primary-foreground"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Start AI Face Recognition Scan
                </Button>
              )}

              {isScanning && (
                <div className="text-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-3"></div>
                  <p className="font-medium text-foreground">Scanning 247 cameras...</p>
                  <p className="text-sm text-muted-foreground">Processing facial recognition algorithms</p>
                  <div className="mt-3 space-y-1">
                    <div className="text-xs text-muted-foreground">✓ Zone A: 89 cameras scanned</div>
                    <div className="text-xs text-muted-foreground">✓ Zone B: 96 cameras scanned</div>
                    <div className="text-xs text-muted-foreground animate-pulse">⏳ Zone C: scanning...</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Scan Results */}
          {scanComplete && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-foreground">Potential Matches Found</h4>
                <Badge variant="default">{matches.length} matches</Badge>
              </div>
              
              {matches.map((match, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h5 className="font-medium text-foreground">{match.camera}</h5>
                      <p className="text-sm text-muted-foreground">{match.timestamp}</p>
                    </div>
                    <Badge 
                      variant={match.confidence > 90 ? "default" : "secondary"}
                    >
                      {match.confidence}% match
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm mb-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{match.location}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      View Footage
                    </Button>
                    <Button size="sm" variant="outline">
                      <MapPin className="h-4 w-4 mr-1" />
                      Show Location
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Close Button */}
          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={onClose}>
              Close Scanner
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoUploadScanner;