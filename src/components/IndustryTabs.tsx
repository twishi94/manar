import { useState } from "react";
import { Factory, Building2, Zap, Car, Heart, Cpu, Leaf, Shield } from "lucide-react";

export function IndustryTabs() {
  const [activeIndustry, setActiveIndustry] = useState("manufacturing");

  const industries = [
    {
      id: "manufacturing",
      name: "Manufacturing",
      icon: <Factory className="w-4 h-4" />
    },
    {
      id: "buildings",
      name: "Smart Buildings",
      icon: <Building2 className="w-4 h-4" />
    },
    {
      id: "energy",
      name: "Energy & Utilities",
      icon: <Zap className="w-4 h-4" />
    },
    {
      id: "automotive",
      name: "Automotive",
      icon: <Car className="w-4 h-4" />
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: <Heart className="w-4 h-4" />
    },
    {
      id: "datacenters",
      name: "Data Centers",
      icon: <Cpu className="w-4 h-4" />
    },
    {
      id: "agriculture",
      name: "Agriculture",
      icon: <Leaf className="w-4 h-4" />
    },
    {
      id: "security",
      name: "Security",
      icon: <Shield className="w-4 h-4" />
    }
  ];

  return (
    <section className="bg-secondary dark:bg-gray-800 border-t border-border relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Industry Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our specialized automation solutions tailored for different industries
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex overflow-x-auto scrollbar-hide">
              <div className="flex min-w-max border border-border bg-background dark:bg-card">
                {industries.map((industry, index) => (
                  <button
                    key={industry.id}
                    onClick={() => setActiveIndustry(industry.id)}
                    className={`relative flex items-center gap-2 px-6 py-4 text-sm whitespace-nowrap border-r border-border last:border-r-0 transition-all duration-200 hover:bg-accent ${
                      activeIndustry === industry.id
                        ? 'font-semibold text-foreground bg-accent'
                        : 'font-medium text-muted-foreground'
                    }`}
                  >
                    {industry.icon}
                    <span>{industry.name}</span>
                    
                    {/* Orange bottom border for active tab */}
                    {activeIndustry === industry.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
                    )}
                    
                    {/* Badge for first tab when active */}
                    {index === 0 && activeIndustry === industry.id && (
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                        500+ projects
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Square Image Sticking to Tabs */}
      <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-64 h-64 bg-background dark:bg-card border border-border shadow-2xl overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1714322148068-923f9f9bfc1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwSW9UJTIwZGFzaGJvYXJkJTIwYXV0b21hdGlvbiUyMGNvbnRyb2wlMjBwYW5lbHxlbnwxfHx8fDE3NTU1NDI4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Industrial IoT Dashboard and Automation Control Panel"
            className="w-full h-full object-cover"
          />
          
          {/* Overlay with industry-specific info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
            <div className="text-white">
              <div className="text-sm font-semibold mb-1">
                {industries.find(ind => ind.id === activeIndustry)?.name}
              </div>
              <div className="text-xs opacity-90">
                Smart automation solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}