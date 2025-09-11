import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { IsometricGraduationCap, IsometricUsers, IsometricArrowRight } from "./IsometricIcons";
import exampleImage from 'figma:asset/364ad9c4f132654809c8e69cc67bbefdfa5cce33.png';

export function TrainingSkillDevelopment() {
  return (
    <section className="bg-background dark:bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative bg-muted dark:bg-card border border-border overflow-hidden">
          <div className="relative px-8 lg:px-16 py-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <Badge className="bg-primary text-primary-foreground px-4 py-2 font-medium">
                  <IsometricGraduationCap className="w-4 h-4 mr-2" />
                  TRAINING + DEVELOPMENT
                </Badge>
                
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-medium text-foreground leading-tight">
                    Expert training +<br />
                    skill development,<br />
                    <span className="text-primary">all in one program</span>
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                    Build your team's automation expertise with our training programs, 
                    certifications, and hands-on workshops. Master IoT implementation 
                    and system integration from one trusted provider.
                  </p>
                </div>
              </div>
              
              {/* Right Visual */}
              <div className="relative">
                <img 
                  src={exampleImage} 
                  alt="Training workflow visualization" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Certification Programs Card */}
          <div className="bg-card dark:bg-card border border-border p-8 lg:p-12">
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <IsometricGraduationCap className="w-12 h-12" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">
                  IoT & automation certifications
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Professional certifications in electrical automation, 
                  IoT design, and smart infrastructure with real-world projects.
                </p>
              </div>
              
              <Button 
                variant="outline" 
                className="group border-border text-foreground hover:bg-accent inline-flex items-center gap-2"
              >
                Explore certifications
                <IsometricArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Team Training Card */}
          <div className="bg-card dark:bg-card border border-border p-8 lg:p-12">
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <IsometricUsers className="w-12 h-12" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">
                  Custom team workshops
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Tailored training for your automation needs, from basic 
                  IoT concepts to advanced system integration.
                </p>
              </div>
              
              <Button 
                variant="outline" 
                className="group border-border text-foreground hover:bg-accent inline-flex items-center gap-2"
              >
                Schedule workshop
                <IsometricArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}