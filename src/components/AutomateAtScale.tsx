import { useState } from 'react';
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  Eye, 
  Activity,
  Settings,
  ArrowRight,
  BarChart3,
  Wifi
} from 'lucide-react';
import { Button } from './ui/button';

export function AutomateAtScale() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden py-20 bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-background"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 text-sm font-medium mb-6">
              COMPREHENSIVE PLATFORM
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Everything you need to
              <br />
              <span className="text-primary">automate at scale.</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our comprehensive platform provides all the tools and capabilities needed to transform your industrial operations with enterprise-grade reliability.
            </p>
          </div>

          {/* Bento Grid Layout matching the reference image */}
          <div className="grid grid-cols-1 lg:grid-cols-3 mb-12">
            
            {/* Top Row - 3 equal cards */}
            <div 
              className="bg-card border border-border border-r-0 lg:border-r border-b-0 p-8 transition-all duration-300 hover:border-primary/20"
              onMouseEnter={() => setHoveredCard('predictive')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-6">
                <div className="p-3 bg-primary/10 text-primary inline-block mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Predictive Maintenance
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  AI-powered algorithms predict equipment failures before they happen, reducing unplanned downtime by up to 50%.
                </p>
              </div>
              
              {/* Visual indicator */}
              <div className="h-16 bg-gradient-to-r from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="flex space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-8 bg-primary/30 transition-all duration-300 ${
                        hoveredCard === 'predictive' ? 'bg-primary/60 h-10' : ''
                      }`}
                      style={{
                        animationDelay: `${i * 100}ms`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div 
              className="bg-card border border-border border-r-0 lg:border-r border-b-0 p-8 transition-all duration-300 hover:border-primary/20"
              onMouseEnter={() => setHoveredCard('security')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-6">
                <div className="p-3 bg-primary/10 text-primary inline-block mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  IoT Security
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Enterprise-grade security with end-to-end encryption, zero-trust architecture, and continuous threat monitoring.
                </p>
              </div>
              
              {/* Security indicators */}
              <div className="h-16 bg-gradient-to-r from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="relative">
                  <Shield className={`w-8 h-8 text-primary/40 transition-all duration-300 ${
                    hoveredCard === 'security' ? 'text-primary scale-110' : ''
                  }`} />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            <div 
              className="bg-card border border-border border-b-0 p-8 transition-all duration-300 hover:border-primary/20"
              onMouseEnter={() => setHoveredCard('energy')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-6">
                <div className="p-3 bg-primary/10 text-primary inline-block mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Smart Energy Management
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Optimize energy consumption with intelligent load balancing.
                </p>
              </div>
              
              {/* Energy visualization */}
              <div className="h-16 bg-gradient-to-r from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <Zap className={`w-6 h-6 text-primary/40 transition-all duration-300 ${
                    hoveredCard === 'energy' ? 'text-yellow-500 animate-pulse' : ''
                  }`} />
                  <div className="text-xs text-muted-foreground">30% Savings</div>
                </div>
              </div>
            </div>

          </div>

          {/* Middle Row - 2 cards (larger left, smaller right) */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            
            {/* End-to-End Monitoring - spans 2 columns */}
            <div 
              className="lg:col-span-2 bg-card border border-border border-r-0 lg:border-r border-b-0 p-8 transition-all duration-300 hover:border-primary/20"
              onMouseEnter={() => setHoveredCard('monitoring')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="p-3 bg-primary/10 text-primary inline-block mb-4">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    End-to-End Monitoring
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    Complete visibility across your entire infrastructure with real-time monitoring and intelligent alerting.
                  </p>
                </div>
              </div>
              
              {/* Monitoring dashboard visualization */}
              <div className="h-32 bg-gradient-to-br from-primary/5 to-primary/10 p-4">
                <div className="grid grid-cols-4 gap-3 h-full">
                  <div className="bg-card border border-border p-2">
                    <div className="text-xs text-muted-foreground mb-1">System Status</div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                      <span className="text-xs font-medium">Online</span>
                    </div>
                  </div>
                  <div className="bg-card border border-border p-2">
                    <div className="text-xs text-muted-foreground mb-1">Performance</div>
                    <div className="text-sm font-semibold text-primary">97.8%</div>
                  </div>
                  <div className="bg-card border border-border p-2">
                    <div className="text-xs text-muted-foreground mb-1">Alerts</div>
                    <div className="text-sm font-semibold">2 Active</div>
                  </div>
                  <div className="bg-card border border-border p-2">
                    <div className="text-xs text-muted-foreground mb-1">Devices</div>
                    <div className="text-sm font-semibold text-green-600">1,247</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Guarantee */}
            <div 
              className="bg-card border border-border border-b-0 p-8 transition-all duration-300 hover:border-primary/20"
              onMouseEnter={() => setHoveredCard('sla')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-6">
                <div className="p-3 bg-primary/10 text-primary inline-block mb-4">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  99.9% SLA Guarantee
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Mission-critical reliability with 24/7 monitoring and support.
                </p>
              </div>
              
              {/* SLA visualization */}
              <div className="h-16 bg-gradient-to-r from-green-100 to-green-50 dark:from-green-900/20 dark:to-green-800/10 flex flex-col items-center justify-center">
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <div className="text-xs text-green-700 dark:text-green-400">Uptime Guaranteed</div>
              </div>
            </div>

          </div>

          {/* Bottom Row - Full width System Integration card */}
          <div 
            className="bg-card border border-border p-8 transition-all duration-300 hover:border-primary/20"
            onMouseEnter={() => setHoveredCard('integration')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="p-3 bg-primary/10 text-primary inline-block mb-4">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  System Integration
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  Seamless integration with existing systems using flexible APIs and connector frameworks.
                </p>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 flex items-center gap-2">
                Explore Integrations
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Integration flow visualization */}
            <div className="h-24 bg-gradient-to-r from-primary/5 to-primary/10 flex items-center justify-center">
              <div className="flex items-center space-x-8">
                {['ERP', 'SCADA', 'MES', 'IoT', 'Cloud'].map((system, i) => (
                  <div key={system} className="flex items-center">
                    <div className="px-4 py-2 bg-card border border-border text-sm font-medium">
                      {system}
                    </div>
                    {i < 4 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-medium flex items-center gap-2 mx-auto">
              Start Your Automation Journey
              <ArrowRight className="w-4 h-4" />
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Talk to our automation experts about your specific requirements
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-primary/5 transform rotate-45"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/5 transform -rotate-12"></div>
    </section>
  );
}