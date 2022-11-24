/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],


  daisyui:{
    themes: [
      {
        resaletheme:{
          primary: '#0284c7',
          secondary: '#047857',
          accent: "#3A4256",
          neutral: "#eab308",
          "base-100": "#FFFFFF",
        }
      }
    ],
    theme: {
      mytheme: {
        primary: "#0284c7",
        secondary: "#19D3AE",
        accent: "#3A4256",
  
        "base-100": "#FFFFFF",
  
        neutral: "#3D4451",
  
        info: "#3ABFF8",
  
        success: "#36D399",
  
        warning: "#FBBD23",
  
        error: "#F87272",
      },
    },
  },
 
 
  plugins: [require("daisyui")],
};
