var path = require("path");
module.exports = {
	entry: "./jsx/index.jsx",
	output: {
		path: path.join(__dirname, "/public/js"),
		filename: "bundle.js"
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.js|jsx$/,
				loader: 'babel-loader',
				include: [
					path.join(__dirname, "/jsx/")
				],
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}