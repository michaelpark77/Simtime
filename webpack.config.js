// load babel load
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
console.log("webpack.start");
module.exports = {
  entry: {
    main: ['@babel/polyfill', "./Simtime/frontend/src/index.js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/, //any js files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              ["@babel/preset-env", {
                
              }]
            ],
            plugins: [
              [
                'babel-plugin-styled-components',
                {
                  
                }
              ],
              // "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-transform-spread",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        },
      },
    ],
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    // proxy: {
    //   "/api":
    //     "http://192.168.43.249:8000/",
    // },
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "static/frontend"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './Simtime/frontend/templates/frontend/index-test.html',
      inject: true,
      hash: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype: true
      },
      chunks: ['main'],
      title: '심타임'
    }),
  ]
};
