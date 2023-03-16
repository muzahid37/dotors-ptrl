/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        doctorstheme: {
          primary: "#0FCFEC",
          secondary: "#190D3A",
          accent: "#b91c1c",
          neutral: "#191D24",
          "base-100": "#fff",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
