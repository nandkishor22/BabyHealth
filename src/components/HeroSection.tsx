import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-hospital.jpg';

export const HeroSection = () => {
  const scrollToAppointment = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-primary opacity-80"></div>
        <img 
          src={heroImage} 
          alt="Beautiful baby hospital environment" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="medical-card p-12 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
            Caring for Your
            <br />
            <span className="text-baby-pink">Little Angels</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            Providing world-class pediatric care with love, expertise, and the latest medical technology. 
            Your child's health and happiness are our greatest priorities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToAppointment}
              className="btn-medical text-lg px-8 py-4 medical-glow"
            >
              Book Appointment
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/30 text-foreground hover:bg-white/20 text-lg px-8 py-4 backdrop-blur-sm"
            >
              Emergency Care
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="medical-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Care</div>
            </div>
            <div className="medical-card p-6">
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Expert Doctors</div>
            </div>
            <div className="medical-card p-6">
              <div className="text-3xl font-bold text-accent mb-2">15k+</div>
              <div className="text-sm text-muted-foreground">Happy Families</div>
            </div>
            <div className="medical-card p-6">
              <div className="text-3xl font-bold text-warm-coral mb-2">★ 4.9</div>
              <div className="text-sm text-muted-foreground">Patient Rating</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};