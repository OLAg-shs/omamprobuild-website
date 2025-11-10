import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const newsItems = [
  {
    image: news1,
    date: "December 15, 2024",
    category: "Expansion",
    title: "OmamProBuild LTD Opens New Regional Office in Dubai",
    excerpt:
      "Strategic expansion into the Middle East market positions us to better serve our international clients with localized expertise and 24/7 support.",
    link: "#",
  },
  {
    image: news2,
    date: "November 28, 2024",
    category: "Partnership",
    title: "New Strategic Alliance with Leading European Distributors",
    excerpt:
      "Partnership enables enhanced supply chain efficiency and opens new trade corridors for our clients across European markets.",
    link: "#",
  },
  {
    image: news3,
    date: "November 10, 2024",
    category: "Achievement",
    title: "Record-Breaking Quarter: $75M in International Trade Volume",
    excerpt:
      "Q3 2024 marks our highest quarterly performance, demonstrating strong market confidence and exceptional client partnerships.",
    link: "#",
  },
];

const News = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Latest <span className="text-accent">News</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Stay updated with our recent developments and industry insights
            </p>
          </div>
          <Button
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground group"
          >
            View All News
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border/50 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 shadow-card hover:shadow-glow overflow-hidden group animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-0">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <button className="text-accent font-semibold text-sm flex items-center gap-2 group/btn hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
