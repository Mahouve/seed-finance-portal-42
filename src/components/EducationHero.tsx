import { GraduationCap } from "lucide-react";

export const EducationHero = () => {
  return (
    <div className="relative bg-[#BBE1FA] min-h-[600px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Éducation Financière
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
              L'éducation financière est essentielle pour aider les Africains à mieux comprendre et gérer leurs finances, en tenant compte des réalités économiques et sociales locales.
            </p>
          </div>
          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="relative">
              <div className="absolute top-4 right-4 w-72 h-96 bg-primary/20 rounded-lg transform rotate-6"></div>
              <div className="absolute top-8 right-8 w-72 h-96 bg-white/90 rounded-lg transform -rotate-3"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <img
                  src="/public/lovable-uploads/86e16980-316a-4690-95fd-96e4090f25af.png"
                  alt="Education financière"
                  className="w-full h-auto rounded-lg object-cover"
                />
                <div className="mt-4 flex justify-between items-center">
                  <div className="w-32 h-1 bg-primary/20 rounded"></div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};