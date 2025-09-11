import exampleImage from 'figma:asset/4a522b6cd98e0c85df8643ec60c0f121400fdb99.png';
import { IsometricBuilding } from './icons/utility-icons';
import { Lightning } from './icons/Lightning';
import { IsometricSettings } from './icons/service-icons';
import { Button } from './ui/button';

export function Career() {
  const benefits = [
    {
      icon: Lightning,
      title: "Smart Energy Management",
      description: "Lead innovative projects in energy optimization, smart grid solutions, and sustainable automation systems"
    },
    {
      icon: IsometricSettings,
      title: "Advanced Technology",
      description: "Work with cutting-edge electrical automation, IoT sensors, and industrial control systems"
    },
    {
      icon: IsometricBuilding,
      title: "Career Growth",
      description: "Clear progression paths and leadership opportunities in the expanding electrical automation industry"
    }
  ];

  const positions = [
    {
      title: "Smart Energy Systems Engineer",
      type: "Full-time",
      location: "On-site",
      description: "Design and optimize smart energy management systems, integrating IoT sensors with electrical automation for maximum efficiency"
    },
    {
      title: "IoT Automation Specialist",
      type: "Full-time", 
      location: "Hybrid",
      description: "Develop intelligent connectivity solutions for energy monitoring, predictive maintenance, and automated control systems"
    },
    {
      title: "Energy Solutions Technician",
      type: "Full-time",
      location: "On-site",
      description: "Install, configure, and maintain smart energy management systems including solar integration and grid automation"
    },
    {
      title: "Automation Project Manager",
      type: "Full-time",
      location: "Hybrid",
      description: "Lead complex electrical automation and smart energy projects, coordinating cross-functional technical teams to deliver innovative solutions"
    }
  ];

  return (
    <section className="py-20 bg-[#201515] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#36342e]"></div>
        <div className="absolute top-20 right-16 w-24 h-24 border border-[#36342e]"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-[#36342e]"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-[#36342e]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(54, 52, 46, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(54, 52, 46, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#eceae3] mb-6">
            Engineer the future of 
            <span className="text-[#FF5722]"> smart energy</span>
          </h2>
          <p className="text-xl text-[#eceae3]/80 max-w-3xl mx-auto leading-relaxed">
            Join our team of electrical automation experts creating intelligent energy management systems that revolutionize how industries consume and optimize power.
          </p>
        </div>

        {/* Hero Visual */}
        <div className="flex justify-center mb-20">
          <div className="relative">
            <img 
              src={exampleImage} 
              alt="Career opportunities at Manar.ai"
              className="w-full max-w-4xl h-auto"
            />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-[#2a2520] border border-[#36342e] p-8 hover:bg-[#2f2925] transition-colors duration-300"
            >
              <div className="flex justify-center mb-6">
                {benefit.icon === Lightning ? (
                  <Lightning className="w-16 h-16" />
                ) : (
                  <benefit.icon className="text-[#FF5722] w-16 h-16" />
                )}
              </div>
              <h3 className="text-xl font-bold text-[#eceae3] mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-[#eceae3]/70 text-center leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#eceae3] text-center mb-12">
            Open Positions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {positions.map((position, index) => (
              <div 
                key={index}
                className="bg-[#2a2520] border border-[#36342e] p-6 hover:bg-[#2f2925] transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-[#eceae3] flex-1 mr-4">
                    {position.title}
                  </h4>
                  <div className="flex flex-col items-end">
                    <span className="text-[#FF5722] text-sm font-medium mb-1">
                      {position.type}
                    </span>
                    <span className="text-[#eceae3]/60 text-sm">
                      {position.location}
                    </span>
                  </div>
                </div>
                <p className="text-[#eceae3]/70 mb-4 leading-relaxed">
                  {position.description}
                </p>
                <Button 
                  className="bg-[#FF5722] text-white hover:bg-[#E64A19] transition-colors duration-200"
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-[#2a2520] border border-[#36342e] p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#eceae3] mb-4">
              Don't see the perfect role?
            </h3>
            <p className="text-[#eceae3]/80 mb-6 leading-relaxed">
              We're always looking for talented individuals passionate about automation and IoT. 
              Send us your resume and tell us how you'd like to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#FF5722] text-white hover:bg-[#E64A19] transition-colors duration-200"
              >
                Send Resume
              </Button>
              <Button 
                variant="outline"
                className="border-[#36342e] text-[#eceae3] hover:bg-[#36342e] transition-colors duration-200"
              >
                View Company Culture
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}