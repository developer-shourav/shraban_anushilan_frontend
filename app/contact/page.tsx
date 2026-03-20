"use client";

import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
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
        subtitle="Questions, collaboration ideas, or a wish to participate? Send us a message."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-12">
              <div className="space-y-6">
                <SectionHeading title="Get in Touch" align="left" className="mb-8" />
                <p className="text-lg text-muted-foreground">
                  Whether you want to learn more about Shrabananushilan, join a program, volunteer, or explore
                  collaboration, we would be glad to hear from you.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold">Our Address</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Central coordination details can be shared directly through the contact form.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold">Phone Number</h4>
                    <p className="text-sm text-muted-foreground">
                      Available on request for members, volunteers, and partners.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold">Email Address</h4>
                    <p className="text-sm text-muted-foreground">
                      Use the message form for now and we will reply directly.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold">Response Time</h4>
                    <p className="text-sm text-muted-foreground">
                      We review messages regularly and respond as promptly as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-primary/5 bg-white p-8 shadow-xl md:p-12">
              <h3 className="mb-8 font-heading text-2xl font-bold">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input placeholder="Your name" required />
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

      <section className="h-[400px] w-full bg-slate-200">
        <div className="flex h-full w-full items-center justify-center text-center text-2xl font-bold text-slate-400">
          Community location map or meeting information can be added here
        </div>
      </section>
    </>
  );
};

export default ContactPage;
