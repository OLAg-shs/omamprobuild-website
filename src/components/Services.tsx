import { TrendingUp, Package, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: TrendingUp,
    title: "Business Development",
    description:
      "Strategic planning and execution to expand your market reach, identify new opportunities, and accelerate growth in competitive markets.",
    features: ["Market Analysis", "Partnership Development", "Growth Strategies"],
  },
  {
    icon: Package,
    title: "General Trading",
    description:
      "Comprehensive trading solutions connecting buyers and sellers worldwide with efficient supply chain management and quality assurance.",
    features: ["Commodity Trading", "Supply Chain", "Quality Control"],
  },
  {
    icon: Globe,
    title: "Import & Export",
    description:
      "Seamless international trade operations with expertise in customs, logistics, and regulatory compliance across global markets.",
    features: ["Customs Clearance", "Documentation", "Global Logistics"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end solutions designed for global business success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

