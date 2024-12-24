import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const images = [
  {
    url: "https://novacap.ca/wp-content/uploads/2023/01/bursary_1089998798.jpg",
    alt: "Bourse d'études"
  },
  {
    url: "https://cms.weka.ch/fileadmin/_processed_/0/1/csm_Conseils_en_strategie_d_entreprise_en_temps_de_crise__c8fc2cdac3.jpg",
    alt: "Conseil en stratégie"
  },
  {
    url: "https://www.ipacbachelorfactory.com/sites/default/files/2023-12/gestion%20finance%20formation%20angers.jpg",
    alt: "Formation en gestion"
  },
  {
    url: "https://img.freepik.com/photos-gratuite/campagne-femme-tenant-feuilles-plantes_23-2148761766.jpg",
    alt: "Femme entrepreneur"
  },
  {
    url: "https://monusco.unmissions.org/sites/default/files/styles/full_width_image/public/field/image/gomafemmecommercefrontalier-20180507.jpg",
    alt: "Commerce frontalier"
  }
];

export const VideoSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Découvrez notre approche de la finance
        </h2>
        <Card className="w-full overflow-hidden shadow-xl border-0 rounded-xl">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute z-10 inset-0 flex items-center justify-between p-4">
              <CarouselPrevious className="relative left-0" />
              <CarouselNext className="relative right-0" />
            </div>
          </Carousel>
        </Card>
      </div>
    </section>
  );
};