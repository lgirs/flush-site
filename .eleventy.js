// .eleventy.js — ESM, explicit dirs, explicit passthrough for assets
export default function (eleventyConfig) {
  // Copy the entire /src/assets folder to /assets in the output
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Optional: watch CSS so local dev picks up changes immediately
  eleventyConfig.addWatchTarget("src/assets/styles.css");

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
