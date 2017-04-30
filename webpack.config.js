var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var ProTypes = require('prop-types')

module.exports = {
	entry: path.resolve('src/app.js'),
	output: {
		path: __dirname + './build',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.json'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack',
			template: './src/index.html',
			filename: 'index.html'
		}),
		new openBrowserWebpackPlugin({
			url: 'http://localhost:5000'
		})
	],
	devServer: {
		port: 5000,
		contentBase: './build',
		inline: true,
		stats: {
			colors: true,
			cached: false,
		},
		host: "0.0.0.0"
	},
	devtool: 'eval-source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css/,
				loader: 'style!css'
			},
			{
				test: /\.(woff|woff2|ttf|svg|eot)$/,
				loader: "url?limit=10000"
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				loader: 'url?limit=10000&name=img/[name].[hash].[ext]'
			}
		]
	}
}