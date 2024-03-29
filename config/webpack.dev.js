const paths = require("./paths");

const Webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

let proxy = {};

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  stats: "errors-only",
  devServer: {
    historyApiFallback: true,
    static: paths.build,
    open: true,
    compress: true,
    hot: true,
    watchFiles: ["src/**/*.js"],
    port: 3000,
  },
  plugins: [
    // HOT RELOADING
    new Webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(common, devConfig);
