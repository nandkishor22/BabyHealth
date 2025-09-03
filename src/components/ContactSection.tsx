import { MapPin, Phone, Clock, Mail, AlertTriangle, Hospital, Map } from 'lucide-react';

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Children's Way", "Pediatric District", "Medical City, MC 12345"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Emergency: (555) 123-BABY", "Appointments: (555) 123-CARE", "General Info: (555) 123-INFO"]
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: ["Emergency: 24/7 Available", "Appointments: Mon-Fri 8AM-6PM", "Weekends: 9AM-4PM"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["appointments@babyhospital.com", "emergency@babyhospital.com", "info@babyhospital.com"]
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here for you and your family. Reach out to us anytime for appointments, questions, or emergency care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="medical-card p-8 text-center group hover:scale-105 transition-all duration-500 h-full"
            >
              <div className="mb-6 floating-element flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center">
                  <info.icon className="text-white" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {info.title}
              </h3>
              <div className="space-y-2">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-muted-foreground text-sm leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Banner */}
        <div className="medical-card p-12 text-center bg-gradient-accent border-2 border-warm-coral/30">
          <div className="mb-6 animate-pulse-3d flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-destructive flex items-center justify-center">
              <AlertTriangle className="text-white" size={48} />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            24/7 Emergency Care Available
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            For immediate medical emergencies involving your child, call our emergency hotline or visit our emergency department. 
            Our pediatric emergency team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:555123BABY"
              className="btn-medical inline-flex items-center justify-center gap-3 px-8 py-4 medical-glow text-lg font-semibold"
            >
              <Phone size={20} />
              Call Emergency
            </a>
            <div className="px-8 py-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 text-lg font-semibold inline-flex items-center gap-3">
              <Hospital size={20} />
              Emergency Department Open
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16 medical-card p-12 text-center">
          <h3 className="text-2xl font-bold mb-6 text-foreground">
            Find Our Location
          </h3>
          <div className="bg-gradient-soft rounded-2xl h-64 flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Map className="text-white" size={32} />
                </div>
              </div>
              <p className="text-muted-foreground">
                Interactive map showing our hospital location and nearby landmarks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};