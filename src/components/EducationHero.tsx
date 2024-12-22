import { GraduationCap } from "lucide-react";

export const EducationHero = () => {
  return (
    <div className="relative pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary animate-float">
              Éducation Financière
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed hover:scale-95 transition-transform duration-300">
              L'éducation financière est essentielle pour aider les Africains à mieux comprendre et gérer leurs finances, en tenant compte des réalités économiques et sociales locales.
            </p>
          </div>
          <div className="flex-1 animate-fade-in [animation-delay:200ms]">
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
              alt="Education financière"
              className="rounded-lg shadow-xl w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};