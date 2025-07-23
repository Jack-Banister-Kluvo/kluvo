import { MapPin, Clock, Users } from "lucide-react";

const OfficeLocations = () => {
  const offices = [
    {
      city: "Beirut",
      country: "Lebanon",
      timezone: "GMT+3",
      description: "Our Middle East hub focusing on regional markets and Arabic-speaking clients"
    },
    {
      city: "Kuala Lumpur", 
      country: "Malaysia",
      timezone: "GMT+8",
      description: "Asia-Pacific operations center serving clients across Southeast Asia and Australia"
    },
    {
      city: "Leeds",
      country: "United Kingdom", 
      timezone: "GMT+0",
      description: "Operations headquarters managing technology infrastructure, quality assurance, and client support"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Global Team,
            <span className="block text-primary"> Local Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our strategically located offices ensure 24/7 coverage and deep understanding of local markets. 
            No matter where your prospects are, we have the right team to reach them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{office.city}</h3>
                  <p className="text-muted-foreground">{office.country}</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Timezone: {office.timezone}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {office.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Clock className="w-4 h-4" />
            <span>24/7 Global Coverage Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;