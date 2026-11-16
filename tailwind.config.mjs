/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Varianta C (aleasă de Mario, nov. 2026): grafit ca asfaltul + galben de marcaj.
        brand: {
          50: '#f4f4f2',
          100: '#e8e9ea',
          200: '#d1d4d8',
          300: '#a9aeb5',
          400: '#7d838c',
          500: '#22262b',
          600: '#1a1d21',
          700: '#16191c',
          800: '#121417',
          900: '#0c0d0f',
        },
        accent: {
          300: '#f8dc80',
          400: '#f5c93f',
          500: '#f2c12e',
          // 600/700: auriu închis, pentru text pe fundal deschis (contrast AA)
          600: '#8a6200',
          700: '#6e4e00',
        },
        steel: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      // Colțuri mai generoase, în stilul plăcilor Apple.
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
