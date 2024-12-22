import { Card } from "@/components/ui/card";

export const VideoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Découvrez notre approche de la finance
        </h2>
        <Card className="max-w-4xl mx-auto overflow-hidden shadow-xl">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Xy2o6N1U_OI"
              title="Comprendre la finance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Card>
      </div>
    </section>
  );
};