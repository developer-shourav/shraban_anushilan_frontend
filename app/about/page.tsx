import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { CheckCircle2 } from "lucide-react";

const objectives = [
  "To practice and propagate the teachings of Lord Sri Chaitanya Mahaprabhu.",
  "To spread the message of Universal Brotherhood.",
  "To establish and maintain educational institutions.",
  "To provide medical and social relief to the needy.",
  "To publish spiritual literature and magazines.",
  "To organize festivals and spiritual gatherings worldwide.",
];

export const metadata = {
  title: "About Us - Gaudiya Mission",
  description: "Learn about the history, objectives, and heritage of Gaudiya Mission.",
};

const AboutPage = () => {
  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Discover our rich heritage and the mission that drives us since 1918." 
      />
      
      {/* History Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-6xl">
                  History
                </div>
             </div>
             <div className="space-y-6">
                <SectionHeading title="Behind Gaudiya Mission" align="left" className="mb-6" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Gaudiya Mission, a pioneer organization in the field of spiritualism and social service, was established in 1918 by the divine grace of Srila Bhaktisiddhanta Saraswati Goswami Prabhupada. 
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Mission follows the path of pure Bhakti (devotion) as taught by Sri Chaitanya Mahaprabhu. Over the decades, it has grown from a single math in Kolkata to a global network of centres dedicated to spiritual enlightenment and humanitarian aid.
                </p>
             </div>
          </div>
        </Container>
      </section>

      {/* Objectives Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <SectionHeading title="Our Objectives" subtitle="The core values and goals that guide our activities." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((obj, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-primary/5 flex gap-4">
                 <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                 <p className="text-slate-700 leading-snug">{obj}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder Acharya Section */}
      <section className="py-16 md:py-24">
        <Container>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-6 order-2 lg:order-1">
                <SectionHeading title="Founder Acharya" subtitle="Srila Bhaktisiddhanta Saraswati Goswami Prabhupada" align="left" className="mb-6" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                   A visionary spiritual leader, Srila Prabhupada revolutionized the way Bhakti was practiced and preached in the modern era. He established 64 maths (monasteries) across India and laid the foundation for global preaching.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                   "The spiritual world is not a place for the lazy or the insincere. It is for those who are willing to dedicate their lives to the service of the Supreme."
                </p>
             </div>
             <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-slate-100 order-1 lg:order-2">
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-6xl">
                  Founder
                </div>
             </div>
           </div>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
