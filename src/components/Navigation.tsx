import { useState } from "react";
import { Menu, X, ChevronDown, LineChart, FileText, PiggyBank, Package, BookOpen, Users, TrendingUp, Briefcase } from "lucide-react";
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
          <Link to="/" className="text-2xl font-bold text-primary">
            Seed Finance
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Bourse & Cotations <ChevronDown className="ml-1 h-4 w-4" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <div className="grid gap-4">
                        <Link to="#" className="group grid grid-cols-4 items-center gap-4 p-2 hover:bg-slate-100 rounded-md">
                          <LineChart className="h-5 w-5" />
                          <div className="col-span-3">
                            <div className="font-medium">Actions</div>
                            <p className="text-sm text-muted-foreground">Actions des entreprises cotées</p>
                          </div>
                        </Link>
                        <Link to="#" className="group grid grid-cols-4 items-center gap-4 p-2 hover:bg-slate-100 rounded-md">
                          <FileText className="h-5 w-5" />
                          <div className="col-span-3">
                            <div className="font-medium">Obligations</div>
                            <p className="text-sm text-muted-foreground">Titres de créance</p>
                          </div>
                        </Link>
                        <Link to="#" className="group grid grid-cols-4 items-center gap-4 p-2 hover:bg-slate-100 rounded-md">
                          <LineChart className="h-5 w-5" />
                          <div className="col-span-3">
                            <div className="font-medium">Devises et Indices boursiers</div>
                            <p className="text-sm text-muted-foreground">Taux de change et indices</p>
                          </div>
                        </Link>
                        <Link to="#" className="group grid grid-cols-4 items-center gap-4 p-2 hover:bg-slate-100 rounded-md">
                          <PiggyBank className="h-5 w-5" />
                          <div className="col-span-3">
                            <div className="font-medium">Fonds d'investissement</div>
                            <p className="text-sm text-muted-foreground">Fonds communs de placement</p>
                          </div>
                        </Link>
                        <Link to="#" className="group grid grid-cols-4 items-center gap-4 p-2 hover:bg-slate-100 rounded-md">
                          <Package className="h-5 w-5" />
                          <div className="col-span-3">
                            <div className="font-medium">Matières premières</div>
                            <p className="text-sm text-muted-foreground">Commodités et ressources naturelles</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Nos services <ChevronDown className="ml-1 h-4 w-4" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <div className="grid gap-4">
                        <Link to="#" className="group grid grid-cols-4 items-center gap-4 p-2 hover:bg-slate-100 rounded-md">
                          <TrendingUp className="h-5 w-5" />
                          <div className="col-span-3">
                            <div className="font-medium">Analyse Financière</div>
                            <p className="text-sm text-muted-foreground">Services d'analyse approfondie des marchés financiers et des opportunités</p>
                          </div>
                        </Link>
                        <Link to="#" className="group grid grid-cols-4 items-center gap-4 p-2 hover:bg-slate-100 rounded-md">
                          <Briefcase className="h-5 w-5" />
                          <div className="col-span-3">
                            <div className="font-medium">Conseil en Investissement</div>
                            <p className="text-sm text-muted-foreground">Conseils personnalisés pour optimiser votre portefeuille d'investissement</p>
                          </div>
                        </Link>
                        <Link to="#" className="group grid grid-cols-4 items-center gap-4 p-2 hover:bg-slate-100 rounded-md">
                          <BookOpen className="h-5 w-5" />
                          <div className="col-span-3">
                            <div className="font-medium">Formation</div>
                            <p className="text-sm text-muted-foreground">Programmes de formation pour développer vos compétences en finance</p>
                          </div>
                        </Link>
                        <Link to="#" className="group grid grid-cols-4 items-center gap-4 p-2 hover:bg-slate-100 rounded-md">
                          <Users className="h-5 w-5" />
                          <div className="col-span-3">
                            <div className="font-medium">Accompagnement</div>
                            <p className="text-sm text-muted-foreground">Suivi personnalisé de vos projets d'investissement</p>
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
                <div className="font-medium">Bourse & Cotations</div>
                <Link to="#" className="text-sm text-muted-foreground pl-4">Actions</Link>
                <Link to="#" className="text-sm text-muted-foreground pl-4">Obligations</Link>
                <Link to="#" className="text-sm text-muted-foreground pl-4">Devises et Indices boursiers</Link>
                <Link to="#" className="text-sm text-muted-foreground pl-4">Fonds d'investissement</Link>
                <Link to="#" className="text-sm text-muted-foreground pl-4">Matières premières</Link>
              </div>
              <div className="flex flex-col space-y-2 px-4">
                <div className="font-medium">Nos Services</div>
                <Link to="#" className="text-sm text-muted-foreground pl-4">Analyse Financière</Link>
                <Link to="#" className="text-sm text-muted-foreground pl-4">Conseil en Investissement</Link>
                <Link to="#" className="text-sm text-muted-foreground pl-4">Formation</Link>
                <Link to="#" className="text-sm text-muted-foreground pl-4">Accompagnement</Link>
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