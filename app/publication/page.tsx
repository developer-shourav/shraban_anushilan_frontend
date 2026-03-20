import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, ShoppingCart } from "lucide-react";

const books = [
  { id: 1, title: "Shravan Notes: Foundational Readings", price: "Member Resource", color: "bg-red-800" },
  { id: 2, title: "Satsanga Journal", price: "Digital Edition", color: "bg-amber-700" },
  { id: 3, title: "Festival Companion", price: "Free Download", color: "bg-emerald-800" },
  { id: 4, title: "Community Study Workbook", price: "Study Pack", color: "bg-indigo-800" },
];

const magazines = [
  { id: 1, title: "Shrabananushilan Bulletin", type: "Community Update" },
  { id: 2, title: "Volunteer Digest", type: "Newsletter" },
  { id: 3, title: "Festival Review", type: "Seasonal Publication" },
];

export const metadata = {
  title: "Publications - Shrabananushilan",
  description: "Browse learning resources, journals, and publications from Shrabananushilan.",
};

const PublicationPage = () => {
  return (
    <>
      <PageHeader
        title="Our Publications"
        subtitle="Resources created to support hearing, study, teaching, and community learning."
      />

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading title="Study Resources" align="left" className="mb-12" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {books.map((book) => (
              <div
                key={book.id}
                className="group rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex aspect-[2/3] w-full items-center justify-center rounded-lg ${book.color} text-5xl font-serif text-white/20 shadow-inner`}
                >
                  Book
                </div>
                <h3 className="font-heading text-xl font-bold leading-tight transition-colors group-hover:text-primary">
                  {book.title}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-slate-800">{book.price}</span>
                  <Button size="sm" variant="outline" className="gap-2">
                    <ShoppingCart className="h-4 w-4" /> Access
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <Container>
          <SectionHeading
            title="Bulletins and Journals"
            subtitle="Periodical resources for updates, reflection, and continued learning."
            align="left"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {magazines.map((mag) => (
              <div
                key={mag.id}
                className="flex flex-col items-center rounded-xl border border-primary/5 bg-white p-6 text-center shadow-sm"
              >
                <div className="mb-6 flex h-40 w-full items-center justify-center rounded-lg bg-slate-100 text-2xl font-bold text-slate-300">
                  Cover
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold">{mag.title}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{mag.type}</p>
                <div className="flex w-full gap-4">
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
