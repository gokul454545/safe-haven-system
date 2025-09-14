import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Activity } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    //  Simulate authentication
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome to Simhastha Command Center",
      });
      navigate("/command-dashboard");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <Card className="w-full max-w-md bg-card/95 backdrop-blur-sm border-primary/20">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
            <Shield className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-foreground">Simhastha Command Center</CardTitle>
            <p className="text-muted-foreground mt-2">Authorized Personnel Only</p>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Input
                  placeholder="Username"
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                  className="h-12"
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  className="h-12"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-primary text-primary-foreground hover:opacity-90"
              disabled={isLoading}
            >
              {isLoading ? "Authenticating..." : "Access Command Center"}
            </Button>
          </form>

          {/* Live Stats Preview */}
          <div className="mt-8 p-4 rounded-lg bg-muted/30 border border-border">
            <h4 className="font-semibold text-foreground mb-3">Live System Status</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <Users className="h-6 w-6 mx-auto text-primary mb-1" />
                <div className="text-sm font-medium text-foreground">2.8M</div>
                <div className="text-xs text-muted-foreground">Active</div>
              </div>
              <div>
                <Activity className="h-6 w-6 mx-auto text-success mb-1" />
                <div className="text-sm font-medium text-foreground">98.7%</div>
                <div className="text-xs text-muted-foreground">Uptime</div>
              </div>
              <div>
                <Shield className="h-6 w-6 mx-auto text-warning mb-1" />
                <div className="text-sm font-medium text-foreground">23</div>
                <div className="text-xs text-muted-foreground">Alerts</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;