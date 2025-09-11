import { Card, CardHeader, CardTitle } from "./ui/card";
import { IsometricShield, IsometricEye, IsometricZap, IsometricClock, IsometricSettings } from "./IsometricIcons";
import { Lightning24 } from "./icons/Lightning24";
import { Globe } from "./icons/Globe";
import { PlugConnected } from "./icons/PlugConnected";
import { ObservabilityIcon } from "./icons/ObservabilityIcon";
import { SLAGuaranteeIcon } from "./icons/SLAGuaranteeIcon";
import { IOTSecurityIcon } from "./icons/IOTSecurityIcon";
import { PredictiveMaintenanceIcon } from "./icons/PredictiveMaintenanceIcon";

export function Services({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const services: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    link?: string;
    linkText?: string;
  }> = [
    {
      icon: <PredictiveMaintenanceIcon className="w-8 h-8" />,
      title: "Predictive Maintenance",
      description: "AI-powered algorithms predict equipment failures before they happen, reducing unplanned downtime by up to 50%.",
    },
    {
      icon: <IOTSecurityIcon className="w-8 h-8" />,
      title: "IoT Security",
      description: "Enterprise-grade security with end-to-end encryption, zero-trust architecture, and continuous threat monitoring.",
    },
    {
      icon: <Lightning24 className="w-8 h-8" />,
      title: "Smart Energy Management",
      description: "Optimize energy consumption with intelligent load balancing and solar solutions.",
      link: "solar",
      linkText: "Explore Solar Solutions"
    },
    {
      icon: <ObservabilityIcon className="w-8 h-8" />,
      title: "End-to-End Observability",
      description: "Complete visibility across your entire infrastructure with real-time monitoring and intelligent alerting.",
    },
    {
      icon: <SLAGuaranteeIcon className="w-8 h-8" />,
      title: "99.9% SLA Guarantee",
      description: "Mission-critical reliability with 24/7 monitoring and support.",
    },
    {
      icon: <PlugConnected className="w-8 h-8" />,
      title: "System Integration",
      description: "Seamless integration with existing systems using flexible APIs and connector frameworks.",
    }
  ];

  return (
    <section id="services" className="py-32 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6 text-foreground">
            Everything you need to <span className="text-primary">automate at scale</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and capabilities needed to
            transform your industrial operations with enterprise-grade reliability.
          </p>
        </div>

        {/* Services Grid Container with outer border */}
        <div className="max-w-6xl mx-auto">
          <div className="border border-border -mx-1.5" style={{ borderWidth: '1px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="p-8 bg-card border-border relative"
                  style={{ 
                    borderWidth: '0.5px',
                    borderStyle: 'solid'
                  }}
                >
                  <CardHeader className="p-0">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="text-primary">
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <CardTitle className="text-xl mb-4 text-foreground">
                      {service.title}
                    </CardTitle>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Link if available */}
                    {service.link && service.linkText && onNavigate && (
                      <button
                        onClick={() => onNavigate(service.link)}
                        className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm mt-4 inline-flex items-center gap-1"
                      >
                        {service.linkText}
                        <span>→</span>
                      </button>
                    )}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}