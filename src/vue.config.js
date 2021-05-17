module.exports = {
	configureWebpack: {
		devtool: 'source-map'
	},
    lintOnSave: process.env.NODE_ENV !== 'production',
    css: {
        loaderOptions: {
          sass: {
            additionalData: `@import "@/sass/app.scss";`
          }
        }
    }
};