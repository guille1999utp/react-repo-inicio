const path = require("path");
/**@type {import('webpack').Configuration} */
module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,"dist"),
        filename: "[name].[contenthash].js",
        publicPath: ""
    },
    mode:"production",
    module:{
        rules:[
        {
           use:"babel-loader",
           test: /.(js|jsx)$/,
           exclude:/node_modules/ 
        }
        ]
    }
  };