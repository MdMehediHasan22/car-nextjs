/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';

const tailwindConfig = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      // You can extend the default themes here or create a custom theme
      "light", // Default DaisyUI light theme
      "dark",  // Default DaisyUI dark theme
      {
        carDoctorTheme: {
          primary: "#FF3811",   // Custom primary color
          secondary: "teal",    // Custom secondary color
          accent: "#F1C40F",    // Example of adding another color
          neutral: "#2A303C",   // Neutral color
          "base-100": "#F4F4F9 ", // Light background color
        },
      },
    ],
  },
};

export default tailwindConfig;
