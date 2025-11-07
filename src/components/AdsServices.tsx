import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Sparkles, TrendingUp, Rocket, Zap } from "lucide-react";
import { useState } from "react";
import BookingModal from "./BookingModal";

const AdsServices = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const tiers = [
    {
      icon: Sparkles,
      badge: "TIER 0",
      title: "Starter",
      subtitle: "Get Me Something Running",
      color: "bg-muted",
      borderColor: "border-border",
      iconColor: "text-muted-foreground",
      forWho: "Solopreneurs, small local shops, or first-time advertisers",
      goal: "Get your first ads running with basic setup and campaign management.",
      features: [
        "Ad Platform Setup (Meta or Google Ads account setup + pixel installation)",
        "1 Basic Campaign (1 ad group with awareness or traffic objective)",
        "Ad Creative (1–2 images or short-form videos)",
        "Predefined Audience Targeting (Industry or location-based)",
        "1 Performance Summary Report (after 14 days)",
      ],
      perfectFor: "Businesses with minimal budget looking to test the waters with digital advertising.",
      addOns: "Extra creative or a new campaign, or a landing page mini-build available for an additional fee.",
    },
    {
      icon: TrendingUp,
      badge: "TIER 1",
      title: "Launch & Visibility",
      subtitle: null,
      color: "bg-accent/10",
      borderColor: "border-accent/30",
      iconColor: "text-accent",
      forWho: "Small businesses seeking consistent online visibility",
      goal: "Drive traffic and prove the value of your advertising investment.",
      features: [
        "1–2 Optimized Campaigns (Meta or Google ads)",
        "Basic SEO Setup + GMB Listing",
        "Simple Landing Page/Website Section",
        "Monthly Performance Report + Recommendations",
      ],
      perfectFor: "Businesses that want to establish a presence online and start generating traffic.",
      upsell: "Expand with remarketing and automation (Tier 2).",
    },
    {
      icon: Rocket,
      badge: "TIER 2",
      title: "Growth & Conversion",
      subtitle: null,
      color: "bg-primary/5",
      borderColor: "border-primary/20",
      iconColor: "text-primary",
      forWho: "Growing companies ready to generate leads and track ROI",
      goal: "Sustain lead generation, optimize your marketing funnel, and boost conversions.",
      features: [
        "Multi-Channel Ad Management (Google, Meta, optional TikTok)",
        "Conversion Tracking + Retargeting Setup",
        "Email Automation & CRM Lead Capture",
        "Website Optimization (CRO)",
        "Monthly Analytics Dashboard + Strategy Call",
      ],
      perfectFor: "Businesses ready to optimize their marketing funnel for better conversions.",
      upsell: "Expand with full automation and multi-creative testing (Tier 3).",
    },
    {
      icon: Zap,
      badge: "TIER 3",
      title: "Scale & Dominate",
      subtitle: null,
      color: "bg-accent/10",
      borderColor: "border-accent",
      iconColor: "text-accent",
      forWho: "Established brands, e-commerce, SaaS",
      goal: "Scale conversions, automate retargeting, and dominate paid visibility.",
      features: [
        "Full SEO & Content Strategy (Blogs, backlinks, technical SEO)",
        "Cross-Platform Ads (Google, Meta, YouTube, TikTok, LinkedIn)",
        "Creative Production (Video ads, UGC, ad copy testing)",
        "Advanced CRM Automations + Retargeting Funnels",
        "E-Commerce Optimization & ROAS Tracking",
        "Weekly Strategy + KPI Review Calls",
      ],
      perfectFor: "Brands aiming to scale quickly and dominate their industry with a full-funnel advertising approach.",
      upsell: null,
    },
  ];

  const whyChooseReasons = [
    {
      title: "Expertise in Multi-Channel Ads",
      description: "We manage ads across all major platforms—Google, Meta, TikTok, YouTube, and more.",
    },
    {
      title: "Proven Results",
      description: "Our data-driven approach ensures your ads are performing at their best.",
    },
    {
      title: "Customized Strategies",
      description: "We tailor each campaign to your business objectives, ensuring maximum ROI.",
    },
  ];

  return (
    <section id="ads-services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Boost Your Online Presence with Kluvo's ADS Services
          </h2>
          <p className="text-lg text-muted-foreground">
            At Kluvo, we specialize in delivering tailored advertising solutions for businesses at every stage of growth. 
            Whether you're just starting or ready to scale, our comprehensive packages ensure you get the most out of your 
            ad spend, drive results, and grow your business.
          </p>
        </div>

        {/* Service Tiers Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Choose the Right Plan for Your Business
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer flexible ad management services designed for businesses of all sizes. 
              Browse our packages to find the right fit for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
            {tiers.map((tier, index) => {
              const Icon = tier.icon;
              
              return (
                <Card 
                  key={index} 
                  className={`${tier.color} border-2 ${tier.borderColor} hover:shadow-elegant transition-all duration-300`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-background">
                          <Icon className={`w-6 h-6 ${tier.iconColor}`} />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">
                            {tier.badge}
                          </Badge>
                          <CardTitle className="text-2xl text-primary">
                            {tier.title}
                          </CardTitle>
                          {tier.subtitle && (
                            <CardDescription>
                              {tier.subtitle}
                            </CardDescription>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">For:</p>
                        <p className="text-sm text-muted-foreground">
                          {tier.forWho}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Goal:</p>
                        <p className="text-sm text-muted-foreground">
                          {tier.goal}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">
                          What's Included:
                        </h4>
                        <ul className="space-y-2">
                          {tier.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.iconColor}`} />
                              <span className="text-sm text-foreground">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-sm font-semibold mb-2 text-foreground">
                          Perfect For:
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {tier.perfectFor}
                        </p>
                      </div>

                      {tier.addOns && (
                        <div className="pt-2">
                          <p className="text-sm font-semibold mb-1 text-foreground">
                            Optional Add-Ons:
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {tier.addOns}
                          </p>
                        </div>
                      )}

                      {tier.upsell && (
                        <div className="pt-2">
                          <p className="text-sm font-semibold mb-1 text-foreground">
                            Natural Upsell:
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {tier.upsell}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why Choose Kluvo */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Why Choose Kluvo for Your Ads?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseReasons.map((reason, index) => (
              <Card key={index} className="bg-card hover:shadow-soft transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto shadow-elegant">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Not sure which plan is right for you?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Let's chat! Book a free consultation with us today and learn how we can help you create 
            a customized advertising strategy that fits your business needs.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => setBookingModalOpen(true)}
          >
            Book Your Free Consultation
          </Button>
        </div>
      </div>

      <BookingModal 
        open={bookingModalOpen} 
        onOpenChange={setBookingModalOpen} 
      />
    </section>
  );
};

export default AdsServices;