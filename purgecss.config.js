module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // medium-zoom adds these classes at runtime from a CDN script, so PurgeCSS can't see them
  safelist: [/^medium-zoom/],
};
