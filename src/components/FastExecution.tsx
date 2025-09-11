import { Card, CardContent } from "./ui/card";
import { Rocket, Gauge, Cog, CheckCircle } from "lucide-react";

export function FastExecution() {
  const steps = [
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Get up and running in days, not months, with our proven implementation methodology."
    },
    {
      icon: Gauge,
      title: "Real-time Optimization",
      description: "Continuous performance monitoring and automatic optimization keep your systems running at peak efficiency."
    },
    {
      icon: Cog,
      title: "Seamless Integration",
      description: "Connect with existing systems without disruption using our flexible API and connector framework."
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Delivered over 500 successful projects with measurable ROI and operational improvements."
    }
  ];

  return (
    <section style={{ backgroundColor: '#1B0D2B' }} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 opacity-5">
          <div className="grid grid-cols-6 gap-3 w-full h-full">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-3 h-3 bg-white rounded-sm"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Deploy faster.{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Operate smarter.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our streamlined approach gets you from concept to production faster than traditional methods, 
            with better results and lower risk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5 days</div>
              <div className="text-sm text-gray-400">Average Setup Time</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-gray-400">Expert Support</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-gray-400">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}