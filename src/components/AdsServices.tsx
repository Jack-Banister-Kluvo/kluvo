import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, Sparkles, TrendingUp, Rocket, Zap, Check, Settings, ArrowRight } from "lucide-react";
import { useState } from "react";
import BookingModal from "./BookingModal";
import adsDashboardHero from "@/assets/ads-dashboard-hero.jpg";

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

  const comparisonData = [
    {
      feature: "Platform Setup",
      tier0: "✅",
      tier1: "✅",
      tier2: "✅",
      tier3: "✅"
    },
    {
      feature: "Campaigns Included",
      tier0: "1 Basic",
      tier1: "1-2 Optimized",
      tier2: "Multi-Channel",
      tier3: "Cross-Platform"
    },
    {
      feature: "Automation & Tracking",
      tier0: "—",
      tier1: "Basic",
      tier2: "✅ Advanced",
      tier3: "✅ Full Suite"
    },
    {
      feature: "SEO Support",
      tier0: "—",
      tier1: "Basic + GMB",
      tier2: "⚙️",
      tier3: "✅ Full Strategy"
    },
    {
      feature: "Creative Assets",
      tier0: "1-2 Images",
      tier1: "Basic",
      tier2: "Optimized",
      tier3: "✅ Video + UGC"
    },
    {
      feature: "Analytics & Reporting",
      tier0: "1 Summary",
      tier1: "Monthly Report",
      tier2: "Dashboard + Call",
      tier3: "✅ Weekly Reviews"
    }
  ];

  const testimonials = [
    {
      quote: "Kluvo's ad team transformed our visibility in just 6 weeks.",
      author: "Sarah M.",
      company: "E-commerce Brand"
    },
    {
      quote: "Their monthly reports and data insights helped us double our conversions.",
      author: "Michael T.",
      company: "Tech Startup"
    },
    {
      quote: "Professional, responsive, and truly results-driven.",
      author: "Jessica L.",
      company: "Service Business"
    }
  ];

  return (
    <section id="ads-services" className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Focus */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                  Boost Your Online Presence with Kluvo's Ad Services
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl">
                  Smart, data-driven advertising strategies that help your business grow, convert, and dominate online.
                </p>
              </div>

              {/* CTA Button */}
              <div>
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 shadow-elegant hover:scale-105 transition-transform"
                  onClick={() => setBookingModalOpen(true)}
                >
                  Book a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right Side - Visual Focus */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={adsDashboardHero} 
                  alt="Marketing dashboard showing growth charts and ad performance metrics"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>

        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />
      </div>

      {/* Credibility Bar */}
      <div className="bg-muted/30 border-y border-border py-12 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
              Trusted by fast-growing brands across the UK, US, and Europe
            </h3>
            
            {/* Placeholder for logos - can be replaced with real client logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-24 h-12 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground font-medium">Client {i}</span>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-muted-foreground font-medium">
              Average 3.2x ROI increase within 90 days of campaign launch
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-20">

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

        {/* Comparison Table */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Quick Comparison
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare features across all tiers at a glance
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px] font-bold text-foreground">Feature</TableHead>
                  <TableHead className="text-center font-bold text-foreground">Tier 0</TableHead>
                  <TableHead className="text-center font-bold text-foreground">Tier 1</TableHead>
                  <TableHead className="text-center font-bold text-foreground">Tier 2</TableHead>
                  <TableHead className="text-center font-bold text-foreground">Tier 3</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-foreground">{row.feature}</TableCell>
                    <TableCell className="text-center text-muted-foreground">{row.tier0}</TableCell>
                    <TableCell className="text-center text-muted-foreground">{row.tier1}</TableCell>
                    <TableCell className="text-center text-muted-foreground">{row.tier2}</TableCell>
                    <TableCell className="text-center text-muted-foreground">{row.tier3}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Need help choosing the right plan? Our team can recommend the best fit for your goals.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setBookingModalOpen(true)}
            >
              Book a Free Consultation
            </Button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Trusted by Businesses Who've Grown with Us
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've helped brands across e-commerce, tech, and services achieve measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card hover:shadow-soft transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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