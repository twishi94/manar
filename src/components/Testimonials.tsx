import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Manar.ai transformed our manufacturing process completely. The 40% increase in efficiency and 60% reduction in downtime exceeded all expectations. Their team's expertise and support throughout the project was exceptional.",
      author: "Jennifer Martinez",
      role: "VP of Operations",
      company: "TechCorp Industries",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6c9c7e5?auto=format&fit=crop&w=200&h=200",
      rating: 5,
      results: ["40% Efficiency Gain", "60% Less Downtime", "$2.5M Savings"]
    },
    {
      quote: "The smart building automation system has revolutionized our energy management. We've seen a 35% reduction in energy costs and our tenants love the improved comfort controls. Outstanding work from start to finish.",
      author: "David Thompson",
      role: "Facilities Director",
      company: "Metropolitan Business Center",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
      rating: 5,
      results: ["35% Energy Savings", "95% Tenant Satisfaction", "50% Maintenance Reduction"]
    },
    {
      quote: "Working with Manar.ai on our renewable energy grid integration was a game-changer. Their predictive analytics and automated load balancing have given us 99.8% uptime and significant cost reductions.",
      author: "Lisa Chen",
      role: "Chief Technology Officer",
      company: "GreenPower Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200",
      rating: 5,
      results: ["99.8% Grid Uptime", "25% Cost Reduction", "Zero Failures"]
    },
    {
      quote: "The automation solutions implemented by Manar.ai have transformed our hospital operations. Patient monitoring is now seamless, and our staff efficiency has improved dramatically. Truly innovative technology.",
      author: "Dr. Robert Williams",
      role: "Chief Medical Officer",
      company: "Regional Medical Center",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&h=200",
      rating: 5,
      results: ["99.9% Uptime", "45% Staff Efficiency", "100% Compliance"]
    },
    {
      quote: "Our data center's efficiency has improved beyond our wildest expectations. The intelligent cooling and power management systems have reduced our operational costs by 30% while maintaining 100% uptime.",
      author: "Amanda Rodriguez",
      role: "Infrastructure Manager",
      company: "CloudTech Systems",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200",
      rating: 5,
      results: ["30% Cost Reduction", "100% Uptime", "40% Energy Efficiency"]
    },
    {
      quote: "The agricultural automation system has revolutionized our farming operations. Smart irrigation and crop monitoring have increased yields by 25% while reducing water usage by 40%. Exceptional innovation.",
      author: "Mark Johnson",
      role: "Farm Operations Director",
      company: "Green Valley Farms",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200",
      rating: 5,
      results: ["25% Yield Increase", "40% Water Savings", "60% Labor Efficiency"]
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20 mb-6">
            Client Success Stories
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-gray-900">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our clients about how our automation solutions have transformed 
            their operations and delivered measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-gray-50">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Key Results:</div>
                    <div className="grid grid-cols-1 gap-2">
                      {testimonial.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <span className="text-gray-600">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-900">
              Client Success <span className="text-primary">by the Numbers</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our clients consistently achieve outstanding results with our automation solutions. 
              These metrics reflect real impact across all industries we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { value: "98%", label: "Client Satisfaction", desc: "Average rating across all projects" },
              { value: "35%", label: "Avg. Efficiency Gain", desc: "Measured improvement in operations" },
              { value: "99.5%", label: "System Uptime", desc: "Reliability across all installations" },
              { value: "$5M+", label: "Client Savings", desc: "Total annual savings delivered" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-2">{stat.value}</div>
                <div className="font-medium text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-gray-900">Ready to Join Our Success Stories?</h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results. Schedule a consultation 
              to explore automation opportunities for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}