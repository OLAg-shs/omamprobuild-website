import { CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const strengths = [
  "15+ Years of Global Trade Experience",
  "Network Spanning 40+ Countries",
  "Expert Team of Industry Professionals",
  "24/7 Customer Support",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="text-accent">Us</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Since 2009, we have been the trusted partner for businesses seeking to expand their global footprint. Our expertise in business development, general trading, and international logistics has helped hundreds of companies navigate complex markets and achieve unprecedented growth.
            </p>
            <div className="space-y-4 mb-8">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium text-lg">
                    {strength}
                  </span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">40+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
            </div>
          </div>
          <div className="animate-slide-in-right">
            <img
              src={aboutImage}
              alt="About Us"
              className="rounded-2xl shadow-elegant w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
