const HtmlWebPackPlugin = require('html-webpack-plugin');
// note: webpack defaults to creating a dist folder with main.js as the bundled file
// const path = require('path');

module.exports = {
	// to choose a non-default bundled path:
	/*
	entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
	*/
	devServer: {
		contentBase: './dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		})
	]
};
