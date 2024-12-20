import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-2xl font-bold text-primary">
            Seed Finance
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link">
              Accueil
            </a>
            <a href="#" className="nav-link">
              Éducation
            </a>
            <a href="#" className="nav-link">
              Particuliers
            </a>
            <a href="#" className="nav-link">
              Entreprises
            </a>
            <Button variant="default">Contactez-nous</Button>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#" className="nav-link">
                Accueil
              </a>
              <a href="#" className="nav-link">
                Éducation
              </a>
              <a href="#" className="nav-link">
                Particuliers
              </a>
              <a href="#" className="nav-link">
                Entreprises
              </a>
              <Button variant="default" className="w-full">
                Contactez-nous
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};