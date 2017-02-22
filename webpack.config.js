/*
* @Author: kaikai
* @Date:   2017-02-21 22:41:38
* @Last Modified by:   kaikai
* @Last Modified time: 2017-02-22 22:05:35
*/

var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

module.exports = {

  devtool: 'inline-source-map',

  entry: {
    appk: [
      __dirname + '/appk/appk.js'
      ],
    
    vendor: [
      'babel-polyfill',
      'react', 
      'react-dom', 
      'react-router', 
      'redux',
      'react-redux',
      'react-router-redux',
      "react-thunk",
      'redux-thunk',
      'react-cookie'
      ]
  },

  output: {
    path: __dirname + '/build',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/build/'
  },

  resolve: {
    extensions: [ '.js', '.jsx']
  },
  
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']        
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/, 
        loaders: ['style-loader', 'css-loader','sass-loader']
      },
     
      { test: /\.css$/, loader: 'style!css!resolve-url' },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename:'vendor.js'}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),

  ],
  devServer: {
        historyApiFallback: {
          rewrites: [
            { from: /^\/$/, to: '/index.html' }
          ]
        }}

}
