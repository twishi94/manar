import { Card, CardContent } from "./ui/card";
import { Shield, Activity, Eye, Zap, Clock } from "lucide-react";

export function FeaturesGrid() {
  const features = [
    {
      icon: Activity,
      title: "Predictive Maintenance",
      description: "AI-powered algorithms predict equipment failures before they happen, reducing unplanned downtime by up to 50%.",
      color: "bg-blue-500"
    },
    {
      icon: Shield,
      title: "IoT Security",
      description: "Enterprise-grade security with end-to-end encryption, zero-trust architecture, and continuous threat monitoring.",
      color: "bg-green-500"
    },
    {
      icon: Eye,
      title: "End-to-End Observability",
      description: "Complete visibility across your entire infrastructure with real-time monitoring and intelligent alerting.",
      color: "bg-purple-500"
    },
    {
      icon: Zap,
      title: "Smart Energy Management",
      description: "Optimize energy consumption with intelligent load balancing and renewable energy integration.",
      color: "bg-yellow-500"
    },
    {
      icon: Clock,
      title: "99.9% SLA Guarantee",
      description: "Mission-critical reliability with 24/7 monitoring, automatic failover, and dedicated support.",
      color: "bg-red-500"
    }
  ];

  return (
    <section className="bg-secondary dark:bg-gray-800 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need to automate at scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and capabilities needed 
            to transform your industrial operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.slice(0, 3).map((feature, index) => (
            <Card key={index} className="bg-background dark:bg-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.slice(3, 5).map((feature, index) => (
            <Card key={index + 3} className="bg-background dark:bg-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}