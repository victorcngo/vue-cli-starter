module.exports = {
	configureWebpack: {
		devtool: 'source-map',
        mode: 'development'
	},
    lintOnSave: process.env.NODE_ENV !== 'production',
    css: {
        loaderOptions: {
          sass: {
            additionalData: `@import "@/styles/app.scss";`
          }
        }
    }
}