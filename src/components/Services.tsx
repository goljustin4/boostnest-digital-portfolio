import { useEffect, useRef, useState } from "react";
import { Facebook, Search, Globe, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Facebook,
    title: "Facebook Ads",
    description: "Drive targeted traffic and conversions with precisely crafted Facebook advertising campaigns that reach your ideal customers.",
    features: ["Audience Targeting", "Creative Design", "A/B Testing", "Performance Tracking"]
  },
  {
    icon: Search,
    title: "Google Ads",
    description: "Dominate search results with strategic Google Ads campaigns that capture high-intent customers at the moment they're searching.",
    features: ["Keyword Research", "Ad Copy Optimization", "Bid Management", "Conversion Tracking"]
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description: "Boost your organic visibility and climb search rankings with comprehensive SEO strategies that drive long-term growth.",
    features: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"]
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Create stunning, responsive websites that convert visitors into customers with modern design and seamless user experience.",
    features: ["Responsive Design", "Speed Optimization", "CMS Integration", "E-commerce Solutions"]
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Build and engage your community across all social platforms with strategic content and community management.",
    features: ["Content Creation", "Community Management", "Social Strategy", "Analytics & Reporting"]
  }
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(services.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to elevate your brand 
            and drive meaningful business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`service-card ${
                  visibleCards[index] ? "fade-in visible" : "fade-in"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    onClick={scrollToContact}
                    variant="outline" 
                    className="w-full mt-6 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-card border border-border rounded-3xl p-12 shadow-[var(--shadow-medium)]">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Ready to Boost Your Digital Presence?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help your business grow. 
              Get a free consultation and strategy session.
            </p>
            <Button onClick={scrollToContact} className="btn-hero">
              Get Your Free Strategy Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;