import { Baby, Stethoscope, Syringe, AlertTriangle, Brain, Heart } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Baby,
      title: "Newborn Care",
      description: "Comprehensive care for your newborn, including regular check-ups, vaccinations, and developmental assessments.",
      features: ["24/7 NICU", "Lactation Support", "Growth Monitoring"]
    },
    {
      icon: Stethoscope,
      title: "Pediatric Checkups",
      description: "Regular health checkups to ensure your child's healthy growth and development at every stage.",
      features: ["Growth Charts", "Developmental Screening", "Health Education"]
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description: "Complete immunization programs following national guidelines to protect your child from diseases.",
      features: ["Vaccine Schedule", "Travel Vaccines", "Allergy Testing"]
    },
    {
      icon: AlertTriangle,
      title: "Emergency Care",
      description: "Round-the-clock emergency pediatric care with specialized equipment and trained professionals.",
      features: ["24/7 Availability", "Rapid Response", "ICU Facilities"]
    },
    {
      icon: Brain,
      title: "Developmental Care",
      description: "Specialized care for children with developmental delays and behavioral concerns.",
      features: ["Speech Therapy", "Occupational Therapy", "Behavioral Support"]
    },
    {
      icon: Heart,
      title: "Heart Specialists",
      description: "Pediatric cardiology services for heart conditions in infants and children.",
      features: ["Echo Screening", "Heart Surgery", "Long-term Care"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Our Medical Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive pediatric care services designed to support your child's health journey from birth through adolescence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="medical-card p-8 group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 floating-element flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <service.icon className="text-white" size={32} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-border">
                <button className="text-primary hover:text-primary/80 font-semibold transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};