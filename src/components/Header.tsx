import { useState } from "react";
import { Button } from "@/components/ui/button";
import BookingModal from "./BookingModal";

const Header = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">KLUVO</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors">
              Process
            </a>
            <a href="#technology" className="text-foreground hover:text-primary transition-colors">
              Technology
            </a>
            <a href="#ads-services" className="text-foreground hover:text-primary transition-colors">
              ADS Services
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center">
            <Button 
              variant="default" 
              size="sm"
              onClick={() => setBookingModalOpen(true)}
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
      
      <BookingModal 
        open={bookingModalOpen} 
        onOpenChange={setBookingModalOpen} 
      />
    </header>
  );
};

export default Header;