var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    main: './views/home/index.jsx',
  },
  output: {
    path: 'public',
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx|.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./views'),
      path.resolve('./views/shared'),
      path.resolve('./')
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        HOST: JSON.stringify(process.env.HOST || 'http://localhost:3000'),
      }
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ]
}