import { useState } from "react";
import { Button } from "@/components/ui/button";
import BookingModal from "./BookingModal";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Textured Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-pattern-dots bg-dots opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-2xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Outbound Sales Team,
            <span className="block text-accent"> Without The Headache</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            We plug a complete, fully-managed outbound sales desk into your business. 
            No hiring, training, or supervision required—just results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              className="min-w-48"
              onClick={() => setBookingModalOpen(true)}
            >
              Book a Call
            </Button>
            <Button variant="outline" size="xl" className="min-w-48 bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <a href="#features">
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      
      <BookingModal 
        open={bookingModalOpen} 
        onOpenChange={setBookingModalOpen} 
      />
    </section>
  );
};

export default Hero;