import { GraduationCap, BookOpen, Pen } from "lucide-react";

export const EducationHero = () => {
  return (
    <div className="relative bg-[#0FA0CE] min-h-[600px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="bg-[#D3E4FD] p-8 rounded-lg shadow-lg animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-wide mb-6">
              Éducation Financière
            </h1>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light">
              L'éducation financière est essentielle pour aider les Africains à mieux comprendre et gérer leurs finances, en tenant compte des réalités économiques et sociales locales.
            </p>
            <div className="w-32 h-1 bg-primary/20 rounded mt-6" />
          </div>

          {/* Right side - Professional items arrangement */}
          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="relative bg-white/95 p-8 rounded-lg shadow-xl">
              {/* Decorative notebook */}
              <div className="absolute top-4 right-4 w-48 h-64 bg-[#1A1F2C] rounded-sm transform rotate-6 shadow-lg" />
              
              {/* White paper */}
              <div className="absolute top-8 right-12 w-40 h-56 bg-white rounded-sm transform -rotate-3 shadow-md" />
              
              {/* Professional items */}
              <div className="relative z-10 flex justify-end space-x-6 items-start mt-12">
                <div className="flex flex-col items-center space-y-4">
                  <BookOpen className="w-12 h-12 text-[#1A1F2C]" />
                  <Pen className="w-8 h-8 text-[#1A1F2C]" />
                </div>
                {/* Glasses */}
                <div className="w-16 h-4 border-t-2 border-gray-400 rounded-t-full mt-4">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full -mt-2" />
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full -mt-4 ml-12" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="mt-8 flex justify-between items-center">
                <div className="w-32 h-1 bg-primary/20 rounded" />
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};