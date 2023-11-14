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
        'button-green': '#154924',
        'gradient-primary': '#C9ECCB',
        'gradient-secundary': '#CDF0D6',
      },
      width: {
        '180px': '180px',
        '345px': '345px',
        '298px': '298px',
        '450px': '450px',
        '550px': '550px',
      },
      height: {
        '40px': '40px',
        '45px': '45px',
        '44px': '44px',
        '450px': '450px',
        '550px': '550px',
      },
      borderRadius: {
        '10px': '10px',
        '12px': '12px',
        '40px': '40px',
        '40px-right': '0 40px 40px 0',
      },
      fontFamily: {
        'monteserrat': ['Montserrat', 'sans-serif'],
      }, 
      fontSize: {
        '12px': '12px',
        '16px': '16px',
        '20px': '20px',
        '30px': '30px',
      },
      margin: {
        '21px': '21px',
        '26px': '26px',
        '41px': '41px',
      },
      padding: {
        '22px': '22px',
      }
    },
  },
  plugins: [],
}
