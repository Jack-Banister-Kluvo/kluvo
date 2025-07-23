import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const features = [
    "Office-based reps in KL & Beirut",
    "UK/US accents and local presence",
    "Complete CRM integration",
    "Predictive dialing technology",
    "Quality control on every booking",
    "Private Slack channel updates",
    "Weekly performance reports",
    "Compliance and DNC management",
    "Speed-to-lead automation",
    "Follow-up cadence management"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No setup fees, no hidden costs, no long-term contracts. Pay only for productive hours with complete visibility into results.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-elegant transform hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center pb-8 pt-12">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                £14
                <span className="text-2xl text-muted-foreground">/hour</span>
              </div>
              <CardTitle className="text-3xl mb-4">
                Fully-Managed Outbound Sales
              </CardTitle>
              <p className="text-lg text-muted-foreground">
                Everything you need to scale your outbound efforts
              </p>
            </CardHeader>
            
            <CardContent className="px-12 pb-12">
              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-accent mr-4 flex-shrink-0" />
                    <span className="text-foreground text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <Button variant="cta" size="xl" className="w-full">
                  Start Your Trial
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Schedule a Demo
                </Button>
              </div>
              
              <p className="text-center text-sm text-muted-foreground mt-6">
                No setup fees • No contracts • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;