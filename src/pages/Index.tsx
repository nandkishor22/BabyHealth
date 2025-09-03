import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { AppointmentForm } from '@/components/AppointmentForm';
import { ContactSection } from '@/components/ContactSection';
import { FloatingElements } from '@/components/FloatingElements';
import { Baby, Phone, Menu, MapPin, Mail } from 'lucide-react';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="floating-element">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Baby className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">BabyHealth</h1>
                <p className="text-xs text-muted-foreground">Pediatric Hospital</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#appointment" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Appointments
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Contact
              </a>
              <a 
                href="tel:555123BABY"
                className="bg-gradient-primary text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform medical-glow inline-flex items-center gap-2"
              >
                <Phone size={16} />
                Emergency
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="p-2">
                <Menu className="text-foreground" size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <AppointmentForm />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-foreground/5 backdrop-blur-sm border-t border-border/30 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="floating-element">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Baby className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text">BabyHealth</h3>
                  <p className="text-sm text-muted-foreground">Pediatric Hospital</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Providing exceptional pediatric care with love, expertise, and advanced medical technology. 
                Your child's health is our priority.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#appointment" className="hover:text-primary transition-colors">Book Appointment</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact Info</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Newborn Care</li>
                <li>Pediatric Checkups</li>
                <li>Vaccinations</li>
                <li>Emergency Care</li>
                <li>Developmental Care</li>
                <li>Heart Specialists</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MapPin size={14} />
                  123 Children's Way, Medical City
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} />
                  Emergency: (555) 123-BABY
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} />
                  Appointments: (555) 123-CARE
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} />
                  info@babyhospital.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/30 mt-12 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 BabyHealth Pediatric Hospital. All rights reserved. | 
              <span className="text-primary"> 24/7 Emergency Care Available</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;