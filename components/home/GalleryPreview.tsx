import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  "bg-red-100",
  "bg-orange-100",
  "bg-amber-100",
  "bg-yellow-100",
  "bg-lime-100",
  "bg-green-100",
];

const GalleryPreview = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading title="Photo Gallery" subtitle="Glimpses of our spiritual activities and events." />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((color, index) => (
            <div 
              key={index} 
              className={`aspect-square rounded-lg overflow-hidden relative group cursor-pointer ${color} ${index === 0 || index === 1 ? 'col-span-2 row-span-2' : ''}`}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <span className="text-white font-medium">View</span>
              </div>
              {/* Placeholder text */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold opacity-30 pointer-events-none">
                Image {index + 1}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80">
            View All Photos <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default GalleryPreview;
