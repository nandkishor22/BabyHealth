import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Hospital } from 'lucide-react';

export const AppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch('https://formsubmit.co/malinandkishor445@gmail.com', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        toast.success('Appointment request sent successfully! We\'ll contact you soon.');
        form.reset();
      } else {
        throw new Error('Failed to send appointment request');
      }
    } catch (error) {
      toast.error('Failed to send appointment request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Book an Appointment
          </h2>
          <p className="text-xl text-muted-foreground">
            Schedule a consultation with our pediatric specialists. We're here to care for your little one.
          </p>
        </div>
        
        <div className="medical-card p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Hidden FormSubmit fields */}
            <input type="hidden" name="_subject" value="New Baby Hospital Appointment Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="parent_name" className="text-lg font-semibold">Parent/Guardian Name *</Label>
                <Input 
                  id="parent_name"
                  name="parent_name"
                  type="text" 
                  required
                  className="h-12 text-lg border-2 focus:border-primary"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg font-semibold">Phone Number *</Label>
                <Input 
                  id="phone"
                  name="phone"
                  type="tel" 
                  required
                  className="h-12 text-lg border-2 focus:border-primary"
                  placeholder="Your contact number"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-semibold">Email Address *</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  required
                  className="h-12 text-lg border-2 focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="child_age" className="text-lg font-semibold">Child's Age</Label>
                <Input 
                  id="child_age"
                  name="child_age"
                  type="text"
                  className="h-12 text-lg border-2 focus:border-primary"
                  placeholder="e.g., 6 months, 2 years"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="appointment_type" className="text-lg font-semibold">Appointment Type *</Label>
                <Select name="appointment_type" required>
                  <SelectTrigger className="h-12 text-lg border-2">
                    <SelectValue placeholder="Select appointment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="routine_checkup">Routine Checkup</SelectItem>
                    <SelectItem value="vaccination">Vaccination</SelectItem>
                    <SelectItem value="newborn_care">Newborn Care</SelectItem>
                    <SelectItem value="sick_visit">Sick Visit</SelectItem>
                    <SelectItem value="developmental_assessment">Developmental Assessment</SelectItem>
                    <SelectItem value="emergency">Emergency</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="preferred_date" className="text-lg font-semibold">Preferred Date</Label>
                <Input 
                  id="preferred_date"
                  name="preferred_date"
                  type="date"
                  className="h-12 text-lg border-2 focus:border-primary"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-lg font-semibold">Additional Information</Label>
              <Textarea 
                id="message"
                name="message"
                rows={4}
                className="text-lg border-2 focus:border-primary resize-none"
                placeholder="Please describe any specific concerns, symptoms, or questions you'd like to discuss..."
              />
            </div>
            
            <div className="bg-baby-pink-light/50 p-6 rounded-2xl border border-baby-pink/20">
              <h4 className="font-semibold text-lg mb-3 text-foreground flex items-center gap-2">
                <Hospital size={20} />
                Important Notes:
              </h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Appointments are subject to doctor availability</li>
                <li>• For emergencies, please call our 24/7 helpline instead</li>
                <li>• Please bring your child's vaccination record</li>
                <li>• We'll confirm your appointment within 24 hours</li>
              </ul>
            </div>
            
            <div className="text-center">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-medical text-xl px-12 py-4 medical-glow disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending Request...
                  </div>
                ) : (
                  'Book Appointment'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};