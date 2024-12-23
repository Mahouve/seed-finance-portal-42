import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AIAssistantDrawer } from "@/components/AIAssistantDrawer";
import { SplashScreen } from "@/components/SplashScreen";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import Education from "./pages/Education";
import Entreprise from "./pages/Entreprise";
import Particulier from "./pages/Particulier";
import Markets from "./pages/Markets";
import About from "./pages/About";
import BookDedication from "./pages/BookDedication";
import Support from "./pages/Support";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.5 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/education" element={<Education />} />
          <Route path="/entreprise" element={<Entreprise />} />
          <Route path="/particulier" element={<Particulier />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-dedication" element={<BookDedication />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <SplashScreen />
        <AnimatedRoutes />
        <AIAssistantDrawer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;