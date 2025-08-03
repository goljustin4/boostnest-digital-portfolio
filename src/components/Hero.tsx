import { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? "fade-in visible" : "fade-in"}`}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                <span className="block">BoostNest</span>
                <span className="block text-accent">Digital</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                We build digital bridges between brands and customers.
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Transform your business with our comprehensive digital marketing solutions. 
              From Facebook Ads to SEO, we help brands connect with their target audience 
              and drive meaningful growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="btn-hero group"
              >
                Get a Free Strategy Session
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                className="btn-secondary group"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="mr-2 h-5 w-5" />
                View Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500%</div>
                <div className="text-sm text-muted-foreground">Avg ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Graphics */}
          <div className={`relative ${isVisible ? "slide-in-right visible" : "slide-in-right"} delay-300`}>
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full animate-pulse delay-1000"></div>
              
              {/* Main Hero Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[var(--shadow-large)] border border-white/50">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Digital Growth</h3>
                      <p className="text-sm text-muted-foreground">Results-Driven Marketing</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Campaign Performance</span>
                      <span className="text-sm font-semibold text-accent">+245%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-4/5 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-accent/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-accent">150K+</div>
                      <div className="text-xs text-muted-foreground">Reach</div>
                    </div>
                    <div className="bg-primary/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary">2.5x</div>
                      <div className="text-xs text-muted-foreground">Conversion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;