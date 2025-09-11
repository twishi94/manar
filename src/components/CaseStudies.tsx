import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: 'Smart Living Co.',
      title: 'Home Automation Cuts Energy Use 40%',
      description: 'Smart Living Co. deployed our IoT home automation platform, achieving major energy savings and superior user experience.',
      videoId: 'Y2VF8tmLFHw', // Smart home automation technology
      theme: 'orange'
    },
    {
      id: 2,
      company: 'SolarTech Industries',
      title: 'Solar Farm Output Up 35% with AI',
      description: 'SolarTech boosted energy production using our predictive analytics platform for optimized maintenance and operations.',
      videoId: 'T8uxdXOgTyM', // Solar farm automation technology
      theme: 'green'
    },
    {
      id: 3,
      company: 'MetroTower Complex',
      title: 'Smart BMS Optimizes 50-Floor Building',
      description: 'MetroTower deployed our building management system to control HVAC, security, and energy across premium commercial space.',
      videoId: 'k4EaMCHENx4', // Smart building management systems
      theme: 'purple'
    },
    {
      id: 4,
      company: 'Precision Manufacturing',
      title: 'Industrial IoT Boosts Factory Efficiency 45%',
      description: 'Precision Manufacturing achieved real-time monitoring and predictive maintenance with our Industrial IoT platform.',
      videoId: 'ScMzIvxBSi4', // Industrial IoT automation
      theme: 'blue'
    },
    {
      id: 5,
      company: 'Corporate Center',
      title: 'Smart Office Increases Space Efficiency 60%',
      description: 'Corporate Center created an adaptive, connected workspace that responds to employee needs and business demands.',
      videoId: 'kJQP7kiw5Fk', // Smart office workplace technology
      theme: 'teal'
    }
  ];

  const getThemeColors = () => {
    return {
      bg: 'bg-card',
      border: 'border-border',
      text: 'text-foreground',
      button: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border'
    };
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, caseStudies.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, caseStudies.length - 2)) % Math.max(1, caseStudies.length - 2));
  };

  const visibleCards = 3;
  const maxSlides = Math.max(0, caseStudies.length - visibleCards);

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#201515' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, rgba(107,114,128,0.3) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
            
            {/* Left Side - Title and Description */}
            <div className="lg:max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-medium mb-6 leading-tight" style={{ color: '#eceae3' }}>
                Case Studies
              </h2>
              <p className="text-lg leading-relaxed max-w-lg mb-6" style={{ color: '#c5c0b2' }}>
                Real results from industry leaders who trust us to automate and scale their operations.
              </p>
              
              {/* CTA Text Link */}
              <div className="inline-flex items-center gap-2">
                <a 
                  href="#" 
                  className="hover:text-primary transition-colors duration-200 font-medium"
                  style={{
                    borderBottom: '1px dotted rgba(255, 255, 255, 0.4)',
                    paddingBottom: '2px',
                    color: '#eceae3'
                  }}
                >
                  View All Cases
                </a>
                <ArrowRight className="w-4 h-4" style={{ color: '#eceae3' }} />
              </div>
            </div>

            {/* Right Side - Navigation Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="w-12 h-12 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                style={{ 
                  border: '1px solid #36342e',
                  backgroundColor: '#201515',
                  color: '#eceae3'
                }}
                onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = 'rgba(236, 234, 227, 0.05)')}
                onMouseLeave={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '#201515')}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide >= maxSlides}
                className="w-12 h-12 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                style={{ 
                  border: '1px solid #36342e',
                  backgroundColor: '#201515',
                  color: '#eceae3'
                }}
                onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = 'rgba(236, 234, 227, 0.05)')}
                onMouseLeave={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '#201515')}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`
              }}
            >
              {caseStudies.map((study, index) => {
                const theme = getThemeColors();
                return (
                  <div
                    key={study.id}
                    className="flex-none w-full sm:w-1/2 lg:w-1/3"
                  >
                    <div 
                      className="border h-full overflow-hidden transition-all duration-300 group cursor-pointer"
                      style={{ 
                        backgroundColor: '#201515', 
                        border: '1px solid #36342e',
                        transition: 'background-color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(236, 234, 227, 0.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#201515'}
                    >
                      
                      {/* YouTube Video */}
                      <div className="relative h-48 overflow-hidden group">
                        <iframe
                          src={`https://www.youtube.com/embed/${study.videoId}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1&color=white&theme=dark&fs=1&enablejsapi=1`}
                          title={`${study.company} case study video`}
                          className="w-full h-full border-0 transition-transform duration-300 group-hover:scale-105"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{ backgroundColor: '#000' }}
                        />
                        {/* Video overlay for styling */}
                        <div 
                          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                          style={{ backgroundColor: '#FF5722' }}
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        
                        {/* Company Logo/Name */}
                        <div className="mb-4">
                          <div 
                            className="inline-block px-3 py-1 text-sm font-medium border"
                            style={{ 
                              borderColor: '#36342e',
                              backgroundColor: 'rgba(236, 234, 227, 0.1)',
                              color: 'rgba(236, 234, 227, 0.9)'
                            }}
                          >
                            {study.company}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-medium mb-2 leading-tight text-lg group-hover:text-primary transition-colors duration-300" style={{ color: '#eceae3' }}>
                          {study.title}
                        </h3>

                        {/* Description */}
                        <p className="mb-6 leading-relaxed text-sm" style={{ color: 'rgba(236, 234, 227, 0.6)' }}>
                          {study.description}
                        </p>



                        {/* CTA Text Link */}
                        <div className="inline-flex items-center gap-2">
                          <a 
                            href="#" 
                            className="hover:text-primary transition-colors duration-200 font-medium text-sm"
                            style={{
                              borderBottom: '1px dotted rgba(255, 255, 255, 0.4)',
                              paddingBottom: '2px',
                              color: '#eceae3'
                            }}
                          >
                            Read More
                          </a>
                          <ArrowRight className="w-3 h-3" style={{ color: '#eceae3' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="w-2 h-2 transition-all duration-200"
                style={{
                  backgroundColor: currentSlide === index 
                    ? '#eceae3' 
                    : 'rgba(197, 192, 178, 0.3)'
                }}
                onMouseEnter={(e) => {
                  if (currentSlide !== index) {
                    e.currentTarget.style.backgroundColor = 'rgba(197, 192, 178, 0.6)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentSlide !== index) {
                    e.currentTarget.style.backgroundColor = 'rgba(197, 192, 178, 0.3)';
                  }
                }}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}