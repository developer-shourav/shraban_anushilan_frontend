import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { BookOpen, GraduationCap, Heart, Stethoscope, Users, Utensils } from "lucide-react";

const socialActivities = [
  {
    title: "Study Circles",
    icon: GraduationCap,
    description: "Small-group reading and discussion sessions centered on devotional texts and lived practice.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Well-Being Support",
    icon: Stethoscope,
    description: "Pastoral care, mentoring, and community support structures that help people stay connected.",
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Prasada and Hospitality",
    icon: Utensils,
    description: "Shared meals and festival hospitality that make spiritual gatherings welcoming and inclusive.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Seva Outreach",
    icon: Heart,
    description: "Volunteer efforts shaped by empathy, practical care, and responsibility toward the broader community.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    title: "Cultural Programs",
    icon: BookOpen,
    description: "Festivals, recitations, performances, and creative offerings that preserve devotional culture.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Volunteer Development",
    icon: Users,
    description: "Training spaces where members grow in teamwork, leadership, and service-minded discipline.",
    color: "bg-amber-50 text-amber-600",
  },
];

export const metadata = {
  title: "Activities - Shrabananushilan",
  description: "Explore the spiritual, educational, and service activities of Shrabananushilan.",
};

const ActivitiesPage = () => {
  return (
    <>
      <PageHeader
        title="Our Activities"
        subtitle="Programs that connect hearing, practice, culture, and service in everyday community life."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <SectionHeading title="Spiritual Activities" align="left" className="mb-6" />
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Shrabananushilan encourages a devotional life shaped by attentive hearing, satsanga, chanting,
                  study, and shared responsibility. Our activities are designed to be regular, approachable, and
                  transformative over time.
                </p>
                <ul className="ml-4 list-inside list-disc space-y-2">
                  <li>Weekly listening and discussion circles</li>
                  <li>Kirtan, remembrance, and guided reflection</li>
                  <li>Festivals and community gatherings</li>
                  <li>Volunteer service and outreach efforts</li>
                  <li>Publication and educational resource development</li>
                </ul>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-100 shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-slate-300">
                Community Activity Photo
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <Container>
          <SectionHeading title="Community Service" subtitle="Compassion becomes real when it is practiced together." />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {socialActivities.map((activity, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${activity.color}`}
                >
                  <activity.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold">{activity.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{activity.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ActivitiesPage;
