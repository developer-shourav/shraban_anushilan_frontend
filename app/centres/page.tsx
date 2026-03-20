import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const centres = [
  {
    id: 1,
    name: "Central Community Hub",
    address: "Primary coordination point for major Shrabananushilan programs and gatherings.",
    phone: "Shared on request",
    email: "Connect through the contact page",
  },
  {
    id: 2,
    name: "City Study Circle",
    address: "Local reading sessions, discussion groups, and devotional meetups for urban members.",
    phone: "Coordinated locally",
    email: "Available after registration",
  },
  {
    id: 3,
    name: "Youth & Student Chapter",
    address: "Programs designed for younger participants, study support, and volunteer engagement.",
    phone: "Coordinated locally",
    email: "Available after registration",
  },
  {
    id: 4,
    name: "Festival Support Team",
    address: "Seasonal coordination for major events, hospitality, and community seva activities.",
    phone: "Shared during event cycles",
    email: "Available after registration",
  },
  {
    id: 5,
    name: "Family Satsanga Network",
    address: "Neighborhood-based gatherings for families, children, and shared devotional routines.",
    phone: "Coordinated locally",
    email: "Available after registration",
  },
  {
    id: 6,
    name: "Digital Community Chapter",
    address: "Online classes, reading circles, and remote participation for distributed members.",
    phone: "Online only",
    email: "Available after registration",
  },
];

export const metadata = {
  title: "Centres - Shrabananushilan",
  description: "Explore Shrabananushilan chapters, circles, and participation hubs.",
};

const CentresPage = () => {
  return (
    <>
      <PageHeader
        title="Our Centres"
        subtitle="A growing network of circles, chapters, and gathering spaces for study, devotion, and service."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {centres.map((centre) => (
              <Card key={centre.id} className="border-primary/10 transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-primary">{centre.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                    <p>{centre.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-orange-600" />
                    <span>{centre.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-orange-600" />
                    <span>{centre.email}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default CentresPage;
