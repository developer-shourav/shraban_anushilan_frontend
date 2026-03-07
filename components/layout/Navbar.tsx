"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Centres", href: "/centres" },
  { label: "Activities", href: "/activities" },
  { label: "Publication", href: "/publication" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        isScrolled ? "shadow-md py-2" : "py-4"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="bg-primary text-primary-foreground p-1 rounded-md">
             {/* Placeholder for Logo */}
             <div className="h-8 w-8 flex items-center justify-center font-bold text-xl">GM</div>
          </div>
          <span className="hidden sm:inline-block text-xl font-bold tracking-tight">
            Gaudiya Mission
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative group py-2",
                pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100",
                pathname === item.href && "scale-x-100"
              )}/>
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Button 
            variant="default" 
            size="sm" 
            className="hidden sm:flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-sm"
          >
            <Heart className="h-4 w-4 fill-current" />
            Donate
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
               <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Mobile Menu Logo */}
                <div className="p-6 border-b">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                    <div className="bg-primary text-primary-foreground p-1.5 rounded-lg shadow-sm">
                      <div className="h-7 w-7 flex items-center justify-center font-bold text-lg">GM</div>
                    </div>
                    <span className="text-xl font-bold font-heading">Gaudiya Mission</span>
                  </Link>
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex-1 overflow-y-auto py-6 px-4">
                  <div className="flex flex-col gap-1">
                    {NAV_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200",
                          pathname === item.href
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t bg-muted/20">
                  <Button className="w-full gap-2 bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20 py-6 rounded-xl text-lg" size="lg">
                    <Heart className="h-5 w-5 fill-current" />
                    Donate Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
