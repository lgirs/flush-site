// .eleventy.js (CommonJS; Eleventy looks for this filename)
module.exports = function (eleventyConfig) {
  // Copy /src/assets → /assets in the output
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    // Use Nunjucks everywhere
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    // Tell Eleventy our input dir is /src (this is the key bit)
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
