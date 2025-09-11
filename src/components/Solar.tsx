import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, Sun, Battery, Zap, Leaf, TrendingUp, Shield, Users } from "lucide-react";
import microclimateImage from "figma:asset/7b2ce2394ca32fc5a56ca7d32ecc4f5fc5d0cc37.png";
import farmCapableImage from "figma:asset/082f757dd4a1fb260f527800bff50c8bf1db7c61.png";

export function Solar() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary mb-6">
              <Leaf className="w-4 h-4" />
              <span>Sustainable Energy Solutions</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Solar Energy
              <span className="text-primary"> Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge solar technology and energy storage solutions. 
              Harness the power of the sun for sustainable growth and energy independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                Get Solar Quote
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-accent px-8 py-3">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Microclimate Creation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden border border-border">
              <ImageWithFallback 
                src={microclimateImage}
                alt="Microclimate creation and dual use benefits"
                className="w-full h-auto"
              />
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary mb-4">
                <span>Dual Use Technology</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Reap the benefits of dual use
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Yes, you can have both agriculture and solar on your land! Here are a few of the benefits below:
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Maintain existing agricultural activities</h3>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Introduce new pollinators to your land</h3>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Increase the potential profitability of your land</h3>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Join the cutting edge of solar development</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Capability Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Your farm is capable of so much more
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Solar panels provide partial shade to the crops below, creating a microclimate that potentially extends growing seasons.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Reduce reliance on fossil fuels and lower greenhouse gas emissions.</h3>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-600 flex items-center justify-center">
                    <Sun className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Install solar panels to earn revenue from solar energy and reduce energy costs.</h3>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Benefit from government incentives, grants, and tax credits for renewable energy projects.</h3>
                  </div>
                </div>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Learn More
              </Button>
            </div>
            
            <div className="lg:order-1">
              <div className="relative overflow-hidden border border-border">
                <ImageWithFallback 
                  src={farmCapableImage}
                  alt="Farm capabilities with solar integration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Storage Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative overflow-hidden border border-border">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1725308659447-bf1b10f6635a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGFncmljdWx0dXJhbCUyMGZpZWxkfGVufDF8fHx8MTc1NzE2NDc5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Solar field with energy storage"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Energy Storage & Grid Integration
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We are working to help communities make their energy profile more resilient and reliable. 
                Partner with us to develop energy storage and contribute to a clean energy future.
              </p>
              
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mb-8">
                Learn More
              </Button>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-primary font-semibold mb-1">Smart Grid Integration ›</h3>
                    <p className="text-muted-foreground">
                      Learn more about what energy storage is and how it integrates with smart grid systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-primary font-semibold mb-1">Community Impact ›</h3>
                    <p className="text-muted-foreground">
                      Learn about the process of adding energy storage to your community infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Solar with Manar.ai
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive solar solutions backed by cutting-edge IoT technology and automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-card border border-border">
              <div className="w-16 h-16 bg-primary/10 border border-primary/20 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">Cost Savings</h3>
              <p className="text-muted-foreground">Reduce energy costs by up to 90% with our intelligent solar systems</p>
            </div>
            
            <div className="text-center p-6 bg-card border border-border">
              <div className="w-16 h-16 bg-primary/10 border border-primary/20 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">Reliability</h3>
              <p className="text-muted-foreground">24/7 monitoring and predictive maintenance ensure optimal performance</p>
            </div>
            
            <div className="text-center p-6 bg-card border border-border">
              <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">Reduce carbon footprint while maintaining operational efficiency</p>
            </div>
            
            <div className="text-center p-6 bg-card border border-border">
              <div className="w-16 h-16 bg-primary/10 border border-primary/20 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">Dedicated team of solar and automation experts at your service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get started with a free consultation and discover how solar energy can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="border-border text-foreground hover:bg-accent px-8 py-3">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}