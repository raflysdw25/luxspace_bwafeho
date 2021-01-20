module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"), //Autoprefix: untuk menyesuaikan style di berbagai jenis browser
  ],
};
