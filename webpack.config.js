const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  	entry: './vue.js',
  	output: {
    	path: path.resolve(__dirname, "./public"),
    	filename: 'main.js'
  	},
  	module: {
	   rules: [
		    {
		      	test: /\.vue$/,
		      	loader: "vue-loader",
		      	exclude: /node_modules/,
		      	query: {
                    presets: ['@babel/preset-env']
                }
		    },
		    {
		      	test: /\.(scss|css)$/,
		      	use: ["vue-style-loader", "css-loader", "sass-loader"]
		    },
		    {
		      	test: /\.js$/,
		      	loader: "babel-loader",
		      	exclude: /node_modules/
		    }
	   	]
  	},
  	resolve: {
   		alias: {
    		vue$: "vue/dist/vue.esm.js"
		},
   		extensions: ["*", ".js", ".vue", ".json"]
  	},
  	plugins: [VueLoaderPlugin(),new CopyPlugin([{ from: './' }])],
  
}