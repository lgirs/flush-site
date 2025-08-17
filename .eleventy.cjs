// .eleventy.cjs — guaranteed to load as CommonJS
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // tiny probe to verify config executes; shows in build logs
  console.log("[eleventy] config loaded, passthrough enabled");

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" }
  };
};
