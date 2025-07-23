import { Card, CardContent } from "@/components/ui/card";
import { Phone, Target, Eye, Cog } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Phone,
      title: "Seamless Integration",
      description: "Our callers sit in Kuala Lumpur and Beirut but sound local with UK/US accents. They read your CRM notes, use your calendar, and speak about your product in first person."
    },
    {
      icon: Target,
      title: "Maximum Efficiency",
      description: "Predictive dialing technology ensures your reps spend time talking, not waiting. 120 live conversations per day—what manual dialing takes 3 days to achieve."
    },
    {
      icon: Eye,
      title: "Quality Control",
      description: "Every booking is recorded and reviewed instantly. Our quality control team cancels meetings that don't meet your criteria before they hit your calendar."
    },
    {
      icon: Cog,
      title: "Advanced Technology",
      description: "Built-in CRM sync, speed-to-lead triggers, compliance checks, and automated follow-up sequences. No data hygiene headaches or missed opportunities."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose Kluvo?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've eliminated the traditional pain points of outbound sales while maintaining the quality and control you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;