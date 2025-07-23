import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, FileText, Calendar, Phone, Users, TrendingUp, Target, Clock } from "lucide-react";

const Dashboard = () => {
  const dashboardFeatures = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Analytics",
      description: "Track campaign performance, conversion rates, and ROI in real-time"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Lead Pipeline",
      description: "Monitor your sales pipeline from prospect to close with detailed tracking"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Meeting Schedule",
      description: "View all scheduled meetings and track show rates automatically"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Recordings",
      description: "Access recorded calls with transcripts and performance insights"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Reports & Insights",
      description: "Comprehensive reports on outreach performance and trends"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Performance",
      description: "Monitor your dedicated sales team's activities and results"
    }
  ];

  const stats = [
    { label: "Active Campaigns", value: "12", trend: "+15%" },
    { label: "Qualified Leads", value: "147", trend: "+32%" },
    { label: "Meetings Booked", value: "23", trend: "+28%" },
    { label: "Response Rate", value: "8.4%", trend: "+12%" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Complete Visibility Into Your 
            <span className="block text-primary"> Sales Performance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get a comprehensive dashboard that gives you real-time insights into every aspect of your outbound sales operation. 
            No guesswork, just clear data-driven results.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mb-16">
          <div className="bg-card border rounded-2xl p-6 shadow-xl">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Sales Dashboard</h3>
                <p className="text-sm text-muted-foreground">Live performance overview</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Updated 2 minutes ago</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <div className="flex items-center gap-1 text-xs text-primary mt-1">
                    <TrendingUp className="w-3 h-3" />
                    {stat.trend}
                  </div>
                </div>
              ))}
            </div>

            {/* Dashboard Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dashboardFeatures.map((feature, index) => (
                <Card key={index} className="border-border/50 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-sm">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {feature.icon}
                      </div>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            Live Data
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Data-Driven Decisions</h3>
            <p className="text-muted-foreground">
              Make informed decisions with comprehensive analytics and real-time performance metrics
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Complete Transparency</h3>
            <p className="text-muted-foreground">
              See exactly what your sales team is doing and the results they're generating
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Continuous Optimization</h3>
            <p className="text-muted-foreground">
              Identify trends and opportunities to continuously improve your sales performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;