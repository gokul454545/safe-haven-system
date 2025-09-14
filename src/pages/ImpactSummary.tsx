import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, Camera, Shield, Clock, Heart, MapPin, 
  Zap, CheckCircle, TrendingUp, Award 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ImpactSummary = () => {
  const navigate = useNavigate();

  const keyMetrics = [
    {
      title: "Pilgrims Monitored",
      value: "2.8M",
      subtitle: "Active participants",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "AI Cameras Active", 
      value: "247",
      subtitle: "Real-time surveillance",
      icon: Camera,
      color: "text-blue-500"
    },
    {
      title: "Halo Bands Deployed",
      value: "50K",
      subtitle: "Health monitoring devices", 
      icon: Heart,
      color: "text-red-500"
    },
    {
      title: "System Uptime",
      value: "98.7%",
      subtitle: "Reliability achieved",
      icon: Shield,
      color: "text-green-500"
    },
    {
      title: "Average Resolution Time",
      value: "12 min",
      subtitle: "Missing person cases",
      icon: Clock,
      color: "text-orange-500"
    },
    {
      title: "Lives Saved",
      value: "156",
      subtitle: "Emergency interventions",
      icon: CheckCircle,
      color: "text-emerald-500"
    }
  ];

  const achievements = [
    {
      title: "Zero Stampede Incidents",
      description: "AI crowd analysis prevented all potential stampedes",
      icon: Shield,
      status: "Success"
    },
    {
      title: "97% Missing Person Recovery",
      description: "Facial recognition reunited 97% of reported cases",
      icon: Camera,
      status: "Success"
    },
    {
      title: "Real-time Health Monitoring",
      description: "50,000 wearable devices tracking vitals 24/7",
      icon: Heart,
      status: "Active"
    },
    {
      title: "Autonomous Response Fleet",
      description: "15 drones providing aerial surveillance and emergency delivery",
      icon: Zap,
      status: "Operational"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6">
            <Award className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Mission Impact Report
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simhastha 2024: The largest religious gathering secured by AI technology
          </p>
          <Badge variant="default" className="mt-4 text-lg px-6 py-2">
            ✓ Mission Successful
          </Badge>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="bg-card/95 backdrop-blur-sm border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                  <TrendingUp className="h-4 w-4 text-success" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-foreground">{metric.value}</div>
                  <div className="font-medium text-foreground">{metric.title}</div>
                  <div className="text-sm text-muted-foreground">{metric.subtitle}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Cards */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-success" />
              <span>Key Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="p-4 rounded-lg border bg-muted/30">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <achievement.icon className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                    </div>
                    <Badge 
                      variant={achievement.status === 'Success' ? 'default' : 'secondary'}
                    >
                      {achievement.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground pl-8">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technology Impact */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Revolutionary Technology Implementation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">AI Facial Recognition</h3>
                  <p className="text-muted-foreground mb-3">
                    247 cameras scanning continuously, processing over 8,000 faces daily with 35+ potential matches for missing persons.
                  </p>
                  <div className="bg-success/10 p-3 rounded border border-success/20">
                    <span className="text-success font-medium">97% success rate in reuniting families</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Predictive Health Monitoring</h3>
                  <p className="text-muted-foreground mb-3">
                    50,000 Halo Bands detecting medical emergencies before symptoms appear, enabling proactive interventions.
                  </p>
                  <div className="bg-success/10 p-3 rounded border border-success/20">
                    <span className="text-success font-medium">156 lives saved through early detection</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Autonomous Drone Fleet</h3>
                  <p className="text-muted-foreground mb-3">
                    15 drones providing aerial surveillance, crowd analysis, and emergency medical supply delivery in real-time.
                  </p>
                  <div className="bg-primary/10 p-3 rounded border border-primary/20">
                    <span className="text-primary font-medium">100% area coverage maintained</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Crowd Intelligence System</h3>
                  <p className="text-muted-foreground mb-3">
                    Real-time crowd density monitoring preventing stampedes and optimizing pilgrim flow across all sectors.
                  </p>
                  <div className="bg-primary/10 p-3 rounded border border-primary/20">
                    <span className="text-primary font-medium">Zero stampede incidents reported</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            The Future of Mass Event Safety
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're not just managing crowds—we're saving lives, reuniting families, and proving AI can protect humanity's largest gatherings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/command-dashboard")}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90"
            >
              <Shield className="h-4 w-4 mr-2" />
              View Live Dashboard
            </Button>
            <Button variant="outline" onClick={() => navigate("/")}>
              <Users className="h-4 w-4 mr-2" />
              Back to Overview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSummary;