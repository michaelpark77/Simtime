// load babel load
const path = require("path");
module.exports = {
  entry: {
    main: "./Simtime/frontend/src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/, //any js files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "static/frontend"),
  },
};
