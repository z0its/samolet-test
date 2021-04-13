var path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const base = require("./webpack.config");

module.exports = merge(base, {
   mode: "development",
   devtool: "source-map",
   entry: ["webpack-dev-server/client?http://localhost:3000", "./src/index"],
   output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "bundle.js",
      publicPath: "/",
   },
   plugins: [
      new HtmlWebpackPlugin({
         inject: true,
         template: path.join(__dirname, "index.html"),
         baseurl: process.env.BASE_URL || "/",
      }),
   ],
});
