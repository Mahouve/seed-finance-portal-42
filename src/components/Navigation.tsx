import { useState } from "react";
import { Menu, X, ChevronDown, Briefcase, Users, LineChart } from "lucide-react";
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
    <nav className="w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Nos services <ChevronDown className="ml-1 h-4 w-4" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <div className="grid gap-4">
                        <Link to="/entreprise" className="group grid grid-cols-4 items-center gap-4 p-2 hover:bg-slate-100 rounded-md">
                          <Briefcase className="h-5 w-5" />
                          <div className="col-span-3">
                            <div className="font-medium">Entreprise</div>
                            <p className="text-sm text-muted-foreground">Services financiers pour les entreprises</p>
                          </div>
                        </Link>
                        <Link to="#" className="group grid grid-cols-4 items-center gap-4 p-2 hover:bg-slate-100 rounded-md">
                          <Users className="h-5 w-5" />
                          <div className="col-span-3">
                            <div className="font-medium">Particulier</div>
                            <p className="text-sm text-muted-foreground">Services financiers pour les particuliers</p>
                          </div>
                        </Link>
                        <Link to="#" className="group grid grid-cols-4 items-center gap-4 p-2 hover:bg-slate-100 rounded-md">
                          <LineChart className="h-5 w-5" />
                          <div className="col-span-3">
                            <div className="font-medium">Bourses et cotations</div>
                            <p className="text-sm text-muted-foreground">Suivez les marchés financiers</p>
                          </div>
                        </Link>
                      </div>
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
              <div className="flex flex-col space-y-2 px-4">
                <div className="font-medium">Nos Services</div>
                <Link to="/entreprise" className="text-sm text-muted-foreground pl-4">Entreprise</Link>
                <Link to="#" className="text-sm text-muted-foreground pl-4">Particulier</Link>
                <Link to="#" className="text-sm text-muted-foreground pl-4">Bourses et cotations</Link>
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