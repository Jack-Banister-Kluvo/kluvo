import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, Sparkles, TrendingUp, Rocket, Zap, Check, Settings, ArrowRight, Target, Users, Globe, Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import BookingModal from "./BookingModal";
import adsDashboardHero from "@/assets/ads-dashboard-hero.jpg";
import useEmblaCarousel from 'embla-carousel-react';

const AdsServices = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

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
      quote: "Working with Kluvo has been transformative. Their ad strategy and transparent reporting gave us full clarity — we saw a 45% increase in qualified leads within two months.",
      author: "Sarah M.",
      role: "Founder at BloomEcom",
      initials: "SM"
    },
    {
      quote: "The team at Kluvo truly understands our business. They took the time to optimize our campaigns and helped us lower ad costs by 30% without losing reach.",
      author: "Michael T.",
      role: "Marketing Manager at SaaSFlow",
      initials: "MT"
    },
    {
      quote: "Professional, responsive, and results-driven. Their data insights and creative approach helped our brand build real visibility online.",
      author: "Jessica L.",
      role: "Director at Insight Services",
      initials: "JL"
    }
  ];

  return (
    <section id="ads-services" className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-background via-primary/5 to-accent/10 overflow-hidden">
        {/* Floating abstract shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s' }} />
        </div>

        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
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
                  className="text-lg px-8 py-6 shadow-elegant hover:shadow-xl hover:scale-105 transition-all"
                  onClick={() => setBookingModalOpen(true)}
                >
                  Book a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right Side - Visual Focus */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-500">
                <img 
                  src={adsDashboardHero} 
                  alt="Marketing dashboard showing growth charts and ad performance metrics"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />
      </div>

      {/* Stats & Impact Section */}
      <div className="relative bg-gradient-to-br from-muted/30 via-primary/10 to-accent/5 py-20 overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <TrendingUp className="w-full h-full text-primary" strokeWidth={0.5} />
          </div>
        </div>
        
        {/* Floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Proven Results. Real Growth.
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              We help businesses achieve measurable success through smarter advertising, data-driven insights, and continuous optimization.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                icon: TrendingUp,
                stat: "3.2x Average ROI",
                description: "Our campaigns consistently outperform industry benchmarks.",
                color: "text-primary"
              },
              {
                icon: Target,
                stat: "90-Day Growth Focus",
                description: "Every campaign designed to deliver results within the first 3 months.",
                color: "text-accent"
              },
              {
                icon: Users,
                stat: "100+ Businesses Helped",
                description: "From solopreneurs to global teams — our strategies scale with you.",
                color: "text-primary"
              },
              {
                icon: Globe,
                stat: "Multi-Platform Expertise",
                description: "Google, Meta, TikTok, and beyond — we meet your audience where they are.",
                color: "text-accent"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="text-center space-y-4 animate-fade-in hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="p-4 rounded-2xl bg-background shadow-soft group-hover:shadow-elegant transition-all duration-300">
                        <Icon className={`w-10 h-10 ${item.color}`} strokeWidth={1.5} />
                      </div>
                      {/* Animated glow */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      {item.stat}
                    </h3>
                    <p className="text-sm md:text-base text-foreground/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-lg text-foreground/80 mb-6">
              Want to see how we can help you grow?
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="shadow-soft hover:shadow-elegant transition-all hover:scale-105"
              onClick={() => setBookingModalOpen(true)}
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(var(--background))" fillOpacity="1"/>
          </svg>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-20">

        {/* Service Tiers Section */}
        <div className="relative mb-16 bg-gradient-to-br from-background via-background to-primary/5 py-16 -mx-4 px-4 rounded-3xl overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <Rocket className="w-full h-full text-primary" strokeWidth={0.3} />
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12 space-y-4 animate-fade-in">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2 relative inline-block">
                Choose the Right Plan for Your Business
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-primary/30 rounded-full mt-2" />
              </h3>
              <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mt-6">
                Flexible plans that grow with your business — from your first campaign to full-scale domination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1700px] mx-auto mb-12">
              {tiers.map((tier, index) => {
                const Icon = tier.icon;
                const ctaTexts = ["Get Started", "Enquire Now", "Talk to Our Team", "Book a Strategy Call"];
                
                return (
                  <Card 
                    key={index} 
                    className={`${tier.color} border-2 ${tier.borderColor} shadow-soft hover:shadow-elegant hover:-translate-y-2 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden`}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 to-transparent" />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-xl bg-background shadow-soft group-hover:scale-110 transition-transform duration-300">
                            <Icon className={`w-6 h-6 ${tier.iconColor}`} />
                          </div>
                          <div>
                            <Badge 
                              variant="outline" 
                              className="mb-2 group-hover:bg-primary/10 transition-colors duration-300"
                            >
                              {tier.badge}
                            </Badge>
                            <CardTitle className="text-2xl text-primary">
                              {tier.title}
                            </CardTitle>
                            {tier.subtitle && (
                              <CardDescription className="text-sm">
                                {tier.subtitle}
                              </CardDescription>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-foreground">For:</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {tier.forWho}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">Goal:</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {tier.goal}
                          </p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-3 text-primary">
                            What's Included:
                          </h4>
                          <ul className="space-y-2.5">
                            {tier.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.iconColor}`} />
                                <span className="text-sm text-foreground leading-relaxed">
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
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {tier.perfectFor}
                          </p>
                        </div>

                        {tier.addOns && (
                          <div className="pt-2">
                            <p className="text-sm font-semibold mb-1 text-foreground">
                              Optional Add-Ons:
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {tier.addOns}
                            </p>
                          </div>
                        )}

                        {tier.upsell && (
                          <div className="pt-2">
                            <p className="text-sm font-semibold mb-1 text-foreground">
                              Natural Upsell:
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {tier.upsell}
                            </p>
                          </div>
                        )}

                        {/* CTA Button */}
                        <div className="pt-4">
                          <Button 
                            className="w-full rounded-xl hover:scale-105 transition-transform duration-300 shadow-soft"
                            variant={index === 2 || index === 3 ? "default" : "outline"}
                            onClick={() => setBookingModalOpen(true)}
                          >
                            {ctaTexts[index]}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Compare Plans CTA */}
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                variant="outline"
                size="lg"
                className="shadow-soft hover:shadow-elegant transition-all hover:scale-105"
                onClick={() => {
                  const comparisonSection = document.getElementById('comparison-table');
                  comparisonSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Compare All Plans
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Curved Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />
        </div>

        {/* Comparison Table */}
        <div id="comparison-table" className="relative mb-16 scroll-mt-20 -mx-4 px-4 py-16 bg-gradient-to-br from-background via-muted/10 to-background overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center mb-8 animate-fade-in">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Quick Comparison
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Compare features across all tiers at a glance
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto overflow-x-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl shadow-soft border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-muted/50 transition-colors">
                      <TableHead className="w-[200px] font-bold text-foreground">Feature</TableHead>
                      <TableHead className="text-center font-bold text-foreground">Tier 0</TableHead>
                      <TableHead className="text-center font-bold text-foreground">Tier 1</TableHead>
                      <TableHead className="text-center font-bold text-foreground">Tier 2</TableHead>
                      <TableHead className="text-center font-bold text-foreground">Tier 3</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index} className="hover:bg-muted/30 transition-colors">
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
            </div>

            <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-muted-foreground mb-4">
                Need help choosing the right plan? Our team can recommend the best fit for your goals.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="shadow-soft hover:shadow-elegant hover:scale-105 transition-all"
                onClick={() => setBookingModalOpen(true)}
              >
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials Section - Premium Design */}
        <div id="testimonials" className="relative mb-16 -mx-4 px-4 py-24 overflow-hidden">
          {/* Curved Wave Divider - Top */}
          <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M0 120L60 110C120 100 240 80 360 73.3C480 67 600 73 720 76.7C840 80 960 80 1080 73.3C1200 67 1320 53 1380 46.7L1440 40V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="hsl(var(--background))" />
            </svg>
          </div>
          
          {/* Rich Gradient Background with Geometric Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/20 to-primary/10 -z-10">
            {/* Subtle geometric pattern overlay */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                               radial-gradient(circle at 75% 75%, hsl(var(--accent) / 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          {/* Beige/Warm Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-50/10 -z-10" />
          
          {/* Floating Abstract Shapes - Multiple layers for depth */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Large blurred circles */}
            <div className="absolute top-20 left-[10%] w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute top-40 right-[15%] w-96 h-96 bg-gradient-to-br from-accent/15 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
            <div className="absolute bottom-20 left-[20%] w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
            <div className="absolute bottom-40 right-[25%] w-64 h-64 bg-gradient-to-br from-accent/20 to-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s', animationDelay: '3s' }} />
            
            {/* Medium gradient blobs */}
            <div className="absolute top-1/3 left-[5%] w-48 h-48 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDuration: '7s' }} />
            <div className="absolute top-2/3 right-[8%] w-56 h-56 bg-gradient-to-tl from-accent/12 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDuration: '11s', animationDelay: '1.5s' }} />
            
            {/* Small accent shapes */}
            <div className="absolute top-1/4 right-[30%] w-32 h-32 bg-primary/8 rounded-full blur-xl animate-pulse" style={{ animationDuration: '6s' }} />
            <div className="absolute bottom-1/3 left-[35%] w-40 h-40 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
          </div>

          <div className="relative z-10 container mx-auto">
            <div className="text-center mb-16 space-y-4 animate-fade-in">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-4">
                What Our Clients Are Saying
              </h3>
              <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto font-medium">
                See how Kluvo helps businesses grow through data-driven ad campaigns and dedicated support.
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-7xl mx-auto mb-12">
              {/* Navigation Buttons */}
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border-2 border-primary/20 shadow-elegant hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </button>
              
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border-2 border-primary/20 shadow-elegant hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </button>

              {/* Carousel */}
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-6">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                    >
                      <Card 
                        className="bg-background/95 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 shadow-elegant hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 group h-full"
                      >
                        <CardContent className="p-8 flex flex-col h-full">
                          {/* Avatar with Gradient Ring */}
                          <div className="flex items-center gap-4 mb-6">
                            <div className="relative flex-shrink-0">
                              {/* Gradient Ring */}
                              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-[3px] group-hover:p-[4px] transition-all duration-300">
                                <div className="w-full h-full rounded-full bg-background" />
                              </div>
                              {/* Avatar */}
                              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 flex items-center justify-center border-[3px] border-background group-hover:scale-110 transition-transform duration-300">
                                <span className="text-primary font-bold text-xl">
                                  {testimonial.initials}
                                </span>
                              </div>
                              {/* Quote Icon Badge */}
                              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Quote className="w-3.5 h-3.5 text-primary-foreground" />
                              </div>
                            </div>

                            {/* Star Rating */}
                            <div className="flex gap-0.5">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                              ))}
                            </div>
                          </div>

                          {/* Quote Text */}
                          <div className="flex-1 mb-6">
                            <p className="text-foreground/90 text-base leading-relaxed italic">
                              "{testimonial.quote}"
                            </p>
                          </div>

                          {/* Author Info with decorative line */}
                          <div className="relative pt-6 mt-auto">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                            <p className="font-bold text-foreground text-lg mb-1">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground font-medium">{testimonial.role}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Strip with enhanced styling */}
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="max-w-3xl mx-auto bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-md rounded-3xl p-10 shadow-elegant border-2 border-primary/20 relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-foreground font-bold mb-6">
                    Want to see results like these?
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
                    onClick={() => setBookingModalOpen(true)}
                  >
                    Book a Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Curved Wave Divider - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </div>

        {/* Why Choose Kluvo */}
        <div className="relative mb-16 -mx-4 px-4 py-20 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-10" />

          <div className="relative z-10">
            <div className="text-center mb-16 space-y-4 animate-fade-in">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                Why Choose Kluvo for Your Ads?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {[
                {
                  icon: Rocket,
                  title: "Expertise Across Every Platform",
                  description: "From Google to TikTok, we run high-performing, cross-channel ad campaigns that drive consistent results."
                },
                {
                  icon: TrendingUp,
                  title: "Proven Performance, Every Time",
                  description: "Data and strategy fuel every decision — so your ads don't just run, they win."
                },
                {
                  icon: Target,
                  title: "Tailored Strategies That Convert",
                  description: "We build campaigns uniquely crafted to your goals — ensuring every click counts."
                }
              ].map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={index}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card className="bg-background border border-border shadow-soft hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 group h-full">
                      <CardContent className="p-8 text-center">
                        {/* Gradient Icon */}
                        <div className="flex justify-center mb-6">
                          <div className="relative">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                              <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                            </div>
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                          </div>
                        </div>

                        <CardTitle className="text-xl md:text-2xl text-primary mb-4 font-bold">
                          {reason.title}
                        </CardTitle>
                        <p className="text-foreground/80 leading-relaxed">
                          {reason.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Tagline */}
            <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
                At Kluvo, we combine creativity, data, and automation to make advertising effortless and effective.
              </p>
            </div>

            {/* CTA Bar */}
            <div 
              className="text-center animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="max-w-2xl mx-auto bg-primary/5 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-primary/20">
                <p className="text-lg md:text-xl text-foreground/90 font-medium mb-4">
                  Let's make your next campaign your most profitable yet.
                </p>
                <Button 
                  size="lg"
                  className="shadow-elegant hover:scale-105 transition-transform"
                  onClick={() => setBookingModalOpen(true)}
                >
                  Book a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Wave Divider - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />
        </div>

      </div>

      {/* Final CTA Section */}
      <div className="relative bg-gradient-to-br from-primary via-primary to-accent py-20 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-background/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Ready to Transform Your Advertising?
              </h2>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
                Let's create campaigns that don't just reach audiences — they convert them into loyal customers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                onClick={() => setBookingModalOpen(true)}
              >
                Book Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-primary-foreground/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>No Long-Term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Results-Driven Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Expert Team</span>
              </div>
            </div>
          </div>
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