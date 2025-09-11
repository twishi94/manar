import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Users, Lightbulb, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Innovation",
      description: "Pioneering the future of industrial automation with cutting-edge technologies."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Reliability", 
      description: "Delivering robust solutions that ensure continuous operation and peace of mind."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Partnership",
      description: "Building long-term relationships through exceptional service and support."
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Excellence",
      description: "Committed to the highest standards of quality in every project we undertake."
    }
  ];

  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <Badge variant="secondary" className="px-3 py-1">
                About Manar.ai
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-medium leading-tight">
                Leading the Future of <span className="text-primary">Smart Automation</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With over 15 years of experience, Manar.ai has been at the forefront of electrical 
                automation and IoT innovation, helping industries transform through intelligent solutions.
              </p>
            </div>

            <Card className="border border-border">
              <CardContent className="p-8">
                <blockquote className="text-lg italic mb-6 text-muted-foreground">
                  "Manar.ai transformed our manufacturing process with their innovative automation 
                  solutions. We've seen a 40% increase in efficiency and significant cost savings."
                </blockquote>
                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100"
                    alt="Client testimonial"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">CTO, TechCorp Industries</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&h=600"
                alt="Manar.ai team"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-muted text-foreground">
                        {value.icon}
                      </div>
                      <h4 className="font-medium">{value.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}