import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, TrendingUp, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="OmamProBuild LTD"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-semibold">Trusted Global Partner Since 2009</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transform Your
              <span className="text-accent block mt-2">Global Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              We connect businesses worldwide through expert business development, seamless trading operations, and comprehensive import/export solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg shadow-glow group"
              >
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                variant="outline"
                className="border-2 border-border hover:bg-secondary font-bold text-lg"
              >
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-accent mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-accent mb-1">40+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-accent mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
            </div>
          </div>

          {/* Right side features */}
          <div className="hidden lg:block animate-slide-in-right">
            <div className="space-y-6">
              <div className="bg-gradient-card p-6 rounded-2xl border border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                <Globe2 className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Global Network</h3>
                <p className="text-muted-foreground">Extensive partnerships across 40+ countries for seamless international operations.</p>
              </div>
              <div className="bg-gradient-card p-6 rounded-2xl border border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                <TrendingUp className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Proven Results</h3>
                <p className="text-muted-foreground">Track record of $500M+ in facilitated trade and 98% client satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
