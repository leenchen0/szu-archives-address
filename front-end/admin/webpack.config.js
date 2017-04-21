var webpack = require('webpack')

module.exports = {
	entry: ['./index.js'],

	output: {
		path: 'public',
		filename: 'bundle.js',
		publicPath: '/admin'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react', 'stage-1']
				}
			}
		]
	},

	postcss: [
		require('autoprefixer')
	],

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}