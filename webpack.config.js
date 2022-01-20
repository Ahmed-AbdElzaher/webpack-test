const pathModule = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "script.min.js",
    path: pathModule.resolve(__dirname,"dist")
  },
  mode:"development",
  module: {
    rules: [
      //css files
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  
}


