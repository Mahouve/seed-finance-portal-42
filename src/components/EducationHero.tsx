import { GraduationCap, BookOpen, Pen } from "lucide-react";

export const EducationHero = () => {
  return (
    <div className="relative bg-[#1EAEDB] min-h-[600px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="bg-[#D3E4FD] p-10 rounded-2xl shadow-2xl animate-fade-in backdrop-blur-sm bg-opacity-95">
            <h1 className="text-4xl md:text-5xl font-bold text-[#221F26] uppercase tracking-tight mb-8 leading-tight">
              Éducation Financière
            </h1>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light">
              L'éducation financière est essentielle pour aider les Africains à mieux comprendre et gérer leurs finances, en tenant compte des réalités économiques et sociales locales.
            </p>
            <div className="w-32 h-1 bg-[#1EAEDB] rounded-full mt-8" />
          </div>

          {/* Right side - Professional items arrangement */}
          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="relative bg-white/95 p-10 rounded-2xl shadow-2xl backdrop-blur-sm">
              {/* Decorative notebook */}
              <div className="absolute top-4 right-4 w-48 h-64 bg-[#221F26] rounded-lg transform rotate-6 shadow-xl transition-transform hover:rotate-8 duration-300" />
              
              {/* White paper */}
              <div className="absolute top-8 right-12 w-40 h-56 bg-white rounded-lg transform -rotate-3 shadow-lg transition-transform hover:-rotate-5 duration-300" />
              
              {/* Professional items */}
              <div className="relative z-10 flex justify-end space-x-8 items-start mt-12">
                <div className="flex flex-col items-center space-y-6">
                  <BookOpen className="w-14 h-14 text-[#1EAEDB] transition-transform hover:scale-110 duration-300" />
                  <Pen className="w-10 h-10 text-[#1EAEDB] transition-transform hover:scale-110 duration-300" />
                </div>
                {/* Glasses */}
                <div className="w-20 h-4 border-t-2 border-[#1EAEDB] rounded-t-full mt-4 transition-transform hover:scale-105 duration-300">
                  <div className="w-5 h-5 border-2 border-[#1EAEDB] rounded-full -mt-2" />
                  <div className="w-5 h-5 border-2 border-[#1EAEDB] rounded-full -mt-5 ml-14" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="mt-12 flex justify-between items-center">
                <div className="w-32 h-1 bg-[#1EAEDB] rounded-full" />
                <div className="w-10 h-10 rounded-full bg-[#1EAEDB]/10 flex items-center justify-center transition-transform hover:scale-110 duration-300">
                  <GraduationCap className="w-6 h-6 text-[#1EAEDB]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};