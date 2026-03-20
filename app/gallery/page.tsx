import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";

const categories = ["All", "Study Circles", "Festivals", "Service", "Youth", "Community"];

const items = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Shrabananushilan Moment ${i + 1}`,
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
  color: ["bg-orange-100", "bg-amber-100", "bg-yellow-100", "bg-red-100", "bg-blue-100"][i % 5],
}));

export const metadata = {
  title: "Photo Gallery - Shrabananushilan",
  description: "View photos from Shrabananushilan gatherings, festivals, and activities.",
};

const GalleryPage = () => {
  return (
    <>
      <PageHeader
        title="Photo Gallery"
        subtitle="Visual glimpses of community gatherings, celebrations, and shared service."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`rounded-full border border-primary/20 px-6 py-2 text-sm font-medium transition-all duration-200 hover:bg-primary hover:text-white ${cat === "All" ? "bg-primary text-white" : "bg-white text-slate-700"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className={`absolute inset-0 ${item.color} transition-transform duration-500 group-hover:scale-110`} />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="mb-1 text-xs uppercase tracking-wider text-white/80">{item.category}</span>
                  <h3 className="font-heading text-lg font-bold text-white">{item.title}</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-slate-300 opacity-20 transition-opacity group-hover:opacity-0">
                  PHOTO
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default GalleryPage;
