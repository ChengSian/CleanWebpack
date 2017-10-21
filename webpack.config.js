/*module.exports = {
	entry: './dist/src/index.js'
};*/

const path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bbb.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: 'babel-loader'
		}]
	},
	devServer: {
	    contentBase: './dist'
    }
};