import Container from "@/components/shared/Container";
import { Mail, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
      <Container className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-semibold">All Glory to Sri Sri Guru & Gauranga</span>
          <span className="hidden lg:inline-block mx-2">|</span>
          <span className="italic hidden lg:inline-block">Kirtaniya Sada Hari</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a href="mailto:info@gaudiyamission.org" className="flex items-center gap-1 hover:text-accent-foreground transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@gaudiyamission.org</span>
            </a>
            <a href="tel:+913325544111" className="flex items-center gap-1 hover:text-accent-foreground transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 33 2554 4111</span>
            </a>
          </div>
          
          <div className="flex items-center gap-3">
             <a href="#" className="hover:text-accent-foreground transition-colors"><Facebook className="h-4 w-4" /></a>
             <a href="#" className="hover:text-accent-foreground transition-colors"><Twitter className="h-4 w-4" /></a>
             <a href="#" className="hover:text-accent-foreground transition-colors"><Instagram className="h-4 w-4" /></a>
             <a href="#" className="hover:text-accent-foreground transition-colors"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
