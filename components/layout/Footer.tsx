import Link from "next/link";
import Container from "@/components/shared/Container";
import { BookOpen, Facebook, HeartHandshake, Instagram, Mail, Users, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="mb-4 font-BanglaHeading text-xl font-bold tracking-wide text-white">শ্রবণানুশীলন</h3>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              Shrabananushilan is a non-profit spiritual and cultural organization centered on attentive hearing,
              devotional practice, study, and compassionate community service.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" aria-label="Facebook" className="transition-colors hover:text-accent">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-accent">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Youtube" className="transition-colors hover:text-accent">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="mb-4 text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="transition-colors hover:text-accent">About Us</Link></li>
              <li><Link href="/centres" className="transition-colors hover:text-accent">Our Centres</Link></li>
              <li><Link href="/activities" className="transition-colors hover:text-accent">Activities</Link></li>
              <li><Link href="/publication" className="transition-colors hover:text-accent">Publications</Link></li>
              <li><Link href="/gallery" className="transition-colors hover:text-accent">Gallery</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-accent">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="mb-4 text-xl font-bold text-white">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/auth?mode=register" className="transition-colors hover:text-accent">Join Shrabananushilan</Link></li>
              <li><Link href="/auth?mode=login" className="transition-colors hover:text-accent">Member Login</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-accent">Blog</Link></li>
              <li><Link href="/publication" className="transition-colors hover:text-accent">Learning Resources</Link></li>
              <li><Link href="/activities" className="transition-colors hover:text-accent">Volunteer Activities</Link></li>
              <li><Link href="/gallery" className="transition-colors hover:text-accent">Community Gallery</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="mb-4 text-xl font-bold text-white">What We Nurture</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p>Scripture study, devotional listening, and regular satsanga gatherings.</p>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 shrink-0 text-accent" />
                <p>Community programs for learners, families, and volunteers.</p>
              </div>
              <div className="flex items-center gap-3">
                <HeartHandshake className="h-5 w-5 shrink-0 text-accent" />
                <p>Service initiatives rooted in humility, care, and shared practice.</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <Link href="/contact" className="transition-colors hover:text-accent">Reach us through the contact page</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} শ্রবণানুশীলন Shrabananushilan. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
