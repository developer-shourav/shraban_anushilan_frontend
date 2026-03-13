import Hero from "@/components/home/Hero";
import MissionSection from "@/components/home/MissionSection";
import EventsSection from "@/components/home/EventsSection";
import PublicationsSection from "@/components/home/PublicationsSection";
import GalleryPreview from "@/components/home/GalleryPreview";

export default function Home() {
  return (
    <>
     {/*  <Hero /> */}
      <MissionSection />
      <EventsSection />
      <PublicationsSection />
      <GalleryPreview />
    </>
  );
}
