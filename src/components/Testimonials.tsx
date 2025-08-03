import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rashid Ahmed",
    title: "CEO, Fashion Forward BD",
    content: "BoostNest Digital transformed our online presence completely. Our Facebook ads now generate 4x more sales than before, and their team is incredibly responsive and professional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3"
  },
  {
    name: "Fatima Khan",
    title: "Founder, Spice Garden Restaurant",
    content: "Thanks to their local SEO and Google Ads expertise, our restaurant now appears at the top of local searches. Customer visits increased by 40% in just 3 months!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b72ad88c?w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3"
  },
  {
    name: "Mohammad Hassan",
    title: "Director, TechVision Solutions",
    content: "Their comprehensive digital strategy helped us go from startup to market leader. The website they built is beautiful and the SEO results speak for themselves.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3"
  },
  {
    name: "Dr. Ayesha Rahman",
    title: "Chief Medical Officer, HealthCare Plus",
    content: "BoostNest Digital didn't just redesign our website - they revolutionized how patients find and book with us. Appointments are up 220% and the experience is seamless.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3"
  },
  {
    name: "Karim Abdullah",
    title: "Marketing Manager, Elite Properties",
    content: "Working with BoostNest has been a game-changer. Their social media management and content strategy have significantly boosted our brand awareness and lead generation.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3"
  },
  {
    name: "Nadia Sultana",
    title: "Owner, Beauty Bliss Salon",
    content: "Their Facebook and Instagram campaigns brought in so many new clients that we had to expand our team! The ROI has been incredible and the service is top-notch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3"
  }
];

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(testimonials.length).fill(false));

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

    const cards = document.querySelectorAll("[data-testimonial-index]");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="py-24 bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say 
            about working with BoostNest Digital.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              data-testimonial-index={index}
              className={`testimonial-card ${
                visibleCards[index] ? "fade-in visible" : "fade-in"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Quote className="h-4 w-4 text-white" />
              </div>

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-3xl p-12 shadow-[var(--shadow-medium)]">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">100+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;