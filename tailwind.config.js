module.exports = {
  prefix: "",
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'focus-visible'],
      outline: ['responsive', 'focus-within', 'focus', 'focus-visible'],
      scale: ['responsive', 'hover', 'focus', 'focus-visible'],
      textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'focus-visible'],
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
