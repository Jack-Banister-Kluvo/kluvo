import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional sales team" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
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
            <Button variant="hero" size="xl" className="min-w-48">
              Get Started Today
            </Button>
            <Button variant="outline" size="xl" className="min-w-48 bg-white/10 border-white/30 text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">£14</div>
              <div className="text-lg text-white/80">per hour</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">120</div>
              <div className="text-lg text-white/80">conversations per day</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-lg text-white/80">qualified meetings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;