import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AIAssistantDrawer } from "@/components/AIAssistantDrawer";
import { SplashScreen } from "@/components/SplashScreen";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Education from "./pages/Education";
import Entreprise from "./pages/Entreprise";
import Particulier from "./pages/Particulier";
import Markets from "./pages/Markets";
import About from "./pages/About";
import Events from "./pages/Events";
import BookDedication from "./pages/BookDedication";
import Support from "./pages/Support";
import FAQ from "./pages/support/FAQ";
import TechnicalSupport from "./pages/support/TechnicalSupport";
import Guides from "./pages/support/Guides";
import Account from "./pages/support/Account";
import CreditSimulator from "./pages/CreditSimulator";
import CoursFormations from "./pages/education/CoursFormations";
import Webinaires from "./pages/education/Webinaires";
import BlogsArticles from "./pages/education/BlogsArticles";
import JeuxSimulateurs from "./pages/education/JeuxSimulateurs";

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
          <Route path="/education/cours-formations" element={<CoursFormations />} />
          <Route path="/education/webinaires" element={<Webinaires />} />
          <Route path="/education/blogs-articles" element={<BlogsArticles />} />
          <Route path="/education/jeux-simulateurs" element={<JeuxSimulateurs />} />
          <Route path="/entreprise" element={<Entreprise />} />
          <Route path="/particulier" element={<Particulier />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/book-dedication" element={<BookDedication />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/faq" element={<FAQ />} />
          <Route path="/support/technical-support" element={<TechnicalSupport />} />
          <Route path="/support/guides" element={<Guides />} />
          <Route path="/support/account" element={<Account />} />
          <Route path="/credit-simulator" element={<CreditSimulator />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="seed-finance-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/">
          <SplashScreen />
          <AnimatedRoutes />
          <AIAssistantDrawer />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;