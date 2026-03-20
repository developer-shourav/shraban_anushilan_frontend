import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { CheckCircle2 } from "lucide-react";

const objectives = [
  "To cultivate devotional hearing, reflection, and regular spiritual practice.",
  "To build a compassionate community rooted in humility and service.",
  "To support learning through classes, reading circles, and mentoring.",
  "To preserve and share devotional culture through events and creative programs.",
  "To publish accessible resources for seekers, students, and families.",
  "To encourage collaborative service initiatives for the wider community.",
];

export const metadata = {
  title: "About Us - Shrabananushilan",
  description: "Learn about the mission, values, and community vision of Shrabananushilan.",
};

const AboutPage = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Learn what guides Shrabananushilan and the kind of community we are building together."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100 shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-slate-300">
                History
              </div>
            </div>
            <div className="space-y-6">
              <SectionHeading title="The Heart of Shrabananushilan" align="left" className="mb-6" />
              <p className="text-lg leading-relaxed text-muted-foreground">
                Shrabananushilan is a non-profit spiritual and cultural initiative that brings people together through
                hearing, study, devotional practice, and service. The organization is designed to support both
                newcomers and committed participants in a life of meaningful inner growth.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We focus on creating spaces where sincere listening, thoughtful discussion, and community
                responsibility can deepen spiritual culture in everyday life. Our goal is to make devotional learning
                approachable, consistent, and collective.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <Container>
          <SectionHeading title="Our Objectives" subtitle="The core values and goals that guide our activities." />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((obj, index) => (
              <div key={index} className="flex gap-4 rounded-xl border border-primary/5 bg-white p-6 shadow-sm">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <p className="leading-snug text-slate-700">{obj}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="order-2 space-y-6 lg:order-1">
              <SectionHeading
                title="Our Practice"
                subtitle="Hearing, reflection, disciplined practice, and service."
                align="left"
                className="mb-6"
              />
              <p className="text-lg leading-relaxed text-muted-foreground">
                Shrabananushilan is committed to carrying devotional wisdom forward through disciplined hearing,
                sincere practice, and practical service. The emphasis is not on prestige, but on steady
                transformation through shared spiritual habits.
              </p>
              <p className="text-lg italic leading-relaxed text-muted-foreground">
                &ldquo;We grow when hearing becomes practice, and practice becomes service.&rdquo;
              </p>
            </div>
            <div className="order-1 relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 shadow-xl lg:order-2">
              <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-slate-300">
                Practice
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
