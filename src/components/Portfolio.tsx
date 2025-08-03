import { useEffect, useState } from "react";
import { ExternalLink, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "E-commerce Fashion Brand",
    category: "Facebook Ads & Instagram Marketing",
    description: "Increased online sales by 350% through targeted social media campaigns and influencer partnerships.",
    metrics: [
      { label: "Sales Increase", value: "350%" },
      { label: "ROAS", value: "4.2x" },
      { label: "Reach", value: "2.5M+" }
    ],
    tags: ["Facebook Ads", "Instagram", "E-commerce"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&auto=format"
  },
  {
    title: "Local Restaurant Chain",
    category: "Google Ads & Local SEO",
    description: "Boosted local visibility and foot traffic by 280% with strategic local SEO and Google Ads campaigns.",
    metrics: [
      { label: "Traffic Increase", value: "280%" },
      { label: "Store Visits", value: "+40%" },
      { label: "Online Orders", value: "200%" }
    ],
    tags: ["Google Ads", "Local SEO", "Restaurant"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&auto=format"
  },
  {
    title: "Tech Startup",
    category: "Full Digital Marketing",
    description: "Launched a comprehensive digital presence from zero, achieving 150K+ monthly website visitors within 6 months.",
    metrics: [
      { label: "Monthly Visitors", value: "150K+" },
      { label: "Lead Generation", value: "400%" },
      { label: "Brand Awareness", value: "300%" }
    ],
    tags: ["SEO", "Social Media", "Content Marketing"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&auto=format"
  },
  {
    title: "Healthcare Clinic",
    category: "Website Development & SEO",
    description: "Redesigned website and implemented SEO strategy resulting in 220% increase in appointment bookings.",
    metrics: [
      { label: "Appointment Bookings", value: "220%" },
      { label: "Website Speed", value: "+90%" },
      { label: "Search Rankings", value: "Top 3" }
    ],
    tags: ["Website Development", "SEO", "Healthcare"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&auto=format"
  }
];

const Portfolio = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(caseStudies.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleCards(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll("[data-index]");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Success <span className="text-accent">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence 
            and achieve remarkable growth through strategic marketing campaigns.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              data-index={index}
              className={`case-study-card ${
                visibleCards[index] ? "fade-in visible" : "fade-in"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white">
                    <p className="text-sm opacity-90 mb-1">{study.category}</p>
                    <h3 className="text-xl font-bold">{study.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-2xl font-bold text-accent">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full group"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Similar Results
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Results Summary */}
        <div className="bg-card border border-border rounded-3xl p-12 shadow-[var(--shadow-medium)] text-center">
          <h3 className="text-3xl font-bold text-primary mb-6">
            Combined Results Across All Campaigns
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent">500%</div>
              <div className="text-sm text-muted-foreground">Average Growth</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent">10M+</div>
              <div className="text-sm text-muted-foreground">People Reached</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-2">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent">4.2x</div>
              <div className="text-sm text-muted-foreground">Average ROAS</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-2">
                <ExternalLink className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent">100+</div>
              <div className="text-sm text-muted-foreground">Success Stories</div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to become our next success story? Let's discuss how we can 
            help your business achieve similar results.
          </p>

          <Button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-hero"
          >
            Start Your Success Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;