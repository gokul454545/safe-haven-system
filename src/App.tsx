import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import AuthPage from "./pages/AuthPage";
import CommandDashboard from "./pages/CommandDashboard";
import PilgrimSafety from "./pages/PilgrimSafety";
import LostFound from "./pages/LostFound";
import HealthMonitoring from "./pages/HealthMonitoring";
import DroneOperations from "./pages/DroneOperations";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound"; 
 
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<CommandDashboard />} />
          <Route path="/pilgrim-safety" element={<PilgrimSafety />} />
          <Route path="/lost-found" element={<LostFound />} />
          <Route path="/health-monitoring" element={<HealthMonitoring />} />
          <Route path="/drone-ops" element={<DroneOperations />} />
          <Route path="/analytics" element={<Analytics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
