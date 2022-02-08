const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require('./webpack.config');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[contenthash].bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
});