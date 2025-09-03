import { Award, Microscope, Users, Star, UserCheck } from 'lucide-react';

export const AboutSection = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Pediatric Cardiologist",
      experience: "15+ years",
      image: UserCheck
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neonatologist",
      experience: "12+ years", 
      image: UserCheck
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatric Surgeon",
      experience: "18+ years",
      image: UserCheck
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Award-Winning Care",
      description: "Recognized for excellence in pediatric healthcare services"
    },
    {
      icon: Microscope,
      title: "Advanced Technology",
      description: "State-of-the-art medical equipment designed for children"
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "We involve families in every step of the care process"
    },
    {
      icon: Star,
      title: "Specialized Teams",
      description: "Multidisciplinary teams of pediatric specialists"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">
            About Our Hospital
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            For over two decades, we've been the trusted choice for families seeking exceptional pediatric care. 
            Our commitment to innovation, compassion, and clinical excellence has made us a leading children's hospital.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="medical-card p-8 text-center group hover:scale-105 transition-all duration-500"
            >
              <div className="mb-4 floating-element flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <feature.icon className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="medical-card p-12 mb-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-4xl font-bold text-primary">20+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-secondary">100k+</div>
              <div className="text-muted-foreground">Children Treated</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-accent">50+</div>
              <div className="text-muted-foreground">Specialist Doctors</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-warm-coral">24/7</div>
              <div className="text-muted-foreground">Emergency Care</div>
            </div>
          </div>
        </div>

        {/* Doctors Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold gradient-text mb-6">
            Meet Our Expert Team
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our board-certified pediatric specialists are dedicated to providing the highest quality care for your children.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div 
              key={index}
              className="medical-card p-8 text-center group hover:scale-105 transition-all duration-500"
            >
              <div className="mb-6 floating-element flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center">
                  <doctor.image className="text-white" size={40} />
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {doctor.name}
              </h4>
              <p className="text-secondary font-semibold mb-2">
                {doctor.specialty}
              </p>
              <p className="text-muted-foreground">
                {doctor.experience}
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <button className="text-primary hover:text-primary/80 font-semibold transition-colors">
                  View Profile →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};