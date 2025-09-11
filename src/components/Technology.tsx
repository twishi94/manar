import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, Building2, TrendingUp, Award, Handshake, Target, MapPin, DollarSign } from "lucide-react";
import franchiseImage from 'figma:asset/a48d63e921d2b76bc6a83250f707850642cd3ca4.png';

export function FranchisePartnership() {
  const opportunityTypes = [
    {
      title: "Regional Franchise",
      icon: <MapPin className="w-6 h-6" />,
      description: "Exclusive territorial rights with comprehensive support",
      benefits: ["Exclusive Territory", "Brand Recognition", "Marketing Support", "Training Programs", "Technical Backup", "Growth Potential"]
    },
    {
      title: "Technology Partner",
      icon: <Handshake className="w-6 h-6" />,
      description: "Collaborate on joint solutions and market expansion",
      benefits: ["Co-Development", "Shared Resources", "Market Access", "Innovation Labs", "Joint Marketing", "Revenue Sharing"]
    },
    {
      title: "Distribution Partner",
      icon: <Building2 className="w-6 h-6" />,
      description: "Authorized reseller with competitive margins",
      benefits: ["Product Portfolio", "Sales Training", "Lead Generation", "Technical Support", "Marketing Materials", "Volume Discounts"]
    },
    {
      title: "Investment Opportunity",
      icon: <DollarSign className="w-6 h-6" />,
      description: "Strategic investment in growing automation market",
      benefits: ["High ROI Potential", "Market Leadership", "Scalable Business", "Proven Model", "Expert Team", "Growth Strategy"]
    },
    {
      title: "System Integrator",
      icon: <Target className="w-6 h-6" />,
      description: "Certified integration partner for large projects",
      benefits: ["Certification Program", "Project Pipeline", "Technical Training", "Implementation Support", "Quality Assurance", "Client Network"]
    },
    {
      title: "Channel Partner",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Multi-tier partnership with growth incentives",
      benefits: ["Tiered Benefits", "Performance Rewards", "Market Development", "Co-Marketing", "Business Development", "Strategic Support"]
    }
  ];

  const partnershipBenefits = [
    "Comprehensive Training Programs",
    "Dedicated Account Management",
    "Marketing & Sales Support",
    "Technical Documentation Access",
    "Regular Business Reviews",
    "Growth Incentive Programs"
  ];

  return (
    <section id="franchise" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20 mb-6">
            Partnership First
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-gray-900">
            Franchise & <span className="text-primary">Partnership</span> Opportunities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join the automation revolution with Manar.ai. Explore lucrative franchise and partnership 
            opportunities in the rapidly growing electrical automation and IoT market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {opportunityTypes.map((opportunity, index) => (
            <Card key={index} className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 text-primary">
                    {opportunity.icon}
                  </div>
                  <CardTitle className="text-lg text-gray-900">{opportunity.title}</CardTitle>
                </div>
                <p className="text-sm text-gray-600">{opportunity.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {opportunity.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary mr-3"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white border border-gray-200 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-gray-900">
                Partnership <span className="text-primary">Benefits</span>
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Advanced automation solutions leveraging AI, IoT, and cloud technologies to deliver 
                unprecedented efficiency and reliability for tomorrow's smart infrastructure.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary"></div>
                  <span className="text-gray-700">AI-powered predictive maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary"></div>
                  <span className="text-gray-700">Real-time system monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary"></div>
                  <span className="text-gray-700">Cloud-based data analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary"></div>
                  <span className="text-gray-700">Mobile app integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary"></div>
                  <span className="text-gray-700">Energy optimization algorithms</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary"></div>
                  <span className="text-gray-700">Cybersecurity protocols</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={franchiseImage}
                alt="Advanced automation technology for tomorrow's industry"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}