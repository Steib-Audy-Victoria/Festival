module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "Custom-red": "#e52421",
        "Custom-black": "#191818",
        "Custom-gray": "#a0a09f",
        "Custom-white": "#ffffff",
        "Custom-bordeaux": "#6e2e2b"
      },
      "fontFamily": {
        "chalkduster": ["Chalkduster"],
        "monaco": ["Monaco"]
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
