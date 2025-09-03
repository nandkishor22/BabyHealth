import { useEffect, useState } from 'react';
import { Baby, Stethoscope, Heart, Star } from 'lucide-react';

interface FloatingBubble {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
}

export const FloatingElements = () => {
  const [bubbles, setBubbles] = useState<FloatingBubble[]>([]);

  useEffect(() => {
    const createBubbles = () => {
      const newBubbles: FloatingBubble[] = [];
      for (let i = 0; i < 8; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * 100 + 50, // 50-150px
          left: Math.random() * 100, // 0-100%
          delay: Math.random() * 10, // 0-10s delay
          duration: Math.random() * 10 + 15, // 15-25s duration
        });
      }
      setBubbles(newBubbles);
    };

    createBubbles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="floating-bubble absolute opacity-30"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}
      
      {/* Decorative floating medical icons */}
      <div className="absolute top-1/4 left-10 floating-element opacity-20">
        <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
          <Baby className="text-white" size={32} />
        </div>
      </div>
      
      <div className="absolute top-1/3 right-20 floating-element opacity-20" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
          <Stethoscope className="text-white" size={24} />
        </div>
      </div>
      
      <div className="absolute bottom-1/4 left-1/4 floating-element opacity-20" style={{ animationDelay: '4s' }}>
        <div className="w-20 h-20 rounded-full bg-baby-pink/30 flex items-center justify-center">
          <Heart className="text-white" size={36} fill="currentColor" />
        </div>
      </div>
      
      <div className="absolute top-1/2 right-10 floating-element opacity-20" style={{ animationDelay: '6s' }}>
        <div className="w-14 h-14 rounded-full bg-mint-green/40 flex items-center justify-center">
          <Star className="text-white" size={28} fill="currentColor" />
        </div>
      </div>
    </div>
  );
};