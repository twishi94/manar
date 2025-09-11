import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Portfolio() {
  const projects = [
    {
      title: "Smart Manufacturing Plant",
      client: "TechCorp Industries",
      category: "Industrial Automation",
      location: "Detroit, MI",
      year: "2024",
      description: "Complete automation overhaul of 50,000 sq ft manufacturing facility with AI-powered predictive maintenance, reducing downtime by 40% and increasing efficiency by 35%.",
      image: "https://images.unsplash.com/photo-1565792267999-4f82b8b4d4eb?auto=format&fit=crop&w=800&h=600",
      results: ["40% Less Downtime", "35% Efficiency Gain", "$2M Annual Savings"]
    },
    {
      title: "Smart Office Complex",
      client: "Metropolitan Business Center",
      category: "Building Automation",
      location: "New York, NY",
      year: "2024",
      description: "IoT-enabled building management system for 25-story office complex, optimizing energy consumption and enhancing occupant comfort through intelligent climate control.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600",
      results: ["30% Energy Savings", "50% Maintenance Reduction", "95% Tenant Satisfaction"]
    },
    {
      title: "Renewable Energy Grid",
      client: "GreenPower Solutions",
      category: "Energy Management",
      location: "Phoenix, AZ",
      year: "2023",
      description: "Smart grid integration for 100MW solar farm with real-time monitoring, automated load balancing, and predictive weather-based energy distribution.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&h=600",
      results: ["98% Uptime", "25% Cost Reduction", "Zero Grid Failures"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20 mb-6">
            Our Work
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-foreground">
            Transforming <span className="text-primary">Industries</span> Through Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped leading companies achieve unprecedented efficiency 
            and reliability through cutting-edge automation solutions.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-border bg-secondary dark:bg-gray-800">
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <Badge variant="secondary" className="bg-background/90 dark:bg-card/90 text-foreground">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{project.year}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{project.location}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-semibold text-foreground">
                          {project.title}
                        </h3>
                        
                        <p className="text-muted-foreground font-medium">{project.client}</p>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center p-4 bg-background dark:bg-card border border-border rounded-lg">
                            <div className="text-lg font-semibold text-foreground">{result}</div>
                          </div>
                        ))}
                      </div>

                      <Button variant="outline" className="w-fit border-border hover:bg-accent">
                        View Case Study
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            View All Projects
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}