import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, Camera, Shield, Clock, Heart, MapPin, 
  Zap, CheckCircle, Play, ArrowRight, LogIn
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DemoGuide = () => {
  const navigate = useNavigate();

  const demoSteps = [
    {
      title: "1. Login & Command Center (45s)",
      description: "Start with secure login and view live dashboard",
      actions: [ 
        "Click 'Access Command Center' to login",
        "Navigate to Dashboard to see 2.8M pilgrims monitored",
        "Point to live stats: 23 alerts, 98.7% uptime",
        "Click 'Emergency Broadcast' to simulate mass alert"
      ],
      route: "/login",
      icon: LogIn,
      duration: "45s"
    },
    {
      title: "2. AI-Powered Lost & Found (60s)",
      description: "Demonstrate facial recognition across 247 cameras",
      actions: [
        "Navigate to Lost & Found system",
        "Click 'Choose Photo' to open AI scanner", 
        "Upload photo and start AI scanning",
        "Show scanning across all camera zones",
        "Display potential matches with confidence scores"
      ],
      route: "/lost-found",
      icon: Camera,
      duration: "60s"
    },
    {
      title: "3. SOS Emergency Response (45s)",
      description: "Show real-time emergency detection and response",
      actions: [
        "Navigate to Pilgrim Safety portal",
        "Click large 'SOS Emergency Alert' button",
        "Show emergency banner activation",
        "Highlight location tracking and response dispatch",
        "Point to 50,000 Halo Bands monitoring vitals"
      ],
      route: "/pilgrim-safety",
      icon: Shield,
      duration: "45s"
    },
    {
      title: "4. Drone Fleet Surveillance (30s)",
      description: "Display autonomous aerial intelligence network",
      actions: [
        "Navigate to Drone Operations",
        "Select Drone D-01 and click 'Live Feed'",
        "Show simulated camera feed with crowd analysis",
        "Point to battery levels and mission status",
        "Highlight real-time aerial coverage"
      ],
      route: "/drone-ops",
      icon: Zap,
      duration: "30s"
    },
    {
      title: "5. Impact Summary (30s)",
      description: "Present results and future vision",
      actions: [
        "Navigate to Impact Summary",
        "Highlight key metrics: 2.8M monitored, 12 min resolution",
        "Show achievement cards and technology impact",
        "End with closing statement on mass event safety"
      ],
      route: "/impact-summary",
      icon: CheckCircle,
      duration: "30s"
    }
  ];

  const keyTalkingPoints = [
    "2.8 million pilgrims monitored in real-time",
    "247 AI cameras with facial recognition",
    "50,000 Halo Bands for health monitoring", 
    "12-minute average missing person resolution",
    "98.7% system reliability achieved",
    "Zero stampede incidents prevented",
    "156 lives saved through early detection"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Demo Presentation Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            3-4 Minute Interactive Demonstration Script
          </p>
          <Badge variant="default" className="text-lg px-6 py-2">
            Total Duration: ~3.5 minutes
          </Badge>
        </div>

        {/* Demo Steps */}
        <div className="grid gap-6 mb-12">
          {demoSteps.map((step, index) => (
            <Card key={index} className="bg-card/95 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span>{step.title}</span>
                  </CardTitle>
                  <Badge variant="outline">{step.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <div className="space-y-2 mb-4">
                  {step.actions.map((action, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => navigate(step.route)}
                  className="bg-gradient-primary text-primary-foreground"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Go to {step.title.split('.')[1]}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Talking Points */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Numbers to Emphasize</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyTalkingPoints.map((point, index) => (
                <div key={index} className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="font-medium text-foreground">{point}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Start */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Demo?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/login")}
              className="bg-gradient-primary text-primary-foreground text-lg px-8 py-3"
            >
              <Play className="h-5 w-5 mr-2" />
              Begin Demo Presentation
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate("/impact-summary")}
              className="text-lg px-8 py-3"
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              View Impact Summary
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoGuide;