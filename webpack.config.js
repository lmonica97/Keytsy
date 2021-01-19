const path = require('path');

module.exports = {
  mode: 'development',
  entry: './frontend/keytsy_app.jsx', 
  output: { 
    path: path.resolve(__dirname,"app", "assets", "javascripts"),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: { 
    extensions: [".js", ".jsx", "*"],
  },
  module: {
     rules: [
       {
         test: /\.jsx?$/,
         exclude: /(node_modules)/,
         use: {
           loader: 'babel-loader',
           query: {
             presets: ['@babel/env', '@babel/react']
           }
         },
       }
     ]
   }
 }