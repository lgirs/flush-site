// .eleventy.js  (ESM)
export default function (eleventyConfig) {
  // Copy assets to /_site/assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
}
