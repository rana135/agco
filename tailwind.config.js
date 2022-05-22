module.exports = {
  content: ["./src/**/*.{html,js}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3065b5",
          secondary: "#1B98F5",
          accent: "#3A4256",
          neutral: "#e6e6e6",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui"), require('tw-elements/dist/plugin')],
}
