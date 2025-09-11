import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ZapierHero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-purple-900 dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <div className="grid grid-cols-8 gap-2 w-full h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full opacity-30"></div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3,3" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2,2" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            The most advanced{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              IoT & Automation Platform
            </span>{" "}
            for Enterprises
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your industrial operations with AI-powered automation, predictive maintenance, 
            and real-time insights that drive efficiency and reduce costs across your entire enterprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-lg flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-lg flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          <p className="text-sm text-gray-400 mb-8">
            No credit card required • Setup in under 5 minutes • Enterprise-grade security
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1714322148068-923f9f9bfc1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwSW9UJTIwZGFzaGJvYXJkJTIwYXV0b21hdGlvbiUyMGNvbnRyb2wlMjBwYW5lbHxlbnwxfHx8fDE3NTU1NDI4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Manar.ai Dashboard Interface"
              className="w-full h-auto"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-8 -left-8 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-xl p-4 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">Live Monitoring</span>
            </div>
          </div>
          
          <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hidden lg:block">
            <div className="text-white text-sm">
              <div className="font-semibold">98% Uptime</div>
              <div className="text-gray-300">Last 30 days</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}