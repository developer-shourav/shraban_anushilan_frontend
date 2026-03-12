"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import navStaringDesign from "@/assets/images/header-starting.png";
import navEndDesign from "@/assets/images/header-ending.png";
import featherDesign from "@/assets/images/feather.png";
import ShrabananushilanLogo from "@/assets/logos/shrabananushilan.png";
import ISKCON_Logo from "@/assets/logos/ISKCON-Logo.png";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "CENTRES", href: "/centres" },
  { label: "ACTIVITIES", href: "/activities" },
  { label: "PUBLICATION", href: "/publication" },
  { label: "GALLERY", href: "/gallery" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
  { label: "DONATION", href: "/donation" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#FFFBE6]">
      {/* Top Logo Section (White Area) */}
      <div className="py-4 flex flex-col items-center justify-center text-center">
        <div className="mb-2">
          {/* Replace with your actual Logo Image */}
          <Image src={ShrabananushilanLogo} alt="Logo" className="h-20 w-auto" />
   
        </div>
        <h1 className="text-[#B35900] text-4xl md:text-6xl font-serif font-bold tracking-wide uppercase">
          Shrabananushilan
        </h1>
        <p className="text-[#7A3E00] text-lg md:text-2xl font-medium mt-1">
          Kirtaniya Sada Hari
        </p>
      </div>

      {/* Flute Navigation Bar */}
      <div className="relative w-full px-4 md:px-10 pb-6">
        <nav
          className="relative h-12 md:h-14 flex items-center justify-center shadow-lg"
          style={{
            // Bamboo/Flute Gradient
            background:
              "linear-gradient(to bottom, #cc6600 0%, #ff9900 25%, #ffcc00 50%, #ff9900 75%, #994c00 100%)",
          }}
        >
          {/* Left End Cap Image */}
          <Image
            src={navStaringDesign}
            className="absolute left-[-15px] md:left-[-30px] h-full z-10"
            alt=""
          />

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item, index) => (
              <div key={item.href} className="flex items-center">
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 text-xs md:text-sm font-bold transition-all hover:text-white uppercase",
                    pathname === item.href ? "text-white" : "text-[#5C2E00]",
                  )}
                >
                  {item.label}
                </Link>
                {/* Vertical Divider (The flute "holes" or segments) */}
                {index !== NAV_ITEMS.length - 1 && (
                  <div className="h-14 w-[2px] bg-gradient-to-b from-[#804000] via-[#ffcc00] to-[#804000] opacity-50" />
                )}
              </div>
            ))}
          </div>

          {/* Right End Cap Image */}
          <Image
            src={navEndDesign}
            className="absolute right-[-15px] md:right-[-30px] h-full z-10"
            alt=""
          />

          {/* Mobile Toggle */}
          <div className="lg:hidden absolute right-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle>Navigation</SheetTitle>
                <div className="flex flex-col gap-4 mt-8">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-bold"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>

        {/* Peacock Feather Decoration */}
        <div className="absolute right-2 -bottom-2.5 pointer-events-none">
          <Image
            src={featherDesign}
            alt=""
            className="h-24 md:h-32 opacity-90"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
