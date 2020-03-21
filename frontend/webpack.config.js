const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');

const devMode = false;

module.exports = {
  	entry: ['./main.js','./main.scss'],
  	output: {
    	path: path.resolve(__dirname, "./public"),
    	filename: 'main.js'
  	},
    devServer : {
      port : 3000,
      open : true
    },
  	module: {
   		rules: [
      		{
        		test: /\.vue$/,
        		loader: 'vue-loader'
      		},
	      	// this will apply to both plain `.js` files
	      	// AND `<script>` blocks in `.vue` files
	      	{
        		test: /\.js$/,
        		loader: 'babel-loader'
        	}
      		,
      		// this will apply to both plain `.css` files
      		// AND `<style>` blocks in `.vue` files
      		{
        		test: /\.css$/,
        		use: [
          			'vue-style-loader',
          			'css-loader'
        		]
      		},
          {
          // Thiết lập build scss
          test: /\.(sa|sc)ss$/,
          use: [
              {
                  loader: MiniCssExtractPlugin.loader
              },
              {
                  // Interprets CSS
                  loader: 'css-loader',
                  options: {
                      importLoaders: 2
                  }
              },
              {
                  // minify CSS và thêm autoprefix
                  loader: 'postcss-loader',
                  options: {
                      ident: 'postcss',

                      // Đặt chế độ tối ưu
                      plugins: devMode
                          ? () => []
                          : () => [
                              postcssPresetEnv({
                                  browsers: ['>1%']
                              }),
                              require('cssnano')()
                          ]
                  }
              },
              {
                  loader: 'sass-loader'
              }
          ]
        },
        {
            // Thiết lập lưu các ảnh sử dụng bởi CSS
            // lưu dưới đường dẫn images cùng file site.css
            test: /\.(png|jpe?g|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        // Image sử dụng bởi CSS lưu tại
                        publicPath: '../images',
                        emitFile: false
                    }
                }
            ]
        }
    	]
  	},
  	plugins: [
    	// make sure to include the plugin for the magic
    	new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: devMode ? './main.css' : './main.min.css'
    })
	],
  
}