/** @type {import("tailwindcss").Config} */
const colors = require("tailwindcss");
module.exports = {
  content: ["./src/**/*{html,js,jsx}"],
  theme: {
    colors: {
      ...colors,
    },
  },
};
