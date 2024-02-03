/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'img': '9px 9px 100px 9px #9DB2BF',
        'project': '1px 1px 100px 1px rgba(96, 150, 180 , 0.3)',
      },
      screens: {
        sm: { max: '768px' },
        lg: { max: '976px' },
        xl: { max: '1440px' },
      },
      height: {
        22: "86px"
      },
      width: {
        22: "86px"
      },
      dropShadow: {
        'text-satin': '2px 2px 4px rgba(0, 0, 0, 0.3), -1px -1px 2px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}