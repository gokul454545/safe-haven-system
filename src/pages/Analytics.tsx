import Navigation from "@/components/Navigation";
import { StatusCard } from "@/components/StatusCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, AlertTriangle, Brain, Users, Clock, MapPin, Activity } from "lucide-react";

const Analytics = () => {
  const predictiveAlerts = [
    {
      zone: "Sector 4 - Main Ghat",
      riskLevel: "High",
      prediction: "Stampede Risk",
      confidence: 87,
      timeframe: "Next 15 minutes",
      factors: ["Crowd density exceeding 6 people/m²", "Multiple exit points blocked", "Religious ceremony starting"]
    },
    {
      zone: "Temple Complex Entry",
      riskLevel: "Medium",
      prediction: "Bottleneck Formation",
      confidence: 72,
      timeframe: "Next 30 minutes",
      factors: ["Increasing foot traffic", "Single entry point", "VIP arrival expected"]
    }
  ];

  const crowdMetrics = {
    totalPeople: 2847632,
    peakHours: "6 AM - 9 AM",
    avgDensity: "4.2 people/m²",
    riskZones: 3
  };

  const aiInsights = [
    { metric: "Crowd Flow Optimization", improvement: "+23%", description: "AI routing reduced congestion" },
    { metric: "Medical Response Time", improvement: "-18%", description: "Predictive deployment of resources" },
    { metric: "Lost Person Recovery", improvement: "+45%", description: "Facial recognition accuracy improved" },
    { metric: "Emergency Prevention", improvement: "+67%", description: "Early warning systems effective" }
  ];

  const heatmapData = [
    { zone: "Main Entrance", density: 85, status: "Critical" },
    { zone: "Sacred Ghats", density: 92, status: "Critical" },
    { zone: "Temple Complex", density: 67, status: "High" },
    { zone: "Parking Area A", density: 45, status: "Moderate" },
    { zone: "Food Courts", density: 38, status: "Low" },
    { zone: "Medical Centers", density: 25, status: "Low" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">AI Analytics & Predictions</h1>
          <p className="text-muted-foreground">Machine learning insights for proactive safety management</p>
        </div>

        {/* AI Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatusCard
            title="Prediction Accuracy"
            value="94.3%"
            subtitle="ML model performance"
            icon={Brain}
            variant="success"
          />
          <StatusCard
            title="Risk Zones Detected"
            value={crowdMetrics.riskZones}
            subtitle="Real-time monitoring"
            icon={AlertTriangle}
            variant="warning"
          />
          <StatusCard
            title="Crowd Density Peak"
            value={crowdMetrics.avgDensity}
            subtitle={`Peak: ${crowdMetrics.peakHours}`}
            icon={Users}
            variant="default"
          />
          <StatusCard
            title="Early Warnings"
            value="127"
            subtitle="Prevented incidents today"
            icon={Clock}
            variant="success"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Predictive Risk Alerts */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-primary" />
                <span>AI Predictive Risk Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {predictiveAlerts.map((alert, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    alert.riskLevel === 'High' ? 'border-emergency bg-emergency/5' : 'border-warning bg-warning/5'
                  }`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{alert.zone}</h4>
                        <p className="text-sm text-muted-foreground">{alert.timeframe}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={alert.riskLevel === 'High' ? 'destructive' : 'default'}>
                          {alert.riskLevel} Risk
                        </Badge>
                        <div className="text-right">
                          <div className="text-sm font-medium text-foreground">{alert.confidence}%</div>
                          <div className="text-xs text-muted-foreground">Confidence</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="font-medium text-foreground mb-2">Predicted: {alert.prediction}</h5>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Contributing Factors:</p>
                        <ul className="text-sm text-foreground space-y-1">
                          {alert.factors.map((factor, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{factor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-gradient-emergency text-emergency-foreground hover:opacity-90">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        Deploy Prevention
                      </Button>
                      <Button size="sm" variant="outline">
                        <MapPin className="h-4 w-4 mr-1" />
                        View Zone Details
                      </Button>
                    </div>
                  </div> 
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Performance Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>AI Impact Metrics</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiInsights.map((insight, index) => (
                <div key={index} className="p-3 rounded-lg bg-muted/30 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground text-sm">{insight.metric}</span>
                    <span className={`font-bold text-lg ${
                      insight.improvement.startsWith('+') ? 'text-success' : 'text-primary'
                    }`}>
                      {insight.improvement}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{insight.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Real-time Crowd Heatmap */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>Real-time Crowd Density Heatmap</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {heatmapData.map((zone, index) => (
                <div key={index} className="p-4 rounded-lg border border-border bg-card">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-foreground">{zone.zone}</h4>
                    <Badge variant={
                      zone.status === 'Critical' ? 'destructive' :
                      zone.status === 'High' ? 'default' :
                      zone.status === 'Moderate' ? 'secondary' : 'outline'
                    }>
                      {zone.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Density:</span>
                      <span className="font-medium text-foreground">{zone.density}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${
                          zone.density > 80 ? 'bg-gradient-emergency' :
                          zone.density > 60 ? 'bg-warning' :
                          zone.density > 40 ? 'bg-primary' : 'bg-success'
                        }`}
                        style={{ width: `${zone.density}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ML Model Performance */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-primary" />
              <span>Machine Learning Models Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Crowd Flow Prediction</h4>
                <div className="text-2xl font-bold text-primary mb-1">96.2%</div>
                <p className="text-sm text-muted-foreground">Accuracy Rate</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-success p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Stampede Prevention</h4>
                <div className="text-2xl font-bold text-success mb-1">91.8%</div>
                <p className="text-sm text-muted-foreground">Prediction Accuracy</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Facial Recognition</h4>
                <div className="text-2xl font-bold text-primary mb-1">94.7%</div>
                <p className="text-sm text-muted-foreground">Match Accuracy</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-success p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Health Anomaly Detection</h4>
                <div className="text-2xl font-bold text-success mb-1">98.1%</div>
                <p className="text-sm text-muted-foreground">Detection Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;