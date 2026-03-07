import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const centres = [
  {
    id: 1,
    name: "Bagbazar Gaudiya Math (H.Q.)",
    address: "16A, Kaliprasad Chakraborty Street, Bagbazar, Kolkata - 700 003, West Bengal",
    phone: "+91 33 2554 4111",
    email: "info@gaudiyamission.org",
  },
  {
    id: 2,
    name: "Sri Sri Chaitanya Gaudiya Math",
    address: "35, Satish Mukherjee Road, Kolkata - 700 026, West Bengal",
    phone: "+91 33 2464 1234",
    email: "kalighat@gaudiyamission.org",
  },
  {
    id: 3,
    name: "Sri Caitanya Math",
    address: "Sridham Mayapur, Nadia - 741 313, West Bengal",
    phone: "+91 3472 245224",
    email: "mayapur@gaudiyamission.org",
  },
  {
    id: 4,
    name: "Puri Sri Purusottama Math",
    address: "Markandeswar Sahi, Puri - 752 001, Odisha",
    phone: "+91 6752 222123",
    email: "puri@gaudiyamission.org",
  },
  {
    id: 5,
    name: "Vrindavan Sri Caitanya Math",
    address: "Gopinath Bazar, Vrindavan, Mathura - 281 121, Uttar Pradesh",
    phone: "+91 565 2442424",
    email: "vrindavan@gaudiyamission.org",
  },
  {
    id: 6,
    name: "Gaudiya Mission London Centre",
    address: "1-5 Santley St, Brixton, London SW4 7QE, United Kingdom",
    phone: "+44 20 7737 1234",
    email: "london@gaudiyamission.org",
  },
];

export const metadata = {
  title: "Centres - Gaudiya Mission",
  description: "Find a Gaudiya Mission centre near you.",
};

const CentresPage = () => {
  return (
    <>
      <PageHeader 
        title="Our Centres" 
        subtitle="Spanning across the globe, our centres are hubs of spiritual practice and social welfare." 
      />
      
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {centres.map((centre) => (
                <Card key={centre.id} className="hover:shadow-md transition-shadow border-primary/10">
                  <CardHeader>
                     <CardTitle className="text-xl text-primary font-heading">{centre.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                     <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                        <p>{centre.address}</p>
                     </div>
                     <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-orange-600 shrink-0" />
                        <span>{centre.phone}</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-orange-600 shrink-0" />
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
