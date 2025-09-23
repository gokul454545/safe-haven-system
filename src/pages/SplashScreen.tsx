import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeafLogo from "@/components/ui/leaflogo";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth");
    }, 9500);

    return () => clearTimeout(timer);
  }, [navigate]); 

  return ( 
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <div className="animate-float mb-8">
          <LeafLogo className="w-24 h-24 mx-auto text-primary-foreground drop-shadow-lg" />
        </div>
        <h1 className="text-4xl font-bold text-primary-foreground mb-2">
          Safe Simhastha
        </h1>
        <p className="text-primary-foreground/80 text-lg">
          Safer India begins with smarter actions
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;