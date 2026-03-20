import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Why Listening Matters in Spiritual Practice",
    excerpt: "Reflecting on how attentive hearing shapes remembrance, humility, and steady inner growth.",
    date: "Mar 05, 2024",
    author: "Shrabananushilan Team",
    readTime: "5 min read",
    category: "Spiritual Insights",
  },
  {
    id: 2,
    title: "Building Satsanga for the Next Generation",
    excerpt: "How regular gatherings, mentorship, and participation help a community stay alive and welcoming.",
    date: "Feb 28, 2024",
    author: "Editorial Desk",
    readTime: "8 min read",
    category: "Community",
  },
  {
    id: 3,
    title: "Service as a Daily Discipline",
    excerpt: "A short meditation on small acts of seva and why consistency matters more than spectacle.",
    date: "Feb 15, 2024",
    author: "Volunteer Circle",
    readTime: "12 min read",
    category: "Practice",
  },
];

export const metadata = {
  title: "Blog - Shrabananushilan",
  description: "Read reflections, updates, and community insights from Shrabananushilan.",
};

const BlogPage = () => {
  return (
    <>
      <PageHeader
        title="Blog & Insights"
        subtitle="Reflections, updates, and practical insights from the Shrabananushilan community."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id} className="group flex h-full flex-col border-slate-100 transition-shadow hover:shadow-lg">
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/5 text-5xl font-bold text-primary/10">
                    {post.category[0]}
                  </div>
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-sm backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="font-heading text-2xl leading-tight transition-colors group-hover:text-primary">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 leading-relaxed text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="mt-auto pt-0">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="h-8 w-8 rounded-full bg-slate-200" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <Button variant="ghost" className="gap-2 p-0 font-bold text-primary hover:bg-transparent">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogPage;
