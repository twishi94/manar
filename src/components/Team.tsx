import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Linkedin, Mail, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Team() {
  const teamMembers = [
    {
      name: "Dr. Ahmad Manar",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400",
      bio: "20+ years in electrical engineering and automation. Former Tesla senior engineer with expertise in smart grid technology.",
      specialties: ["Smart Grid Systems", "Renewable Energy", "Industrial IoT"],
      education: "PhD Electrical Engineering, MIT"
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6c9c7e5?auto=format&fit=crop&w=400&h=400",
      bio: "15+ years in software architecture and AI systems. Previously led automation teams at Google and Microsoft.",
      specialties: ["AI/ML Systems", "Cloud Architecture", "Cybersecurity"],
      education: "MS Computer Science, Stanford"
    },
    {
      name: "Michael Rodriguez",
      role: "Director of Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400",
      bio: "12+ years in industrial automation and robotics. Expert in manufacturing process optimization and predictive maintenance.",
      specialties: ["Industrial Automation", "Robotics", "Process Control"],
      education: "MS Mechanical Engineering, UC Berkeley"
    },
    {
      name: "Lisa Thompson",
      role: "VP of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400",
      bio: "10+ years in project management and business operations. Specializes in large-scale automation deployments.",
      specialties: ["Project Management", "Quality Assurance", "Client Relations"],
      education: "MBA Operations Management, Wharton"
    }
  ];

  const stats = [
    { value: "50+", label: "Team Members" },
    { value: "15", label: "Average Years Experience" },
    { value: "25", label: "Industry Certifications" },
    { value: "8", label: "PhD Engineers" }
  ];

  return (
    <section id="team" className="py-20 lg:py-28 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20 mb-6">
            Our Team
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-gray-900">
            Meet the <span className="text-primary">Experts</span> Behind Innovation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our diverse team of engineers, researchers, and industry experts brings decades 
            of combined experience to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <button className="p-2 bg-white/90 text-gray-700 rounded-lg hover:bg-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-white/90 text-gray-700 rounded-lg hover:bg-white transition-colors">
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">Education</span>
                      </div>
                      <div className="text-sm text-gray-600">{member.education}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Specialties</div>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, specialtyIndex) => (
                          <span key={specialtyIndex} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-900">
              World-Class <span className="text-primary">Expertise</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team combines academic excellence with real-world experience 
              to deliver innovative automation solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Core Values</h4>
              <div className="space-y-4">
                {[
                  { title: "Innovation First", desc: "Constantly pushing the boundaries of what's possible" },
                  { title: "Client Success", desc: "Your success is our primary measure of achievement" },
                  { title: "Technical Excellence", desc: "Uncompromising commitment to quality and precision" }
                ].map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-gray-900">{value.title}</div>
                      <div className="text-sm text-gray-600">{value.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Join Our Team</h4>
              <p className="text-gray-600 mb-6">
                We're always looking for talented engineers and innovators who share our passion 
                for automation and technology. Explore opportunities to work on cutting-edge projects 
                that shape the future of industry.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}