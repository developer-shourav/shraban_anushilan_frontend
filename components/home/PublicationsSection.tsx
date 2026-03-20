import Link from "next/link";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const books = [
  {
    id: 1,
    title: "Shravan Notes",
    author: "Shrabananushilan Editorial Team",
    price: "Member Resource",
    coverColor: "bg-red-900",
  },
  {
    id: 2,
    title: "Satsanga Journal",
    author: "Community Contributors",
    price: "Digital Edition",
    coverColor: "bg-amber-700",
  },
  {
    id: 3,
    title: "Festival Companion",
    author: "Shrabananushilan Volunteers",
    price: "Free Download",
    coverColor: "bg-orange-800",
  },
  {
    id: 4,
    title: "Children's Learning Leaflets",
    author: "Education Wing",
    price: "Community Pack",
    coverColor: "bg-emerald-900",
  },
];

const PublicationsSection = () => {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Publications"
          subtitle="Study materials, journals, and learning resources prepared for our community."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="group relative rounded-xl border border-primary/5 bg-background p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mb-4 flex aspect-[2/3] w-full items-center justify-center rounded-lg ${book.coverColor} text-4xl font-serif text-white/30 shadow-md`}
              >
                Book
              </div>
              <h3 className="mb-1 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                {book.title}
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">{book.author}</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-lg font-semibold text-foreground">{book.price}</span>
                <Button size="icon" variant="ghost" className="rounded-full text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
            <Link href="/publication">Explore Publications</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PublicationsSection;
