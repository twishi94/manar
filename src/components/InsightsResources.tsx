import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function InsightsResources() {
  const resources = [
    {
      type: "Guide",
      title: "The Complete Guide to Industrial IoT Implementation",
      description: "Learn best practices for deploying IoT solutions in manufacturing environments.",
      readTime: "12 min read",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&h=400"
    },
    {
      type: "Case Study",
      title: "How Smart Manufacturing Reduced Costs by 35%",
      description: "Discover how a leading manufacturer transformed their operations with predictive maintenance.",
      readTime: "8 min read",
      date: "February 2024",
      image: "https://images.unsplash.com/photo-1565792267999-4f82b8b4d4eb?auto=format&fit=crop&w=600&h=400"
    },
    {
      type: "Whitepaper",
      title: "The Future of Energy Management Systems",
      description: "Explore emerging trends and technologies shaping the future of smart energy.",
      readTime: "15 min read",
      date: "January 2024",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <section style={{ backgroundColor: '#FDF8F6' }} className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Insights & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with the latest trends, insights, and best practices in industrial automation and IoT.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 text-sm font-medium rounded-full">
                    {resource.type}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-3 leading-tight text-lg group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {resource.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {resource.date}
                  </div>
                </div>
                <Button variant="ghost" className="w-full justify-between text-primary hover:bg-primary/10 p-0 h-auto">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-semibold rounded-lg flex items-center gap-2 mx-auto"
          >
            <BookOpen className="w-5 h-5" />
            View All Resources
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}