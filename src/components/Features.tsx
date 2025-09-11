import { Badge } from "./ui/badge";
import { CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Features() {
  const features = [
    "AI-powered predictive maintenance",
    "Real-time system monitoring", 
    "Cloud-based data analytics",
    "Mobile app integration",
    "Energy optimization algorithms",
    "Cybersecurity protocols"
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-background dark:bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                Innovation First
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-semibold leading-tight text-foreground">
                Technology for Tomorrow's <span className="text-primary">Industry</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Advanced automation solutions leveraging AI, IoT, and cloud technologies 
                to deliver unprecedented efficiency and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-semibold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600"
                alt="Smart automation dashboard"
                className="w-full h-80 lg:h-96 object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}