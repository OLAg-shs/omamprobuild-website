import { Award, Trophy, Star, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import award1 from "@/assets/award-1.jpg";
import award2 from "@/assets/award-2.jpg";

const awards = [
  {
    year: "2023",
    title: "Excellence in International Trade",
    organization: "Global Trade Association",
    description: "Recognized for outstanding performance in facilitating cross-border commerce",
    image: award1,
  },
  {
    year: "2023",
    title: "Best Business Development Firm",
    organization: "International Business Forum",
    description: "Awarded for innovative strategies and exceptional client results",
    image: award2,
  },
  {
    year: "2022",
    title: "Top Export Partner",
    organization: "Chamber of Commerce",
    description: "Honored for contributing $50M+ in export transactions",
    icon: Trophy,
  },
  {
    year: "2022",
    title: "Sustainability Leader",
    organization: "Green Trade Initiative",
    description: "Recognition for eco-friendly supply chain practices",
    icon: Star,
  },
  {
    year: "2021",
    title: "Innovation in Trading",
    organization: "World Trade Council",
    description: "Pioneering digital solutions in international commerce",
    icon: Target,
  },
  {
    year: "2021",
    title: "Client Satisfaction Award",
    organization: "Business Excellence Network",
    description: "Achieving 98% client satisfaction rating",
    icon: Award,
  },
];

const Awards = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Awards & <span className="text-accent">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition of our commitment to excellence and industry leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border/50 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 shadow-card hover:shadow-glow overflow-hidden group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {award.image ? (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {award.year}
                    </div>
                  </div>
                ) : (
                  <div className="h-48 bg-secondary/50 flex items-center justify-center relative">
                    {award.icon && (
                      <award.icon className="w-20 h-20 text-accent/30" />
                    )}
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {award.year}
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-accent text-sm font-semibold mb-3">
                    {award.organization}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
