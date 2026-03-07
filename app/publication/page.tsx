import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Download, ExternalLink } from "lucide-react";

const books = [
  { id: 1, title: "Srimad Bhagavatam - Canto 1", price: "₹ 550", color: "bg-red-800" },
  { id: 2, title: "Chaitanya Charitamrita", price: "₹ 800", color: "bg-amber-700" },
  { id: 3, title: "Bhakti Rasamrita Sindhu", price: "₹ 450", color: "bg-emerald-800" },
  { id: 4, title: "Jaiva Dharma", price: "₹ 350", color: "bg-indigo-800" },
];

const magazines = [
  { id: 1, title: "Vaikuntha Varta (Bengali Monthly)", type: "Magazine" },
  { id: 2, title: "Bhaktipatra (Hindi Monthly)", type: "Magazine" },
  { id: 3, title: "Harmonist (English Annual)", type: "Magazine" },
];

export const metadata = {
  title: "Publications - Gaudiya Mission",
  description: "Browse our collection of spiritual books and magazines.",
};

const PublicationPage = () => {
  return (
    <>
      <PageHeader 
        title="Our Publications" 
        subtitle="Spiritual literature designed to enlighten the soul and guide the seeker." 
      />
      
      {/* Books Section */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading title="Spiritual Books" align="left" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book) => (
              <div key={book.id} className="group bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`aspect-[2/3] w-full ${book.color} rounded-lg shadow-inner mb-6 flex items-center justify-center text-white/20 text-5xl font-serif`}>
                  Book
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors font-heading leading-tight">{book.title}</h3>
                <div className="flex items-center justify-between mt-4">
                   <span className="text-lg font-semibold text-slate-800">{book.price}</span>
                   <Button size="sm" variant="outline" className="gap-2">
                      <ShoppingCart className="h-4 w-4" /> Add to Cart
                   </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Magazines Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
           <SectionHeading title="Magazines" subtitle="Periodical insights into the path of Bhakti." align="left" className="mb-12" />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {magazines.map((mag) => (
                 <div key={mag.id} className="bg-white p-6 rounded-xl shadow-sm border border-primary/5 flex flex-col items-center text-center">
                    <div className="h-40 w-full bg-slate-100 rounded-lg mb-6 flex items-center justify-center text-slate-300 font-bold text-2xl">
                       Cover
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-heading">{mag.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{mag.type}</p>
                    <div className="flex gap-4 w-full">
                       <Button variant="outline" className="flex-1 gap-2">
                          <Download className="h-4 w-4" /> PDF
                       </Button>
                       <Button variant="outline" className="flex-1 gap-2">
                          <ExternalLink className="h-4 w-4" /> Read
                       </Button>
                    </div>
                 </div>
              ))}
           </div>
        </Container>
      </section>
    </>
  );
};

export default PublicationPage;
