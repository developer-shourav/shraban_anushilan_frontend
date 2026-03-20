"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import navStaringDesign from "@/assets/images/header-starting.png";
import navEndDesign from "@/assets/images/header-ending.png";
import featherDesign from "@/assets/images/feather.png";
import ShrabananushilanLogo from "@/assets/logos/shrabananushilan.png";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "CENTRES", href: "/centres" },
  { label: "ACTIVITIES", href: "/activities" },
  { label: "PUBLICATION", href: "/publication" },
  { label: "GALLERY", href: "/gallery" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-background">
      <div className="py-4">
        <p className="mb-0 text-center text-[10px] font-bold text-primary xs:text-sm lg:mb-5 lg:text-[16px]">
          শ্রী শ্রী গুরু গৌরাঙ্গৌ জয়তঃ
        </p>
        <div className="relative">
          <Image
            src={ShrabananushilanLogo}
            alt="Shrabananushilan logo"
            className="absolute bottom-1 left-7 h-11 w-auto xs:bottom-0 xs:left-9 xs:h-15 md:h-18 lg:bottom-1 lg:left-50 lg:h-24 xl:left-60"
          />
          <h1 className="text-center font-BanglaHeading text-[33px] font-bold tracking-wide text-secondary xs:text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px]">
            শ্রবণানুশীলন
          </h1>
        </div>
      </div>

      <div className="relative w-full pb-6">
        <nav
          className="relative flex h-10 items-center justify-center shadow-lg lg:h-8"
          style={{
            background:
              "linear-gradient(to bottom, #cc6600 0%, #ff9900 25%, #ffcc00 50%, #ff9900 75%, #994c00 100%)",
          }}
        >
          <div className="absolute left-[9.5%] z-20 flex h-full gap-1 mix-blend-multiply lg:left-[8%]">
            <div className="h-full w-2 bg-destructive/80 lg:w-2.5 xl:w-3.5" />
            <div className="h-full w-2 bg-destructive/80 lg:w-2.5 xl:w-3.5" />
          </div>

          <div className="absolute right-[12%] z-20 hidden h-full gap-1 mix-blend-multiply md:flex lg:right-[8%]">
            <div className="h-full w-2 bg-destructive/80 lg:w-2.5 xl:w-3.5" />
            <div className="h-full w-2 bg-destructive/80 lg:w-2.5 xl:w-3.5" />
          </div>

          <Image
            src={navStaringDesign}
            className="absolute left-0 -top-6.5 z-10 h-7 w-14.5 lg:-top-7.5 lg:h-8 lg:w-30 xl:-top-10.5 xl:h-11 xl:w-37.5"
            alt=""
          />

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item, index) => (
              <div key={item.href} className="flex items-center">
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 text-xs font-bold uppercase transition-all hover:text-white xl:px-4 xl:text-sm",
                    pathname === item.href ? "text-white" : "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
                {index !== NAV_ITEMS.length - 1 && (
                  <div className="h-8 w-0.5 bg-linear-to-b from-[#804000] via-accent to-[#804000] opacity-50" />
                )}
              </div>
            ))}
          </div>

          <div className="absolute right-16 z-30 hidden items-center gap-2 lg:flex xl:right-24">
            <Link
              href="/auth?mode=login"
              className="rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs font-bold text-foreground transition hover:bg-white/20"
            >
              LOGIN
            </Link>
            <Link
              href="/auth?mode=register"
              className="rounded-full bg-destructive/85 px-3 py-1 text-xs font-bold text-white transition hover:bg-destructive"
            >
              REGISTER
            </Link>
          </div>

          <Image
            src={navEndDesign}
            className="absolute right-0 -top-6.5 z-10 h-7 w-14.5 lg:-top-7.5 lg:h-8 lg:w-30 xl:-top-10.5 xl:h-11 xl:w-37.5"
            alt=""
          />

          <div className="absolute right-4 z-30 flex h-full items-center lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="rounded-md p-1 transition-colors hover:bg-white/10" aria-label="Open navigation menu">
                  <MenuIcon className="h-6 w-6 text-foreground hover:text-white xs:h-7 xs:w-7" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-50 border-l-0 bg-background p-0 xs:w-70">
                <div className="flex h-full flex-col">
                  <div className="border-b border-primary/10 p-5">
                    <SheetTitle asChild>
                      <div className="flex items-center gap-3">
                        <Image src={ShrabananushilanLogo} alt="Shrabananushilan logo" className="h-10 w-auto xs:h-12" />
                        <h2 className="font-BanglaHeading text-xl font-bold text-secondary xs:text-2xl">শ্রবণানুশীলন</h2>
                      </div>
                    </SheetTitle>
                  </div>

                  <div className="flex flex-col overflow-y-auto py-2">
                    {NAV_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "border-l-4 px-3 py-2.5 text-xs font-bold transition-all xs:text-sm",
                          pathname === item.href
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-transparent text-foreground hover:bg-primary/5"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="grid grid-cols-2 gap-3 px-3 pt-4">
                      <Link
                        href="/auth?mode=login"
                        onClick={() => setIsOpen(false)}
                        className="rounded-full border border-primary/20 px-4 py-2 text-center text-sm font-bold text-primary transition hover:bg-primary/5"
                      >
                        Login
                      </Link>
                      <Link
                        href="/auth?mode=register"
                        onClick={() => setIsOpen(false)}
                        className="rounded-full bg-primary px-4 py-2 text-center text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>

        <div className="pointer-events-none absolute bottom-16 right-8 z-0 lg:bottom-14 lg:right-36">
          <Image src={featherDesign} alt="" className="w-18 xs:w-22 md:w-28 lg:w-34" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
