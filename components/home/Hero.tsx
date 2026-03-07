"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "150th Birth Anniversary of Srila Prabhupad",
    subtitle: "Celebrating the life and teachings of the Founder Acharya.",
    image: "bg-orange-100", // Placeholder class
    cta: "Learn More",
  },
  {
    id: 2,
    title: "Gaudiya Mission Museum",
    subtitle: "Explore the rich heritage of Gaudiya Vaishnavism.",
    image: "bg-blue-100", // Placeholder class
    cta: "Visit Museum",
  },
  {
    id: 3,
    title: "Annual Festivals & Events",
    subtitle: "Join us in celebrating the divine pastimes of the Lord.",
    image: "bg-yellow-100", // Placeholder class
    cta: "View Events",
  },
];

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
                 {/* Background Image Placeholder */}
                <div className={`absolute inset-0 ${slide.image} animate-pulse bg-cover bg-center`} />
                 
                 {/* Overlay */}
                 <div className="absolute inset-0 bg-black/40" />

                 {/* Content */}
                 <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-6">
                   <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-md font-heading">
                     {slide.title}
                   </h1>
                   <p className="text-lg md:text-2xl font-light opacity-90 drop-shadow-sm">
                     {slide.subtitle}
                   </p>
                   <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white border-none mt-4 text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
                     {slide.cta}
                   </Button>
                 </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-transparent border-white/20 text-white hover:bg-white/10 hidden md:flex" />
        <CarouselNext className="right-4 bg-transparent border-white/20 text-white hover:bg-white/10 hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default Hero;
