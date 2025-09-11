import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { IndustryImageScene } from "./IndustryImageScene";

export function Hero({
  activeIndustry,
  setActiveIndustry,
}: {
  activeIndustry?: string;
  setActiveIndustry?: (industry: string) => void;
}) {
  const industries = [
    {
      id: "home-automation",
      name: "Home Automation",
    },
    {
      id: "office-automation",
      name: "Office Automation",
    },
    {
      id: "hospital-automation",
      name: "Hospital Automation",
    },
    {
      id: "industrial-automation",
      name: "Industrial Automation",
    },
    {
      id: "agriculture",
      name: "Agricultural Automation",
    },
    {
      id: "buildings",
      name: "Building Automation",
    },
    {
      id: "energy",
      name: "Energy Efficiency",
    },
    {
      id: "security",
      name: "Security",
    },
  ];

  return (
    <section className="bg-background dark:bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-40 pb-24 lg:pb-40 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground tracking-tight leading-tight">
                Transform your space with
                <span className="text-primary block">
                  smart automation
                </span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                IoT and automation solutions that drive efficiency, reduce costs and deliver
                predictive insights across your entire infrastructure.
              </p>
            </div>

            {/* CTAs with no border radius */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-base font-medium">
                Explore Solutions
              </Button>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-accent px-8 py-4 text-base font-medium"
              >
                Get Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Tabs Navigation - No border radius */}
      {activeIndustry && setActiveIndustry && (
        <div className="bg-background dark:bg-background border-t border-border relative">
          {/* Vertical lines extending to navigation */}
          <div className="absolute top-0 bottom-0 left-14 w-px bg-border"></div>
          <div className="absolute top-0 bottom-0 right-14 w-px bg-border"></div>

          {/* Extended lines going up */}
          <div className="absolute -top-96 bottom-0 left-14 w-px bg-border opacity-20"></div>
          <div className="absolute -top-96 bottom-0 right-14 w-px bg-border opacity-20"></div>

          <div className="px-14">
            <div className="flex justify-center">
              <div
                className="flex overflow-x-auto scrollbar-hide"
                id="industry-tabs"
              >
                <div className="flex min-w-max border border-border bg-card dark:bg-card">
                  {industries.map((industry, index) => (
                    <button
                      key={industry.id}
                      onClick={() =>
                        setActiveIndustry(industry.id)
                      }
                      className={`relative flex items-center justify-center px-6 py-4 text-sm whitespace-nowrap border-r border-border last:border-r-0 transition-all duration-200 hover:bg-accent ${
                        activeIndustry === industry.id
                          ? "font-semibold text-foreground bg-accent"
                          : "font-medium text-muted-foreground"
                      }`}
                    >
                      <span>{industry.name}</span>

                      {/* Orange bottom border for active tab */}
                      {activeIndustry === industry.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Scene Below Tabs - Full Width Extending to Borders */}
      {activeIndustry && setActiveIndustry && (
        <div className="bg-background dark:bg-background relative">
          {/* Vertical guide lines continuation - positioned at the actual borders */}
          <div className="absolute top-0 bottom-0 left-14 w-px bg-border z-20"></div>
          <div className="absolute top-0 bottom-0 right-14 w-px bg-border z-20"></div>

          {/* Full width image scene container that extends to the border lines */}
          <div className="relative">
            <div className="ml-14 mr-14">
              <div className="bg-background dark:bg-card border border-border border-t-0 overflow-hidden relative">
                <IndustryImageScene
                  industry={activeIndustry}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}