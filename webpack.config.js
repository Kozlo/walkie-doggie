'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'src/js/client.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].min.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new ExtractTextPlugin('[name]-[hash].min.css')
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|libs)/,
            loader: 'babel',
            query: {
                "presets": ["react", "es2015", "stage-0", "react-hmre"]
            }
        }, {
            test: /.*\/libs\/.*\.js$/,
            loader: 'file?name=[name].[ext]'
        }, {
            test: /\.json?$/,
            loader: 'json?name=[path][name].[ext]'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream&name=[path][name].[ext]"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file?name=[path][name].[ext]"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml&name=[path][name].[ext]"
        }, {
            test: /\.jpe?g$|\.gif$|\.png$|\.otf$|\.ico$|\.txt$/,
            loader: "file?name=[path][name].[ext]"
        }, {
            test: /\.svg$/,
            loader: 'svg-loader?pngScale=2&name=[path][name].[ext]'
        }, {
            test: /\.xml?$/,
            loader: 'xml?name=[path][name].[ext]'
        }]
    }
};


/*
module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
};
*/
