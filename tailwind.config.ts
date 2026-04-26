import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mysteria: '#1b1938',
        lavender: '#cbb7fb',
        charcoal: '#292827',
        cream: '#e9e5dd',
        parchment: '#dcd7d3'
      },
      borderRadius: {
        sm: '8px',
        lg: '16px'
      },
      maxWidth: {
        container: '1200px'
      }
    }
  },
  plugins: []
} satisfies Config;
