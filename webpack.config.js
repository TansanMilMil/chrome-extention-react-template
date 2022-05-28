const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    Content: path.join(__dirname, 'src/Content.tsx'),
    background: path.join(__dirname, 'src/background.ts'),
  },
  output: {
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {minimize: true},
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules']
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      chunks: ['app'],
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: './public/manifest.json', 
          to: './manifest.json'
        },
        { 
          from: './public/image/*',
          to: './[name][ext]'
        },
        { 
          from: './public/global-style.css',
          to: './[name][ext]'
        },
      ]
    }),
  ],
  devtool: 'cheap-module-source-map',
  cache: true,
  watchOptions:{
    poll: true,
  }
};