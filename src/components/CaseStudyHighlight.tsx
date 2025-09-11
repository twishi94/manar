import { Button } from "./ui/button";
import { ArrowRight, TrendingDown, Clock, DollarSign } from "lucide-react";

export function CaseStudyHighlight() {
  return (
    <section style={{ backgroundColor: '#1B0D2B' }} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-primary font-medium text-sm">CASE STUDY</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Reduced downtime by{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  42%
                </span>{" "}
                in energy sector
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                A leading energy company transformed their operations with our predictive maintenance 
                platform, preventing critical failures and saving millions in unplanned downtime.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <TrendingDown className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">42%</div>
                  <div className="text-sm text-gray-400">Less Downtime</div>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">15min</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
                <div className="text-center">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">$2.4M</div>
                  <div className="text-sm text-gray-400">Annual Savings</div>
                </div>
              </div>

              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-semibold rounded-lg flex items-center gap-2"
              >
                Read Full Case Study
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-white font-semibold">System Health Overview</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm">Optimal</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Turbine Efficiency</span>
                      <span className="text-white font-semibold">98.2%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '98.2%'}}></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Predictive Accuracy</span>
                      <span className="text-white font-semibold">96.7%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{width: '96.7%'}}></div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-sm text-gray-400 mb-2">Next Maintenance Window</div>
                    <div className="text-white font-semibold">March 15, 2024 - 2:00 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}