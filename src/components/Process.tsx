import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Research & Data Enrichment",
      description: "Our research team enriches each record with direct dials and loads everything into our predictive dialer system."
    },
    {
      step: "02", 
      title: "Intelligent Dialing",
      description: "Predictive dialing technology only connects when a human answers—no wasted time on voicemails or busy signals."
    },
    {
      step: "03",
      title: "Tested Cadences",
      description: "10 calls across 30 days for cold leads, tighter schedules for warm replies, and different flows for no-shows."
    },
    {
      step: "04",
      title: "Quality Control",
      description: "Every booking is reviewed for budget, authority, and need before it hits your calendar. Non-qualified meetings are cancelled immediately."
    },
    {
      step: "05",
      title: "Complete Visibility",
      description: "Private Slack channel with call clips, highlights, and weekly reports showing all metrics and outcomes."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Proven Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach that turns prospects into qualified meetings while protecting your time and reputation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-12 last:mb-0">
              <div className="flex-shrink-0 mr-8">
                <Badge 
                  variant="outline" 
                  className="w-16 h-16 rounded-full border-2 border-primary text-primary font-bold text-lg flex items-center justify-center bg-white"
                >
                  {step.step}
                </Badge>
              </div>
              <Card className="flex-1 border-0 shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;