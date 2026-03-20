import Link from "next/link";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Weekly Shravan Circle",
    date: "Every Friday",
    location: "Community Hall",
    description: "A guided evening of scripture reading, reflective listening, and group discussion.",
  },
  {
    id: 2,
    title: "Monthly Kirtan and Satsanga",
    date: "First Sunday of each month",
    location: "Shrabananushilan Centre",
    description: "Community kirtan, devotional talks, and prasada in a warm and welcoming environment.",
  },
  {
    id: 3,
    title: "Youth Seva Workshop",
    date: "Quarterly",
    location: "Regional Chapters",
    description: "Hands-on sessions that connect spiritual values with service, leadership, and teamwork.",
  },
];

const EventsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Community Events"
          subtitle="Join us for gatherings centered on hearing, devotion, and shared service."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id} className="border-primary/10 transition-shadow duration-300 hover:shadow-lg">
              <div className="relative h-48 w-full bg-accent/10">
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-accent/20 opacity-20">
                  Event
                </div>
              </div>
              <CardHeader>
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-primary">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <CardTitle className="line-clamp-2 text-xl">{event.title}</CardTitle>
                <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {event.location}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">{event.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full border border-primary/20 bg-accent/10 text-primary hover:bg-accent/20">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/centres">View All Events</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default EventsSection;
