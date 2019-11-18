const resolve = require("path").resolve;
module.exports = {
  outputPath: resolve(__dirname, "../", "build"),
  contentBasePath: resolve(__dirname, "../", "public"),
  srcPath: resolve(__dirname, "../src"),
  stylesheetsPath: resolve(__dirname, "../app/stylesheets"),
  bundleVisualizerStatsPath: "../dist/stats" // we can't use resolve here because the plugin fails
};