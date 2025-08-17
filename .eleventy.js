// .eleventy.js — ESM config that *will* run when "type":"module" is present
export default function (eleventyConfig) {
  // Copy everything under /src/assets → /assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

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
}
