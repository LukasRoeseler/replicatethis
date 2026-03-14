module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  
  return {
    pathPrefix: process.env.PATH_PREFIX || "/", // Helps GitHub Pages find assets
    dir: {
      input: "src",
      output: "_site"
    }
  };
};