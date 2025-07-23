import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-pattern-dots bg-dots opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Scale Your Outbound?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Book a call to discuss how Kluvo can transform your sales process. 
            We'll show you exactly how we integrate with your existing workflow and deliver qualified meetings.
          </p>
          
          <Button variant="cta" size="xl" className="mb-8" asChild>
            <a href="https://calendar.notion.so/meet/josephkennedy/3c2aq4oh1" target="_blank" rel="noopener noreferrer">
              Book Your Call Now
            </a>
          </Button>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-0 shadow-elegant">
            <CardContent className="p-12">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Questions? We're here to help.
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Prefer to email? Reach us at <a href="mailto:support@kluvo.co.uk" className="text-primary font-semibold hover:underline">support@kluvo.co.uk</a>
              </p>
              <p className="text-muted-foreground">
                We typically respond within 24 hours with answers to your questions and next steps.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;