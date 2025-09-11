import { Building, Zap, Heart, Factory } from "lucide-react";

export function SocialProof() {
  const industries = [
    { name: "Manufacturing", icon: Factory },
    { name: "Energy & Utilities", icon: Zap },
    { name: "Healthcare", icon: Heart },
    { name: "Smart Buildings", icon: Building }
  ];

  const stats = [
    { value: "500+", label: "Enterprise Clients" },
    { value: "98%", label: "Success Rate" },
    { value: "15+", label: "Years Experience" },
    { value: "24/7", label: "Support Coverage" }
  ];

  return (
    <section className="bg-secondary dark:bg-gray-800 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by leaders across critical industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From Fortune 500 manufacturers to cutting-edge healthcare facilities, 
            industry leaders choose Manar.ai for mission-critical automation.
          </p>
        </div>

        {/* Industry Icons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {industries.map((industry, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-background dark:bg-card rounded-2xl shadow-lg flex items-center justify-center group hover:shadow-xl transition-shadow">
                <industry.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold text-foreground">{industry.name}</h3>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}