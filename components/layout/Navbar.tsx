"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
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
      <div className="py-4">
        <p className="text-center text-sm lg:text-[16px] text-[#E16C00] font-bold mb-0 lg:mb-5">
          শ্রী শ্রী গুরু গৌরাঙ্গৌ জয়তঃ
        </p>
        <div className="relative">
          {/* Logo Image */}
          <Image
            src={ShrabananushilanLogo}
            alt="Logo"
            className="absolute left-9 bottom-0 h-16 lg:left-50 xl:left-60 lg:bottom-1 lg:h-24 w-auto"
          />
          <h1 className=" text-[#B35900] text-[40px] md:text-[60px]  lg:text-[70px] xl:text-[80px] font-bold tracking-wide font-BanglaHeading text-center">
            শ্রবণানুশীলন
          </h1>
        </div>
      </div>

      {/* Flute Navigation Bar */}
      <div className="relative w-full  pb-6">
        <nav
          className="relative h-10 lg:h-8 flex items-center justify-center shadow-lg "
          style={{
            // Bamboo/Flute Gradient
            background:
              "linear-gradient(to bottom, #cc6600 0%, #ff9900 25%, #ffcc00 50%, #ff9900 75%, #994c00 100%)",
          }}
        >
          {/* Left Red Border Group */}
          <div className="absolute left-[9.5%] lg:left-[8%] z-20 flex gap-1 h-full mix-blend-multiply">
            <div className="w-2 lg:w-2.5 xl:w-3.5 h-full bg-[#b30000]/80" />
            <div className="w-2 lg:w-2.5 xl:w-3.5 h-full bg-[#b30000]/80" />
          </div>

          {/* Right Red Border Group */}
          <div className="absolute right-[12%] lg:right-[8%] z-20 hidden lg:flex gap-1 h-full mix-blend-multiply">
            <div className="w-2 lg:w-2.5 xl:w-3.5 h-full bg-[#b30000]/80" />
            <div className="w-2 lg:w-2.5 xl:w-3.5 h-full bg-[#b30000]/80" />
          </div>
          {/* Left End Cap Image */}
          <Image
            src={navStaringDesign}
            className="w-14.5 h-7 lg:w-30 lg:h-8 xl:w-37.5 xl:h-11  absolute left-0  -top-6.5 lg:-top-7.5 xl:-top-10.5 z-10"
            alt=""
          />

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item, index) => (
              <div key={item.href} className="flex items-center">
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 xl:px-4 text-xs xl:text-sm font-bold transition-all hover:text-white uppercase",
                    pathname === item.href ? "text-white" : "text-[#5C2E00]",
                  )}
                >
                  {item.label}
                </Link>
                {/* Vertical Divider (The flute "holes" or segments) */}
                {index !== NAV_ITEMS.length - 1 && (
                  <div className="h-8 w-0.5 bg-linear-to-b from-[#804000] via-[#ffcc00] to-[#804000] opacity-50" />
                )}
              </div>
            ))}
          </div>

          {/* Right End Cap Image */}
          <Image
            src={navEndDesign}
            className="w-14.5 h-7 lg:w-30 lg:h-8 xl:w-37.5 xl:h-11 absolute right-0 -top-6.5 lg:-top-7.5 xl:-top-10.5 z-10"
            alt=""
          />

          {/* Mobile Toggle */}
          <div className="lg:hidden absolute right-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <MenuIcon className="h-7 w-7 text-[#5C2E00] hover:text-white" />
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
        <div className="absolute right-8 bottom-16 lg:right-36 lg:bottom-14 pointer-events-none z-0">
          <Image src={featherDesign} alt="" className=" w-24 lg:w-34" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
