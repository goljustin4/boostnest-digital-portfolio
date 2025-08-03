import { useEffect, useState } from "react";
import { Target, Heart, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy we implement is designed with measurable outcomes in mind, ensuring your investment delivers real business value."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships by understanding your unique business needs and goals."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of digital trends and leverage cutting-edge tools and strategies to keep your brand competitive."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from campaign execution to client communication."
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? "slide-in-left visible" : "slide-in-left"}`}>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                About <span className="text-accent">BoostNest Digital</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Building digital bridges between brands and customers since day one.
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At BoostNest Digital, we believe that every brand has a unique story worth telling. 
                Our mission is to help businesses in Bangladesh and beyond connect with their target 
                audience through strategic digital marketing solutions.
              </p>
              
              <p>
                Based in the heart of Dhaka, our team of digital marketing experts combines local 
                market knowledge with global best practices to deliver campaigns that not only reach 
                your audience but truly resonate with them.
              </p>

              <p>
                From startups looking to establish their digital presence to established businesses 
                seeking to scale their online operations, we craft customized strategies that drive 
                real, measurable results.
              </p>
            </div>

            <Button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-hero"
            >
              Work With Us
            </Button>
          </div>

          {/* Values Grid */}
          <div className={`${isVisible ? "slide-in-right visible" : "slide-in-right"} delay-300`}>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-primary">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-24 text-center">
          <div className="bg-card border border-border rounded-3xl p-12 shadow-[var(--shadow-medium)] max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower businesses with innovative digital marketing strategies that create 
              meaningful connections between brands and their customers, driving sustainable 
              growth in the digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;