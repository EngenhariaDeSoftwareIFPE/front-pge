/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-green': "#3AC25E",
        'secundary-green': '#185228',
      },
      width: {
        '550px': '550px',
        '600px': '600px',
        '700px': '700px',
        '1920px': '1920px,'
      },
      height: {
        '550px': '550px',
        '600px': '600px',
        '700px': '700px',
        '1080px': '1080px',
      },
      borderRadius: {
        '40px': '40px',
        '40px-right': '0 40px 40px 0',
      },
    },
  },
  plugins: [],
}
