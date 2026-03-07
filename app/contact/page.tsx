"use client";

import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message. We will get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="We are here to help and guide you. Reach out to us through any of our channels." 
      />
      
      <section className="py-16 md:py-24">
        <Container>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-12">
                 <div className="space-y-6">
                    <SectionHeading title="Get in Touch" align="left" className="mb-8" />
                    <p className="text-lg text-muted-foreground">
                       Whether you have a question about our spiritual activities, publications, or want to visit one of our centres, our team is ready to assist you.
                    </p>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                       <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <MapPin className="h-6 w-6 text-primary" />
                       </div>
                       <div>
                          <h4 className="font-bold text-lg mb-1">Our Address</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                             16A, Kaliprasad Chakraborty St,<br />Bagbazar, Kolkata - 700 003
                          </p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Phone className="h-6 w-6 text-primary" />
                       </div>
                       <div>
                          <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                          <p className="text-sm text-muted-foreground">
                             +91 33 2554 4111<br />+91 33 2554 4112
                          </p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Mail className="h-6 w-6 text-primary" />
                       </div>
                       <div>
                          <h4 className="font-bold text-lg mb-1">Email Address</h4>
                          <p className="text-sm text-muted-foreground">
                             info@gaudiyamission.org<br />support@gaudiyamission.org
                          </p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Clock className="h-6 w-6 text-primary" />
                       </div>
                       <div>
                          <h4 className="font-bold text-lg mb-1">Office Hours</h4>
                          <p className="text-sm text-muted-foreground">
                             Mon - Sat: 9:00 AM - 6:00 PM<br />Sun: Closed (Temple Open)
                          </p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-primary/5">
                 <h3 className="text-2xl font-bold mb-8 font-heading">Send us a Message</h3>
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-sm font-medium">Full Name</label>
                          <Input placeholder="Your Name" required />
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-medium">Email Address</label>
                          <Input type="email" placeholder="email@example.com" required />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium">Subject</label>
                       <Input placeholder="How can we help?" required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium">Message</label>
                       <Textarea placeholder="Type your message here..." className="min-h-[150px]" required />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                       Send Message
                    </Button>
                 </form>
              </div>
           </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-slate-200 w-full">
         <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-2xl">
            Google Map Integration (Placeholder)
         </div>
      </section>
    </>
  );
};

export default ContactPage;
