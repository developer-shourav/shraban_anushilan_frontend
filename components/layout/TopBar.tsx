import Link from "next/link";
import Container from "@/components/shared/Container";
import { Facebook, Instagram, Mail, MapPin, Youtube } from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden bg-primary py-2 text-sm text-primary-foreground md:block">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-semibold">Sri Sri Guru Gauranga Jayatah</span>
          <span className="mx-2 hidden lg:inline-block">|</span>
          <span className="hidden italic lg:inline-block">Sravana, sadhana, seva, and sangha for all.</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <Link href="/contact" className="flex items-center gap-1 transition-colors hover:text-accent-foreground">
              <Mail className="h-4 w-4" />
              <span>Contact our team</span>
            </Link>
            <Link href="/centres" className="flex items-center gap-1 transition-colors hover:text-accent-foreground">
              <MapPin className="h-4 w-4" />
              <span>Find a centre</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="transition-colors hover:text-accent-foreground">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-accent-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Youtube" className="transition-colors hover:text-accent-foreground">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
