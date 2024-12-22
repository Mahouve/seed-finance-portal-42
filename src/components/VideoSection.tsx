import { Card } from "@/components/ui/card";

export const VideoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-fluid px-0">
        <h2 className="text-3xl font-bold text-center mb-12">
          Découvrez notre approche de la finance
        </h2>
        <Card className="w-full overflow-hidden shadow-xl border-0 rounded-none">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Xy2o6N1U_OI?controls=0"
              title="Comprendre la finance"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={false}
            ></iframe>
          </div>
        </Card>
      </div>
    </section>
  );
};