const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './index.js',
  output: {
    publicPath: '/',
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
            '@babel/plugin-proposal-object-rest-spread', // Add this plugin
          ],
        },
      },
      {
        test: /\.(css|sass)$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    //   host: 'localhost',
    //   port: 8080,
    //   hot: true,
    //   static: {
    //     directory: path.resolve(__dirname,'dist')
    //   },
    //   proxy: [
    //   {
    //     context: ['/api/**'],
    //     target: 'http://localhost:3000',
    //   }
    // ],

    static: {
      directory: path.join(__dirname, './build'),
      publicPath: '/build/bundle.js',
    },
    host: 'localhost',
    port: 8080,
    open: true,
    compress: true,
    historyApiFallback: true,
    proxy: [
      { context: ['/api', '/auth', '/test'], target: 'http://localhost:3000' },
    ],
  },
};
