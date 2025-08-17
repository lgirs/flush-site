// .eleventy.js — ESM config for Eleventy 2.x
export default function (eleventyConfig) {
  // Copy /src/assets → /assets in the output
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    // Use Nunjucks everywhere
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // Required dir settings
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
}
