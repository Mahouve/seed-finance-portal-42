import { useState } from "react";
import { Menu, X, ChevronDown, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm fixed top-8 z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/fb370886-20e3-4f2b-8bc5-5dd8b28ca800.png" 
              alt="Seed Finance Logo" 
              className="h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/markets" className="nav-link">
              Bourses et cotations
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-base font-medium">
                    Nos services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="nav-dropdown w-[400px] md:w-[500px]">
                      <Link 
                        to="/entreprise" 
                        className="nav-dropdown-item"
                      >
                        <Briefcase className="h-5 w-5" />
                        <div>
                          <div className="font-medium">Entreprise</div>
                          <p className="text-sm text-muted-foreground">
                            Services financiers pour les entreprises
                          </p>
                        </div>
                      </Link>
                      <Link 
                        to="/particulier" 
                        className="nav-dropdown-item mt-2"
                      >
                        <Users className="h-5 w-5" />
                        <div>
                          <div className="font-medium">Particulier</div>
                          <p className="text-sm text-muted-foreground">
                            Services financiers pour les particuliers
                          </p>
                        </div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="/about" className="nav-link">
              À propos
            </Link>
            <Link to="/education" className="nav-link">
              Éducation Financière
            </Link>
            <Link to="#" className="nav-link">
              Support Client
            </Link>
            <Link to="/book-dedication">
              <Button 
                variant="default" 
                className="h-11 px-6 text-base font-medium shadow-md hover:shadow-lg transition-all"
              >
                Dédicace du Livre
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/markets" className="nav-link">
                Bourses et cotations
              </Link>
              <div className="flex flex-col space-y-2 px-4">
                <div className="font-medium text-gray-900">Nos Services</div>
                <Link to="/entreprise" className="nav-dropdown-item">
                  <Briefcase className="h-5 w-5" />
                  <span>Entreprise</span>
                </Link>
                <Link to="/particulier" className="nav-dropdown-item">
                  <Users className="h-5 w-5" />
                  <span>Particulier</span>
                </Link>
              </div>
              <Link to="/about" className="nav-link">
                À propos
              </Link>
              <Link to="/education" className="nav-link">
                Éducation Financière
              </Link>
              <Link to="#" className="nav-link">
                Support Client
              </Link>
              <div className="px-4">
                <Link to="/book-dedication">
                  <Button 
                    variant="default" 
                    className="w-full h-11 text-base font-medium shadow-md"
                  >
                    Dédicace du Livre
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};