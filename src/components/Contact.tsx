import { useState } from "react";
import { MapPin, Phone, Mail, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/8801865740437?text=Hi! I'm interested in your digital marketing services.", "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to boost your digital presence? Let's discuss how we can help 
            your business grow with our proven strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Send Us a Message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you with a free consultation 
                and strategy session.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Full Name *</label>
                  <Input 
                    required 
                    placeholder="John Doe"
                    className="border-border focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Email Address *</label>
                  <Input 
                    type="email" 
                    required 
                    placeholder="john@example.com"
                    className="border-border focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Phone Number</label>
                  <Input 
                    type="tel" 
                    placeholder="+880 1XXX-XXXXXX"
                    className="border-border focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Business Type</label>
                  <Select>
                    <SelectTrigger className="border-border focus:border-accent">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="e-commerce">E-commerce</SelectItem>
                      <SelectItem value="restaurant">Restaurant/Food</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="fashion">Fashion/Beauty</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Message *</label>
                <Textarea 
                  required 
                  rows={5}
                  placeholder="Tell us about your business goals and how we can help you..."
                  className="border-border focus:border-accent resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-hero w-full group"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Contact Information</h3>
              <p className="text-muted-foreground">
                Prefer to reach out directly? Here's how you can get in touch with us.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Office Address</h4>
                  <p className="text-muted-foreground">
                    House 10, Road 4, Dhanmondi<br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Phone Number</h4>
                  <a 
                    href="tel:+8801865740437" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +880 1865 740 437
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email Address</h4>
                  <a 
                    href="mailto:boostnestdigital@gmail.com" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    boostnestdigital@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-1">Quick WhatsApp Chat</h4>
                    <p className="text-sm text-muted-foreground">
                      Get instant responses to your questions
                    </p>
                  </div>
                </div>
                <Button 
                  onClick={openWhatsApp}
                  className="w-full mt-4 bg-[#25D366] hover:bg-[#128C7E] text-white"
                >
                  Start WhatsApp Chat
                </Button>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h4 className="font-semibold text-primary mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-primary">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-primary">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-primary">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;