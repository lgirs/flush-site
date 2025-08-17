// .eleventy.js
export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}
