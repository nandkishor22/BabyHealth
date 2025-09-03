import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				/* Medical Color System */
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				/* Medical Brand Colors */
				'medical-blue': 'hsl(var(--medical-blue))',
				'medical-blue-light': 'hsl(var(--medical-blue-light))',
				'baby-pink': 'hsl(var(--baby-pink))',
				'baby-pink-light': 'hsl(var(--baby-pink-light))',
				'mint-green': 'hsl(var(--mint-green))',
				'warm-coral': 'hsl(var(--warm-coral))',
				'lavender': 'hsl(var(--lavender))',
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					soft: 'hsl(var(--card-soft))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-soft': 'var(--gradient-soft)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-floating': 'var(--gradient-floating)'
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'medical': 'var(--shadow-medical)',
				'floating': 'var(--shadow-floating)',
				'3d': 'var(--shadow-3d)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-10px) rotate(1deg)' },
					'66%': { transform: 'translateY(-5px) rotate(-1deg)' }
				},
				'gradientMove': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'pulse3d': {
					'0%, 100%': { transform: 'scale(1) translateZ(0)' },
					'50%': { transform: 'scale(1.05) translateZ(10px)' }
				},
				'medicalGlow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--medical-blue) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--baby-pink) / 0.4), 0 0 60px hsl(var(--medical-blue) / 0.2)' }
				},
				'floatingBubbles': {
					'0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(-100vh) scale(1)', opacity: '0' }
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'gradient-move': 'gradientMove 8s ease infinite',
				'pulse-3d': 'pulse3d 2s ease-in-out infinite',
				'medical-glow': 'medicalGlow 3s ease-in-out infinite',
				'floating-bubbles': 'floatingBubbles 15s linear infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;