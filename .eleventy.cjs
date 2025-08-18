// .eleventy.cjs
module.exports = function (eleventyConfig) {
  // --- Passthrough copy (explicit and granular) ---
  // Copy the stylesheet explicitly
  eleventyConfig.addPassthroughCopy({ "src/assets/styles.css": "assets/styles.css" });
  // Copy images explicitly (brand & content) and any other static files under images
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });
  // Optional: keep a broad assets copy as a fallback, harmless if redundant
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Probe to confirm config executed (should appear in Netlify logs)
  console.log("[eleventy] config loaded, passthrough for styles.css and images enabled");

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
