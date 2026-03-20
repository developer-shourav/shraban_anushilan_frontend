import Link from "next/link";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              title="Our Mission"
              subtitle="Nurturing attentive hearing, devotional culture, and service-minded community life."
              align="left"
              className="mb-6"
            />
            <p className="text-lg leading-relaxed text-foreground/80">
              Shrabananushilan is a non-profit initiative dedicated to creating a welcoming space for spiritual
              learning, reflection, and shared practice. Through hearing, discussion, and remembrance, we encourage a
              life shaped by humility, compassion, and devotion.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              Our work brings people together through satsanga, educational programs, publications, cultural
              activities, and service efforts that support both inner growth and collective well-being.
            </p>
            <Button asChild variant="outline" className="mt-4 gap-2 border-primary/50 text-primary hover:bg-primary/10">
              <Link href="/about">
                Read More <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted/50 shadow-2xl md:aspect-square">
            <div className="absolute inset-0 flex items-center justify-center bg-muted/80 text-center font-medium text-muted-foreground">
              Mission image or community photo
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MissionSection;
