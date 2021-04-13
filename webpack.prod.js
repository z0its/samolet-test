var path = require('path');
const { merge } = require('webpack-merge');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const base = require('./webpack.config');

module.exports = merge(base, {
  mode: 'production',
  devtool: false,
  output: {
    filename: 'static/js/[name].[contenthash:8].js',
    path: path.join(__dirname, 'build'),
    publicPath: (process.env.BASE_URL || '/'),
    devtoolModuleFilenameTemplate: info => path.relative(path.join(__dirname, 'src'), info.absoluteResourcePath).replace(/\\/g, "/"),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          keep_classnames: false,
          keep_fnames: false,
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: require("postcss-safe-parser"),
          map: false,
        },
      }),
    ]
  },
  plugins: [  
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: path.join(__dirname, 'index.html'),
        baseurl: process.env.BASE_URL || "/",
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }
    ),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new OptimizeCSSAssetsPlugin({}),
  ]
});