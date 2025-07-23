import { Card, CardContent } from "@/components/ui/card";
import technologyBg from "@/assets/technology-bg.jpg";

const Technology = () => {
  const techFeatures = [
    "Predictive dialing eliminates dead time between calls",
    "Two-way CRM synchronization prevents duplicate records",
    "Automatic speed-to-lead triggers for warm email replies", 
    "Reminder sequences and follow-up cadences",
    "Built-in number provisioning and time-zone throttling",
    "DNC checks and compliance monitoring",
    "Real-time call recording and quality control",
    "Automated data hygiene and list management"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={technologyBg} 
          alt="Technology background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Advanced Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our technology platform quietly removes the headaches that usually derail outbound projects, so you can focus on closing deals.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-elegant bg-card/95 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {techFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-foreground text-lg leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-gradient-subtle rounded-lg border border-border/50">
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  <span className="font-semibold text-foreground">The result:</span> You never have to chase data hygiene, 
                  wonder whether last night's replies were called, or worry about compliance—the platform handles it all automatically.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Technology;