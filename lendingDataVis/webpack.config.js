const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  
  entry: {
    index: './index.js'
  },
  mode: 'development',
  resolve: {
    alias: {
      actions: path.resolve(__dirname, 'src/actions/'),
      reducers: path.resolve(__dirname, 'src/reducers/'),
      components: path.resolve(__dirname, 'src/components/'),
      state: path.resolve(__dirname, 'src/state/'),
      styles: path.resolve(__dirname, 'styles/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"],
            plugins: ["transform-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          },
        ],
      },
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      }
    ]
  },
  plugins: debug ? [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './assets/js/[name].bundle.js'
  },
  devServer: {
    contentBase: "./public",
  },
  // devtool: debug ? "inline-sourcemap" : null,
  node: {
    dns: 'mock',
    net: 'mock'
  }
};
