import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import About from "./pages/About";
import Problem from "./pages/Problem";
import AiSupport from "./pages/AiSupport";
import Kiosk from "./pages/Kiosk";
import Privacy from "./pages/Privacy";
import Safeguarding from "./pages/Safeguarding";
import WellnessRecovery from "./pages/WellnessRecovery";
import HowItWorks from "./pages/HowItWorks";
import Impact from "./pages/Impact";
import Roadmap from "./pages/Roadmap";
import Team from "./pages/Team";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Report from "./pages/Report";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/ai" element={<AiSupport />} />
          <Route path="/kiosk" element={<Kiosk />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/safeguarding" element={<Safeguarding />} />
          <Route path="/ccprb" element={<Navigate to="/safeguarding" replace />} />
          <Route path="/wellness" element={<WellnessRecovery />} />
          <Route path="/recovery" element={<Navigate to="/wellness" replace />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/technology" element={<Navigate to="/how-it-works" replace />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Functional Portals */}
          <Route path="/report" element={<Report />} />
          <Route path="/admin" element={<Admin />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
