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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Scale Your Outbound?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch to discuss how Kluvo can transform your sales process. 
            We'll show you exactly how we can integrate with your existing workflow.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                Start Your Outbound Transformation
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your outbound goals</Label>
                  <Textarea 
                    id="message" 
                    placeholder="What challenges are you facing with outbound sales? What results are you looking to achieve?"
                    className="min-h-32"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="xl" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Get Started"}
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  We'll respond within 24 hours with a custom proposal
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;