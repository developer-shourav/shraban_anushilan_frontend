import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Heart, BookOpen, Utensils, Stethoscope, GraduationCap, Users } from "lucide-react";

const socialActivities = [
  {
    title: "Education",
    icon: GraduationCap,
    description: "Running schools and Sanskrit research institutes like Para-Vidyapeeth.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Healthcare",
    icon: Stethoscope,
    description: "Medical relief vans and charitable dispensaries for the underprivileged.",
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Food Distribution",
    icon: Utensils,
    description: "Free prasadam distribution to thousands during festivals and relief work.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Social Welfare",
    icon: Heart,
    description: "Providing aid during natural calamities and support for the elderly.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    title: "Cultural Heritage",
    icon: BookOpen,
    description: "Maintaining museums and preserving ancient Vedic scriptures and art.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Community Outreach",
    icon: Users,
    description: "Workshops and seminars on spiritual values and moral character building.",
    color: "bg-amber-50 text-amber-600",
  },
];

export const metadata = {
  title: "Activities - Gaudiya Mission",
  description: "Explore the social and spiritual activities of Gaudiya Mission.",
};

const ActivitiesPage = () => {
  return (
    <>
      <PageHeader 
        title="Our Activities" 
        subtitle="A unique blend of spiritual pursuit and selfless service to humanity." 
      />
      
      {/* Spiritual Activities */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-6">
                <SectionHeading title="Spiritual Activities" align="left" className="mb-6" />
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                   <p>
                      The primary activity of the Gaudiya Mission is to cultivate and propagate the congregational chanting of the Holy Name of Lord Krishna (Harinam Sankirtan).
                   </p>
                   <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Daily Temple Worship and Arati</li>
                      <li>Vedic Discourses and Seminars</li>
                      <li>Celebration of Spiritual Festivals</li>
                      <li>Pilgrimages (Parikramas) to Holy Places</li>
                      <li>Spiritual Initiation (Diksha)</li>
                   </ul>
                </div>
             </div>
             <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-4xl">
                   Kirtan Photo
                </div>
             </div>
          </div>
        </Container>
      </section>

      {/* Social Welfare Activities */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <SectionHeading title="Social Welfare" subtitle="Service to man is service to God." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialActivities.map((activity, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                 <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${activity.color}`}>
                    <activity.icon className="h-7 w-7" />
                 </div>
                 <h3 className="text-xl font-bold mb-3 font-heading">{activity.title}</h3>
                 <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ActivitiesPage;
