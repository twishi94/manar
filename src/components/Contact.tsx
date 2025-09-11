import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri 8AM-6PM"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email", 
      value: "info@manar.ai",
      description: "24/7 Response"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Office",
      value: "123 Innovation Drive",
      description: "Tech City, TC 12345"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Support",
      value: "24/7 Available", 
      description: "Emergency Support"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-foreground">
            Ready to Transform Your <span className="text-primary">Operations?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with a free consultation and discover how our enterprise-grade 
            IoT automation solutions can revolutionize your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-background dark:bg-card border border-border hover:border-primary/30 transition-colors">
              <div className="p-3 bg-primary/10 text-primary mb-4">
                {info.icon}
              </div>
              <div className="font-medium mb-2 text-foreground">{info.title}</div>
              <div className="text-foreground mb-1">{info.value}</div>
              <div className="text-sm text-muted-foreground">{info.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}