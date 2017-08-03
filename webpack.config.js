'use strict'
const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlTemplate      = require('html-webpack-template');

const BUILD_DIR         = path.resolve(__dirname, 'dist');
const APP_DIR           = path.resolve(__dirname, 'src');

const config = {
  entry:  `${APP_DIR}/index.js`,
  output: {
    path:     BUILD_DIR,
    filename: '/js/[name].js',
  },
  cache:   true,
  debug:   true,
  devtool: 'eval-source-map',
  stats:   {
    colors:  true,
    reasons: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new HtmlWebpackPlugin({
      title:      'My Movies',
      xhtml:      true,
      inject:     false,
      template:   htmlTemplate,
      appMountId: 'root-container',
      favicon: './favicon/movies.ico',
      links: [
          'https://fonts.googleapis.com/css?family=Pangolin',
          'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/css/materialize.min.css'
      ],
      meta: [
        {
          name: 'dscription',
          content: 'This is my movies collection site'
        },
        {
          name: 'keyword',
          content: 'movies, movies release date, movies genre, action movies'
        },
        {
          name: 'author',
          content: 'Mohamed Gassama'
        },
        {
          name: 'Content-Type',
          content: 'http-equiv'
        },
         {
            name: "content",
            content: "text/html; charset=UTF-8"
         },
         {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0"
         }
      ],
 }),
    new ExtractTextPlugin('/css/[name].css', {
      allChunks: true,
    }),
  ],

  module: {
    loaders: [
          {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
          },

          {
            test: /\.(png|gif|jpg)$/,
            loader: 'file-loader?name=/images/[name].[ext]'
          },

          {
            test: /\.ico$/,
            loader: 'file-loader?name=/[name].[ext]'
          },

          {
            test: /\.jsx?$/,
            loader: 'babel'
           },

          {
            test:   /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=100&mimetype=application/font-woff&name=/fonts/[name].[ext]',
          },

          {
            test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader?name=/fonts/[name].[ext]'
          },

          {
            test:   /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=100&mimetype=application/octet-stream&name=/fonts/[name].[ext]',
          },

          {
            test:   /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader?name=/fonts/[name].[ext]',
          },

          {
            test: /\.html$/,
            loader: 'html-loader?attrs[]=video:src'
          },
          {
            test:   /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=100&mimetype=image/svg+xml&name=/fonts/[name].[ext]',
          },
    ],
  },
};

if (process.env && process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
  const prodPlugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin('/js/common.js'),
  ];

  config.plugins = config.plugins.concat(prodPlugins);

  config.cache = false;
  config.debug = false;
  config.devtool = undefined;
}

module.exports = config;

