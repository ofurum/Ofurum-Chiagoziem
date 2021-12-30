module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xssss: "150px",
      xsss: "375px",
      xss: "503px",
      sm: "640px",
      md: "768px",
      "md-876": "876px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1320px",
      xxla: "1432px",
      "2xl": "1536px",
    },
    fontFamily: {
      "GTWalsheim-Regular": ["GTWalsheim-Regular" , "sans-serif"]
    },
    extend: {
      spacing: {
        "16.5": "4.5rem" //256px
      },

      colors: {
        "header-matte-black": "#171717",
        "glass-grey": "linear-gradient(0deg, #000624 , 15.06%, #0b112e,  97.16%)"
      }
    },
  },
  plugins: [],
}
