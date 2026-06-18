module.exports = function (eleventyConfig) {
  // Copy the CMS admin and uploaded assets straight through to the built site
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Don't let Eleventy try to template-process the admin panel files
  eleventyConfig.ignores.add("src/admin/**");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "html"]
  };
};
