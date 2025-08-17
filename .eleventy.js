// .eleventy.js — ESM version compatible with "type": "module"
export default function (eleventyConfig) {
  // Copy /src/assets → /assets in the output
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    // Use Nunjucks everywhere
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    // Explicit input and includes paths (important for CI)
    dir: {
      input: "src",
      output: "_site",
      includes: "src/_includes"
    }
  };
}
