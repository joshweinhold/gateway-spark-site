module.exports = function (eleventyConfig) {
  // Copy the CMS admin, uploaded assets, styles, and robots.txt straight through
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Don't let Eleventy try to template-process the admin panel files
  eleventyConfig.ignores.add("src/admin/**");

  // Date helpers for the blog
  eleventyConfig.addFilter("readableDate", function (value) {
    const d = value instanceof Date ? value : new Date(value);
    return d.toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric", timeZone: "UTC"
    });
  });
  eleventyConfig.addFilter("htmlDate", function (value) {
    const d = value instanceof Date ? value : new Date(value);
    return d.toISOString().slice(0, 10);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "html", "md"]
  };
};
