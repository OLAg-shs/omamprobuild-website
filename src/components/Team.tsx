import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import founderImg from "@/assets/team-founder.jpg";
import cofounderImg from "@/assets/team-cofounder.jpg";
import financeImg from "@/assets/team-finance.jpg";
import analystImg from "@/assets/team-analyst.jpg";

const teamMembers = [
  {
    name: "Sina Adisa Maccarthy",
    role: "Founder & CEO",
    image: founderImg,
    bio: "Visionary leader with 20+ years in international trade and business development. Built GlobalTradePro from the ground up.",
    email: "kwame@globaltradepro.com",
    linkedin: "#",
  },
  {
    name: "Price Maccarthy",
    role: "Co-Founder & COO",
    image: cofounderImg,
    bio: "Strategic operations expert driving operational excellence and global expansion initiatives across 40+ countries.",
    email: "davidabiomaccarthy@gmail.com",
    linkedin: "#",
  },
  {
    name: "David Maccarthy",
    role: "Finance Director",
    image: financeImg,
    bio: "Financial strategist overseeing $500M+ in annual trade transactions with expertise in international finance.",
    email: "davidabiomaccarthy@gmail.com",
    linkedin: "#",
  },
  {
    name: "Ama Amoah",
    role: "Senior Business Analyst",
    image: analystImg,
    bio: "Data-driven analyst providing market intelligence and strategic insights for optimal business decisions.",
    email: "ama@globaltradepro.com",
    linkedin: "#",
  },
];

const Team = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet The <span className="text-accent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The talented people behind our global success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border/50 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 shadow-card hover:shadow-glow overflow-hidden group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent opacity-90"></div>
                  
                  {/* Social icons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-accent/90 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <Mail className="w-5 h-5 text-accent-foreground" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent/90 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-accent-foreground" />
                    </a>
                  </div>

                  {/* Info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
