module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./dist/css/agency.min.css');
    eleventyConfig.addPassthroughCopy('./dist/css/styles.css');
    eleventyConfig.addPassthroughCopy('./dist/css/agency.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/js/scripts.js');
    eleventyConfig.addPassthroughCopy('.src/scss/base');
    eleventyConfig.addPassthroughCopy('.src/scss/components/_navbar.scss');
    eleventyConfig.addPassthroughCopy('.src/scss/components/_buttons.scss');
    eleventyConfig.addPassthroughCopy('.src/scss/layout');
    eleventyConfig.addPassthroughCopy('./dist/assets/img');
    eleventyConfig.addPassthroughCopy('./dist/js/scripts.js');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}