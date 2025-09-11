import { Badge } from "./ui/badge";
import { Search, Lightbulb, Settings, Rocket, BarChart3, Users, CheckCircle } from "lucide-react";

export function Process() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      icon: <Search className="w-6 h-6" />,
      description: "We conduct comprehensive site assessments and analyze your current systems to identify optimization opportunities.",
      duration: "1-2 Weeks",
      deliverables: ["System Audit Report", "Gap Analysis", "ROI Projections", "Technical Recommendations"]
    },
    {
      number: "02",
      title: "Solution Design",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Our engineers design custom automation solutions tailored to your specific requirements and constraints.",
      duration: "2-3 Weeks",
      deliverables: ["Detailed Architecture", "Component Specifications", "Integration Plan", "Risk Assessment"]
    },
    {
      number: "03",
      title: "Development & Testing",
      icon: <Settings className="w-6 h-6" />,
      description: "We develop and rigorously test all systems in controlled environments before deployment.",
      duration: "4-8 Weeks",
      deliverables: ["System Development", "Quality Testing", "Security Validation", "Performance Benchmarks"]
    },
    {
      number: "04",
      title: "Implementation",
      icon: <Rocket className="w-6 h-6" />,
      description: "Professional installation and commissioning with minimal disruption to your operations.",
      duration: "1-4 Weeks",
      deliverables: ["System Installation", "Data Migration", "Staff Training", "Go-Live Support"]
    },
    {
      number: "05",
      title: "Monitoring & Optimization",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Continuous monitoring and optimization to ensure peak performance and maximum ROI.",
      duration: "Ongoing",
      deliverables: ["24/7 Monitoring", "Performance Reports", "Predictive Maintenance", "System Updates"]
    },
    {
      number: "06",
      title: "Support & Training",
      icon: <Users className="w-6 h-6" />,
      description: "Comprehensive support and training programs to ensure your team can effectively manage the systems.",
      duration: "Ongoing",
      deliverables: ["Technical Support", "User Training", "Documentation", "Knowledge Transfer"]
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20 mb-6">
            Our Process
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-foreground">
            From Concept to <span className="text-primary">Completion</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proven methodology ensures successful project delivery with predictable timelines, 
            transparent communication, and exceptional results.
          </p>
        </div>

        {/* Horizontal Progress Timeline */}
        <div className="mb-16">
          {/* Progress Bar */}
          <div className="relative mb-12">
            <div className="flex justify-between items-center">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary border-4 border-background flex items-center justify-center mb-3">
                    <span className="text-primary-foreground font-bold text-sm">{step.number}</span>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground text-center max-w-20">
                    {step.title.split(' ')[0]}
                  </span>
                </div>
              ))}
            </div>
            {/* Progress Line */}
            <div className="absolute top-6 left-6 right-6 h-1 bg-border -z-0">
              <div className="h-full bg-primary w-full"></div>
            </div>
          </div>
          
          {/* Step Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-secondary dark:bg-gray-800 border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-primary">{step.number}</div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium text-foreground bg-accent px-2 py-1 rounded">
                      {step.duration}
                    </span>
                  </div>
                  
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">Key Deliverables:</div>
                    <div className="space-y-1">
                      {step.deliverables.slice(0, 2).map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center text-xs">
                          <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{deliverable}</span>
                        </div>
                      ))}
                      {step.deliverables.length > 2 && (
                        <div className="text-xs text-primary font-medium">
                          +{step.deliverables.length - 2} more
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">98%</span>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Success Rate</h4>
            <p className="text-sm text-muted-foreground">Projects delivered on time and within budget</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">12</span>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Avg. Weeks</h4>
            <p className="text-sm text-muted-foreground">From concept to full implementation</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">500+</span>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Projects</h4>
            <p className="text-sm text-muted-foreground">Successfully delivered across industries</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-secondary dark:bg-gray-800 border border-border rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-foreground">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every successful automation project begins with understanding your unique needs. 
              Let's discuss how we can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-border text-foreground rounded-xl font-medium hover:bg-accent transition-colors">
                Download Process Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}