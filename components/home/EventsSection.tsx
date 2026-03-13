import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "150th Birth Anniversary Celebration",
    date: "Feb 20, 2024",
    location: "Kolkata, West Bengal",
    description: "Grand celebration of Srila Bhaktisiddhanta Saraswati Goswami Prabhupada's appearance day.",
  },
  {
    id: 2,
    title: "Annual Gaura Purnima Festival",
    date: "Mar 25, 2024",
    location: "Mayapur, Nadia",
    description: "Devotees from around the world gather to celebrate the appearance of Sri Chaitanya Mahaprabhu.",
  },
  {
    id: 3,
    title: "Ratha Yatra Festival",
    date: "July 07, 2024",
    location: "Puri, Odisha",
    description: "Participate in the glorious chariot festival of Lord Jagannath.",
  },
];

const EventsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading title="Upcoming Events" subtitle="Join us in our spiritual gatherings and festivals." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300 border-primary/10">
              <div className="h-48 bg-accent/10 w-full relative">
                 {/* Image Placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center text-accent/20 font-bold text-4xl opacity-20">
                   Event
                 </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <CardTitle className="line-clamp-2 text-xl">{event.title}</CardTitle>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                   <MapPin className="h-3 w-3" /> {event.location}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">
                  {event.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-accent/10 text-primary hover:bg-accent/20 border border-primary/20">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            View All Events
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default EventsSection;
