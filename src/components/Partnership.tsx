import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Partnership() {
  const benefits = [
    {
      title: "Proven Business Model",
      description: "Join a tested business framework with documented success in electrical automation markets"
    },
    {
      title: "Comprehensive Training",
      description: "Complete technical and business training programs to ensure your success from day one"
    },
    {
      title: "Protected Territory",
      description: "Exclusive geographic territories with growth potential in your local market"
    },
    {
      title: "Marketing Support",
      description: "Full marketing toolkit, brand guidelines, and ongoing promotional campaign support"
    },
    {
      title: "Technical Backing",
      description: "Direct access to our engineering team for complex projects and technical consultation"
    },
    {
      title: "Revenue Sharing",
      description: "Attractive commission structure with performance bonuses and growth incentives"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, rgba(107,114,128,0.2) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left Column - Why Partner with Us */}
            <div className="space-y-8">
              
              {/* Header */}
              <div>
                <div className="mb-6">
                  <span className="text-sm font-medium tracking-wide uppercase" style={{ color: '#FF5722' }}>
                    Franchise Opportunity
                  </span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-medium mb-6 leading-tight" style={{ color: '#1a1a1a' }}>
                  Have Your Franchise<br />
                  Under Manar
                </h2>
                
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#6b7280' }}>
                  Join the leading electrical automation and IoT solutions network. Build a profitable business 
                  with our proven systems, comprehensive support, and established market presence.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => {
                  return (
                    <div key={index} className="space-y-3">
                      <div>
                        <h4 className="font-medium mb-2" style={{ color: '#1a1a1a' }}>
                          {benefit.title}
                        </h4>
                        <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button 
                  className="px-8 py-4 font-medium transition-all duration-300 hover:scale-105 border"
                  style={{ 
                    backgroundColor: '#FF5722', 
                    color: 'white',
                    border: '1px solid #FF5722'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#FF5722';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF5722';
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  Start Your Franchise Journey
                </button>
              </div>
              
            </div>

            {/* Right Column - Image with CTA */}
            <div className="relative">
              
              {/* Main Image Container */}
              <div className="relative group">
                <div 
                  className="border p-8 transition-all duration-300"
                  style={{ 
                    backgroundColor: '#ffffff', 
                    border: '1px solid #e5e7eb'
                  }}
                >
                  {/* Image */}
                  <div className="relative mb-8">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1570402290298-143753dadf0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZWxlY3RyaWNhbCUyMHNob3dyb29tJTIwbGVkJTIwbGlnaHRzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTY2NTEwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Futuristic electrical showroom with LED lights and advanced technology displays representing franchise opportunities"
                      className="w-full h-80 object-cover"
                    />
                  </div>

                  {/* Content Overlay */}
                  <div className="space-y-6">
                    
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 py-6 border-t border-b" style={{ borderColor: '#e5e7eb' }}>
                      <div className="text-center">
                        <div className="text-2xl font-medium mb-1" style={{ color: '#1a1a1a' }}>50+</div>
                        <div className="text-xs uppercase tracking-wide" style={{ color: '#6b7280' }}>
                          Active Partners
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-medium mb-1" style={{ color: '#1a1a1a' }}>200+</div>
                        <div className="text-xs uppercase tracking-wide" style={{ color: '#6b7280' }}>
                          Successful Projects
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-medium mb-1" style={{ color: '#1a1a1a' }}>98%</div>
                        <div className="text-xs uppercase tracking-wide" style={{ color: '#6b7280' }}>
                          Success Rate
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                      <h3 className="text-xl font-medium mb-4" style={{ color: '#1a1a1a' }}>
                        Explore Our Partner Network
                      </h3>
                      <p className="text-sm mb-6 leading-relaxed" style={{ color: '#6b7280' }}>
                        Discover how our partners are transforming their markets with proven 
                        electrical automation solutions and ongoing support systems.
                      </p>
                      
                      {/* CTA Link */}
                      <div className="inline-flex items-center gap-2">
                        <a 
                          href="#" 
                          className="hover:text-primary transition-colors duration-200 font-medium"
                          style={{
                            borderBottom: '1px dotted rgba(26, 26, 26, 0.4)',
                            paddingBottom: '2px',
                            color: '#1a1a1a'
                          }}
                        >
                          See Current Partners
                        </a>
                        <ArrowRight className="w-4 h-4" style={{ color: '#1a1a1a' }} />
                      </div>
                    </div>

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