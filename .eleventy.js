module.exports = function (eleventyConfig) {
  // Copy /src/assets → /assets in the output
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts"
    }
  };
};
