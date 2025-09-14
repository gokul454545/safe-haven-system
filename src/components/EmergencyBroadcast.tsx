import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Megaphone, Send, Users, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EmergencyBroadcastProps {
  isOpen: boolean;
  onClose: () => void;
} 

const EmergencyBroadcast = ({ isOpen, onClose }: EmergencyBroadcastProps) => {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleBroadcast = () => {
    setIsSending(true);
    
    setTimeout(() => {
      setIsSending(false);
      setSent(true);
      toast({
        title: "Emergency Broadcast Sent",
        description: "Message delivered to all 2.8M pilgrims",
        variant: "default",
      });
      
      setTimeout(() => {
        setSent(false);
        setMessage("");
        onClose();
      }, 3000);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-lg bg-card border-emergency">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-emergency">
            <Megaphone className="h-5 w-5" />
            <span>Emergency Broadcast System</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {!sent ? (
            <>
              <div className="bg-emergency/10 p-3 rounded-lg border border-emergency/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">Target Audience</span>
                  <Badge variant="outline" className="border-emergency text-emergency">
                    <Users className="h-3 w-3 mr-1" />
                    2.8M Pilgrims
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  This message will be sent to all active pilgrim devices instantly
                </p>
              </div>

              <Textarea
                placeholder="Enter emergency message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-24"
              />

              <div className="flex space-x-2">
                <Button
                  onClick={handleBroadcast}
                  disabled={!message.trim() || isSending}
                  className="bg-gradient-emergency text-emergency-foreground hover:opacity-90 flex-1"
                >
                  {isSending ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                      Broadcasting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Emergency Alert
                    </>
                  )}
                </Button>
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 mx-auto text-success mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Broadcast Successful</h3>
              <p className="text-muted-foreground mb-4">
                Emergency alert delivered to all 2.8 million pilgrims
              </p>
              <div className="bg-success/10 p-3 rounded-lg border border-success/20">
                <div className="text-sm font-medium text-success">
                  ✓ 2,847,329 devices reached
                </div>
                <div className="text-sm font-medium text-success">
                  ✓ Average delivery time: 1.2 seconds
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EmergencyBroadcast;