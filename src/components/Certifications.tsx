import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Award, Shield, CheckCircle, Trophy, Star, FileCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Certifications() {
  const certifications = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "ISO 27001:2013",
      category: "Information Security",
      description: "International standard for information security management systems",
      issued: "2023",
      validUntil: "2026"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "ISO 9001:2015",
      category: "Quality Management",
      description: "International standard for quality management systems",
      issued: "2022",
      validUntil: "2025"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SOC 2 Type II",
      category: "Security Compliance",
      description: "Security, availability, and confidentiality controls audit",
      issued: "2024",
      validUntil: "2025"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "IEEE Standards",
      category: "Technical Standards",
      description: "Compliance with IEEE electrical and automation standards",
      issued: "2024",
      validUntil: "Ongoing"
    }
  ];

  const awards = [
    {
      year: "2024",
      title: "Innovation Excellence Award",
      organization: "National Automation Society",
      category: "Smart Manufacturing Solutions",
      description: "Recognition for breakthrough predictive maintenance AI system"
    },
    {
      year: "2023",
      title: "Best IoT Solution",
      organization: "Tech Innovation Awards",
      category: "Industrial Internet of Things",
      description: "Outstanding achievement in large-scale IoT deployment"
    },
    {
      year: "2023",
      title: "Sustainability Leader",
      organization: "Green Technology Council",
      category: "Energy Efficiency",
      description: "Excellence in energy optimization automation solutions"
    },
    {
      year: "2022",
      title: "Partner of the Year",
      organization: "Amazon Web Services",
      category: "IoT Solutions",
      description: "Top-performing AWS partner in industrial IoT implementations"
    }
  ];

  const partnerships = [
    {
      name: "Amazon Web Services",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=200&h=100",
      level: "Premier Partner",
      specialization: "IoT & Cloud Solutions"
    },
    {
      name: "Microsoft Azure",
      logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=200&h=100",
      level: "Gold Partner",
      specialization: "AI & Machine Learning"
    },
    {
      name: "Siemens",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&h=100",
      level: "Solution Partner",
      specialization: "Industrial Automation"
    },
    {
      name: "Schneider Electric",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=200&h=100",
      level: "Technology Partner",
      specialization: "Energy Management"
    }
  ];

  return (
    <section id="certifications" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20 mb-6">
            Certifications & Awards
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-gray-900">
            Recognized for <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality, security, and innovation is validated by industry-leading 
            certifications and recognition from prestigious organizations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900">Industry Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-xl bg-gray-100 text-gray-700">
                      {cert.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">
                    {cert.title}
                  </h4>
                  
                  <div className="text-sm text-primary font-medium mb-3">
                    {cert.category}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-2 text-xs text-gray-500">
                    <div>Issued: {cert.issued}</div>
                    <div>Valid Until: {cert.validUntil}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900">Industry Recognition</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl font-bold text-gray-900">{award.year}</div>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                          {award.category}
                        </Badge>
                      </div>
                      
                      <h4 className="text-xl font-semibold mb-2 text-gray-900">
                        {award.title}
                      </h4>
                      
                      <div className="text-primary font-medium mb-3">
                        {award.organization}
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900">Strategic Partnerships</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <Card key={index} className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <ImageWithFallback
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-16 object-contain rounded"
                    />
                  </div>
                  
                  <h4 className="font-semibold mb-2 text-gray-900">
                    {partner.name}
                  </h4>
                  
                  <div className="text-sm text-primary font-medium mb-2">
                    {partner.level}
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    {partner.specialization}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Warranty & Support */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-gray-900">
                <span className="text-primary">5-Year Warranty</span> & Lifetime Support
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We stand behind our work with industry-leading warranties and comprehensive support. 
                Our commitment to your success doesn't end with installation.
              </p>
              
              <div className="space-y-4">
                {[
                  "5-year comprehensive hardware warranty",
                  "24/7 technical support and monitoring",
                  "Free software updates and security patches",
                  "On-site service within 24 hours",
                  "Preventive maintenance programs",
                  "Performance optimization reviews"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Service Uptime SLA</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-900 mb-2">&lt;4hrs</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-600">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}