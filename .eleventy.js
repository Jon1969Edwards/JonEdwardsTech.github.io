module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./dist/css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./scss/base');
    eleventyConfig.addPassthroughCopy('./scss/components');
    eleventyConfig.addPassthroughCopy('./scss/layout');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}