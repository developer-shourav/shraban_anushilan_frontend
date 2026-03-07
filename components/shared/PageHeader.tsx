import Container from "@/components/shared/Container";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}

const PageHeader = ({ title, subtitle, breadcrumb }: PageHeaderProps) => {
  return (
    <div className="relative py-12 md:py-20 bg-primary/5 overflow-hidden border-b border-primary/10">
       {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      
      <Container className="relative z-10">
        <div className="flex flex-col gap-4">
           {/* Breadcrumbs */}
           <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
             <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
               <Home className="h-4 w-4" /> Home
             </Link>
             {breadcrumb?.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                   <ChevronRight className="h-3 w-3" />
                   {item.href ? (
                      <Link href={item.href} className="hover:text-primary transition-colors">
                        {item.label}
                      </Link>
                   ) : (
                      <span className="text-foreground font-medium">{item.label}</span>
                   )}
                </div>
             ))}
             {!breadcrumb && (
                <div className="flex items-center gap-2">
                   <ChevronRight className="h-3 w-3" />
                   <span className="text-foreground font-medium">{title}</span>
                </div>
             )}
           </nav>
           
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-900 tracking-tight">
             {title}
           </h1>
           {subtitle && (
             <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
               {subtitle}
             </p>
           )}
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;
