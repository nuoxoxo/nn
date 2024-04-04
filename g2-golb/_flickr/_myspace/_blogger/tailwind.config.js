/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'CorporateLogoMediumVer3'//'PretendardStandardLight',
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}

