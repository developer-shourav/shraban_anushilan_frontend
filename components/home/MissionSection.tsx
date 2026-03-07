import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeading 
              title="Our Mission" 
              subtitle="Spreading the message of universal brotherhood." 
              align="left"
              className="mb-6"
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established in 1918, Gaudiya Mission is a spiritual and philanthropic organization dedicated to propagating the teachings of Sri Chaitanya Mahaprabhu. Our core philosophy revolves around the practice of Bhakti Yoga and the service of humanity irrespective of caste, creed, or religion.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We aim to revive the ancient Vedic culture and instill spiritual values in modern society through our various centres, educational institutes, and charitable activities.
            </p>
            <Button variant="outline" className="mt-4 gap-2 border-orange-200 text-orange-700 hover:bg-orange-50 hover:text-orange-800">
              Read More <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-500 font-medium">
               Mission Image / Temple Photo
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MissionSection;
