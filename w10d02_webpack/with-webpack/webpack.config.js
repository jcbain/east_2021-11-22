const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/newIndex.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        resolve: {extensions: ['.js', '.jsx']},
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};