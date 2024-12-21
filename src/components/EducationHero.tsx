import { GraduationCap, BookOpen, Pen } from "lucide-react";

export const EducationHero = () => {
  return (
    <div className="relative bg-[#1EAEDB] min-h-[800px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="bg-[#D3E4FD] p-12 rounded-2xl shadow-2xl animate-fade-in backdrop-blur-sm bg-opacity-95">
            <h1 className="text-5xl md:text-6xl font-bold text-[#221F26] uppercase tracking-tight mb-10 leading-tight">
              Éducation Financière
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
              L'éducation financière est essentielle pour aider les Africains à mieux comprendre et gérer leurs finances, en tenant compte des réalités économiques et sociales locales.
            </p>
            <div className="w-40 h-1.5 bg-[#1EAEDB] rounded-full mt-10" />
          </div>

          {/* Right side - Professional items arrangement */}
          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="relative bg-white/95 p-16 rounded-2xl shadow-2xl backdrop-blur-sm">
              {/* Decorative notebook */}
              <div className="absolute top-6 right-6 w-72 h-96 bg-[#221F26] rounded-lg transform rotate-6 shadow-xl transition-transform hover:rotate-8 duration-300" />
              
              {/* White paper */}
              <div className="absolute top-12 right-16 w-64 h-80 bg-white rounded-lg transform -rotate-3 shadow-lg transition-transform hover:-rotate-5 duration-300" />
              
              {/* Professional items */}
              <div className="relative z-10 flex justify-end space-x-12 items-start mt-16">
                <div className="flex flex-col items-center space-y-8">
                  <BookOpen className="w-20 h-20 text-[#1EAEDB] transition-transform hover:scale-110 duration-300" />
                  <Pen className="w-16 h-16 text-[#1EAEDB] transition-transform hover:scale-110 duration-300" />
                </div>
                {/* Glasses */}
                <div className="w-28 h-6 border-t-3 border-[#1EAEDB] rounded-t-full mt-6 transition-transform hover:scale-105 duration-300">
                  <div className="w-8 h-8 border-3 border-[#1EAEDB] rounded-full -mt-3" />
                  <div className="w-8 h-8 border-3 border-[#1EAEDB] rounded-full -mt-8 ml-20" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="mt-16 flex justify-between items-center">
                <div className="w-40 h-1.5 bg-[#1EAEDB] rounded-full" />
                <div className="w-16 h-16 rounded-full bg-[#1EAEDB]/10 flex items-center justify-center transition-transform hover:scale-110 duration-300">
                  <GraduationCap className="w-10 h-10 text-[#1EAEDB]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};