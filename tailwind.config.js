/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* light-sage */
        input: "var(--color-input)", /* light-sage */
        ring: "var(--color-ring)", /* sage-green */
        background: "var(--color-background)", /* cream-white */
        foreground: "var(--color-foreground)", /* deep-forest */
        primary: {
          DEFAULT: "var(--color-primary)", /* sage-green */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* soft-blue */
          foreground: "var(--color-secondary-foreground)", /* deep-forest */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* soft-coral */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* light-sage */
          foreground: "var(--color-muted-foreground)", /* muted-sage */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* warm-gold */
          foreground: "var(--color-accent-foreground)", /* deep-forest */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* deep-forest */
        },
        card: {
          DEFAULT: "var(--color-card)", /* subtle-beige */
          foreground: "var(--color-card-foreground)", /* deep-forest */
        },
        success: {
          DEFAULT: "var(--color-success)", /* natural-green */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* gentle-amber */
          foreground: "var(--color-warning-foreground)", /* deep-forest */
        },
        error: {
          DEFAULT: "var(--color-error)", /* soft-coral */
          foreground: "var(--color-error-foreground)", /* white */
        },
        terracotta: {
          DEFAULT: "var(--color-terracotta)", /* warm-terracotta */
          foreground: "var(--color-terracotta-foreground)", /* white */
        },
        blueGray: {
          DEFAULT: "var(--color-blue-gray)", /* soft-blue-gray */
          foreground: "var(--color-blue-gray-foreground)", /* deep-forest */
        },
        deepBlueGray: "var(--color-deep-blue-gray)", /* deep-blue-gray */
        mediumGrayBlue: "var(--color-medium-gray-blue)", /* medium-gray-blue */
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        headline: ['Crimson Text', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
        cta: ['Nunito Sans', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(123, 154, 140, 0.15)',
        'organic': '0 4px 12px rgba(139, 154, 140, 0.15)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionTimingFunction: {
        'organic': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}