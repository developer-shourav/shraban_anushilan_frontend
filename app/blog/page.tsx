import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "The Essence of Bhakti Yoga",
    excerpt: "Understanding the path of pure devotion and its relevance in the modern world.",
    date: "Mar 05, 2024",
    author: "Srila Maharaj",
    readTime: "5 min read",
    category: "Spiritual Insights",
  },
  {
    id: 2,
    title: "Celebrating Gaura Purnima",
    excerpt: "The significance of the appearance of Sri Chaitanya Mahaprabhu.",
    date: "Feb 28, 2024",
    author: "Mission Editor",
    readTime: "8 min read",
    category: "Festivals",
  },
  {
    id: 3,
    title: "Heritage of Bagbazar Math",
    excerpt: "Exploring the history and spiritual importance of our headquarters.",
    date: "Feb 15, 2024",
    author: "Archivist",
    readTime: "12 min read",
    category: "History",
  },
];

export const metadata = {
  title: "Blog - Gaudiya Mission",
  description: "Read spiritual articles and insights from Gaudiya Mission.",
};

const BlogPage = () => {
  return (
    <>
      <PageHeader 
        title="Blog & Insights" 
        subtitle="Spiritual wisdom and updates from the heart of the mission." 
      />
      
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow border-slate-100 group">
                <div className="h-52 bg-slate-100 w-full relative overflow-hidden">
                   {/* Placeholder for post image */}
                   <div className="absolute inset-0 bg-primary/5 flex items-center justify-center text-primary/10 font-bold text-5xl">
                      {post.category[0]}
                   </div>
                   <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
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
                   <CardTitle className="font-heading text-2xl group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                   </CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {post.excerpt}
                   </p>
                </CardContent>
                <CardFooter className="mt-auto pt-0">
                   <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2 text-sm">
                         <div className="h-8 w-8 rounded-full bg-slate-200" />
                         <span className="font-medium">{post.author}</span>
                      </div>
                      <Button variant="ghost" className="p-0 hover:bg-transparent text-primary font-bold gap-2">
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
