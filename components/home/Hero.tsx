"use client";

import * as React from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const slides = [
  {
    id: 1,
    title: "Shrabananushilan",
    subtitle: "A non-profit space for devotional listening, study, and steady spiritual practice.",
    image: "bg-orange-100",
    cta: "About Us",
    href: "/about",
  },
  {
    id: 2,
    title: "Study, Sangha, and Service",
    subtitle: "Gather for scripture reflection, kirtan, mentoring, and compassionate community work.",
    image: "bg-blue-100",
    cta: "Our Activities",
    href: "/activities",
  },
  {
    id: 3,
    title: "Festivals, Publications, and Community Life",
    subtitle: "Stay connected with upcoming events, learning resources, and moments from our shared journey.",
    image: "bg-yellow-100",
    cta: "View Events",
    href: "/centres",
  },
];

const Hero = () => {
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

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
              <div className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden md:h-[80vh]">
                <div className={`absolute inset-0 ${slide.image} animate-pulse bg-cover bg-center`} />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 mx-auto max-w-4xl space-y-6 px-4 text-center text-white">
                  <h1 className="font-heading text-4xl font-bold tracking-tight drop-shadow-md md:text-6xl lg:text-7xl">
                    {slide.title}
                  </h1>
                  <p className="text-lg font-light opacity-90 drop-shadow-sm md:text-2xl">{slide.subtitle}</p>
                  <Button
                    asChild
                    size="lg"
                    className="mt-4 rounded-full border-none bg-orange-600 px-8 py-6 text-lg text-white shadow-lg transition-transform hover:scale-105 hover:bg-orange-700"
                  >
                    <Link href={slide.href}>{slide.cta}</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 hidden border-white/20 bg-transparent text-white hover:bg-white/10 md:flex" />
        <CarouselNext className="right-4 hidden border-white/20 bg-transparent text-white hover:bg-white/10 md:flex" />
      </Carousel>
    </section>
  );
};

export default Hero;
