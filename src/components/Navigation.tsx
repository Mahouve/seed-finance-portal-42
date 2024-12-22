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
    <nav className="w-full bg-white/90 backdrop-blur-sm z-50 fixed top-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/fb370886-20e3-4f2b-8bc5-5dd8b28ca800.png" 
              alt="Seed Finance Logo" 
              className="h-12"
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
                  <NavigationMenuTrigger>
                    Nos services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px] md:w-[500px]">
                      <Link 
                        to="/entreprise" 
                        className="group grid grid-cols-4 items-center gap-4 p-3 hover:bg-slate-100 rounded-md"
                      >
                        <Briefcase className="h-5 w-5" />
                        <div className="col-span-3">
                          <div className="font-medium">Entreprise</div>
                          <p className="text-sm text-muted-foreground">
                            Services financiers pour les entreprises
                          </p>
                        </div>
                      </Link>
                      <Link 
                        to="/particulier" 
                        className="group grid grid-cols-4 items-center gap-4 p-3 hover:bg-slate-100 rounded-md"
                      >
                        <Users className="h-5 w-5" />
                        <div className="col-span-3">
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
            <Link to="#" className="nav-link">
              À propos
            </Link>
            <Link to="/education" className="nav-link">
              Éducation Financière
            </Link>
            <Link to="#" className="nav-link">
              Support Client
            </Link>
            <Button variant="default">Dédicace du Livre</Button>
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
              <Link to="/markets" className="nav-link">
                Bourses et cotations
              </Link>
              <div className="flex flex-col space-y-2 px-4">
                <div className="font-medium">Nos Services</div>
                <Link to="/entreprise" className="text-sm text-muted-foreground pl-4">
                  Entreprise
                </Link>
                <Link to="/particulier" className="text-sm text-muted-foreground pl-4">
                  Particulier
                </Link>
              </div>
              <Link to="#" className="nav-link">
                À propos
              </Link>
              <Link to="/education" className="nav-link">
                Éducation Financière
              </Link>
              <Link to="#" className="nav-link">
                Support Client
              </Link>
              <Button variant="default" className="w-full">
                Dédicace du Livre
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};