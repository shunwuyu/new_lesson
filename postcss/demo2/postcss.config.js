const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
const postcssModules = require("postcss-modules");

module.exports = {
  plugins: [postcssModules, autoprefixer, postcssPresetEnv]
};