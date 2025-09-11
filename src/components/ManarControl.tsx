import { Smartphone, Home, Mic, Settings, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export function ManarControl() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Nice and easy — how to control via Manar
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Using our platform is so intuitive, it's child's play. You can also control your electrical systems using voice commands through your 
              smart speaker or directly on the device interface.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left section - The Manar app */}
            <div className="space-y-8">
              {/* Image */}
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYXBwJTIwY29udHJvbCUyMGF1dG9tYXRpb24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU1NjMxNzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Manar app control interface"
                  className="w-full h-80 object-cover border border-border"
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-medium text-foreground">The Manar° app</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Our smart app includes many unique features, such as real-time monitoring, 
                  which allows you to track your electrical systems and set the optimal parameters for 
                  when you're away. Smart Schedules, Open Window Detection, and much more 
                  don't require additional hardware sensors, and much more.
                </p>

                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 inline-flex items-center gap-2 group">
                  Learn more about the app
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>

            {/* Right section - Smart home integration */}
            <div className="space-y-8">
              {/* Image */}
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1587826154528-f1adec0a4653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjB2b2ljZSUyMGNvbnRyb2wlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc1NTYzMTcxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Smart home integration with voice control"
                  className="w-full h-80 object-cover border border-border"
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center">
                    <Home className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-medium text-foreground">Smart home integration</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Conveniently control your electrical systems in your building using your smart 
                  home system. Whether you have Apple HomeKit, Google Home, or Alexa 
                  Smart Home — Manar° is compatible. Seamlessly integrate into your 
                  smart building thanks to the unified Manar connectivity standard.
                </p>

                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 inline-flex items-center gap-2 group">
                  View smart home integration
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>

          </div>

          {/* Additional features grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto">
                <Mic className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-medium text-foreground">Voice Control</h4>
              <p className="text-sm text-muted-foreground">
                Control your systems with simple voice commands through any smart speaker
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-medium text-foreground">Automated Scheduling</h4>
              <p className="text-sm text-muted-foreground">
                Set smart schedules that adapt to your building's usage patterns automatically
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-medium text-foreground">Remote Monitoring</h4>
              <p className="text-sm text-muted-foreground">
                Monitor and control your electrical systems from anywhere in the world
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}