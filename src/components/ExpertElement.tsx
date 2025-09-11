import { Button } from "./ui/button";
import { Quote, ArrowRight, Award, Users, Target } from "lucide-react";

export function ExpertElement() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">INDUSTRY EXPERTISE</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                15+ years of industry experience
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our team of automation experts brings deep industry knowledge and proven methodologies 
                to every project, ensuring successful implementations that deliver lasting value.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Expert Engineers</div>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Industry Awards</div>
                </div>
                <div className="text-center">
                  <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Client Retention</div>
                </div>
              </div>

              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-semibold rounded-lg flex items-center gap-2"
              >
                Meet Our Team
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <Quote className="w-12 h-12 text-primary mb-6" />
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-6">
                  "Manar.ai's expertise transformed our manufacturing operations. Their team didn't just 
                  implement technology—they understood our business and delivered solutions that truly work."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-600">AK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ahmed Khalil</div>
                    <div className="text-gray-600">Founder & CEO, Manar.ai</div>
                    <div className="text-sm text-gray-500">15+ years in Industrial Automation</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}