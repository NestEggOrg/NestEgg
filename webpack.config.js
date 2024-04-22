const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-object-rest-spread'  // Add this plugin
          ]
        },
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Match image files
        use: [
          {
            loader: 'file-loader', // Use file-loader
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx','.ts','.tsx'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      filename: './dist/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './build'),
      publicPath: '/build/bundle.js'
    },
    // proxy: {'/api':'http:localhost//3000'}
    compress: true,
    port: 8080,
  },
};
