import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const books = [
  {
    id: 1,
    title: "Srimad Bhagavatam - Canto 1",
    author: "Srila Bhaktisiddhanta Saraswati",
    price: "₹ 550",
    coverColor: "bg-red-900",
  },
  {
    id: 2,
    title: "Chaitanya Charitamrita",
    author: "Krishnadasa Kaviraja Goswami",
    price: "₹ 800",
    coverColor: "bg-amber-700",
  },
  {
    id: 3,
    title: "Teachings of Lord Chaitanya",
    author: "A.C. Bhaktivedanta Swami",
    price: "₹ 350",
    coverColor: "bg-orange-800",
  },
  {
    id: 4,
    title: "Bhakti Rasamrita Sindhu",
    author: "Rupa Goswami",
    price: "₹ 450",
    coverColor: "bg-emerald-900",
  },
];

const PublicationsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-100">
      <Container>
        <SectionHeading title="Publications" subtitle="Explore our collection of spiritual literature." />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div key={book.id} className="group relative bg-white p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className={`aspect-[2/3] w-full ${book.coverColor} rounded-lg shadow-md mb-4 flex items-center justify-center text-white/30 text-4xl font-serif`}>
                Book
              </div>
              <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
                {book.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{book.author}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-semibold text-lg text-slate-800">{book.price}</span>
                <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-white transition-colors rounded-full">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-stone-400 text-stone-700 hover:bg-stone-200">
            Visit Bookstore
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PublicationsSection;
