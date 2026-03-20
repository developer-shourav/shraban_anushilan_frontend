import Link from "next/link";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  "bg-primary/10",
  "bg-secondary/10",
  "bg-accent/10",
  "bg-primary/5",
  "bg-secondary/5",
  "bg-accent/5",
];

const GalleryPreview = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Photo Gallery"
          subtitle="Glimpses of gatherings, celebrations, study circles, and service activities."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {galleryImages.map((color, index) => (
            <div
              key={index}
              className={`group relative aspect-square cursor-pointer overflow-hidden rounded-lg border border-primary/5 ${color} ${index === 0 || index === 1 ? "col-span-2 row-span-2" : ""}`}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-bold text-primary">View</span>
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center font-bold text-primary/30 opacity-30">
                Image {index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild variant="ghost" className="gap-2 text-primary hover:bg-primary/10 hover:text-primary">
            <Link href="/gallery">
              View All Photos <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default GalleryPreview;
