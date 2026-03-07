import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const categories = ["All", "Deities", "Festivals", "Events", "Museum", "Centres"];

const items = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Gallery Image ${i + 1}`,
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
  color: ["bg-orange-100", "bg-amber-100", "bg-yellow-100", "bg-red-100", "bg-blue-100"][i % 5],
}));

export const metadata = {
  title: "Photo Gallery - Gaudiya Mission",
  description: "View photos of our deities, festivals, and activities.",
};

const GalleryPage = () => {
  return (
    <>
      <PageHeader 
        title="Photo Gallery" 
        subtitle="Visual glimpses of our spiritual heritage and activities." 
      />
      
      <section className="py-16 md:py-24">
        <Container>
           {/* Filters */}
           <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                 <button 
                   key={cat} 
                   className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 border border-primary/20 hover:bg-primary hover:text-white ${cat === 'All' ? 'bg-primary text-white' : 'bg-white text-slate-700'}`}
                 >
                   {cat}
                 </button>
              ))}
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                 <div key={item.id} className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className={`absolute inset-0 ${item.color} group-hover:scale-110 transition-transform duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                       <span className="text-white/80 text-xs mb-1 uppercase tracking-wider">{item.category}</span>
                       <h3 className="text-white font-bold text-lg font-heading">{item.title}</h3>
                    </div>
                    {/* Placeholder content */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-2xl opacity-20 group-hover:opacity-0 transition-opacity">
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
