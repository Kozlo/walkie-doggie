'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname, 'src/js/client.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name]-[hash].min.js',
        publicPath: '/'
    },
    externals: {
        "jquery": "jQuery"
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('[name]-[hash].min.css'),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|libs)/,
            loader: 'babel',
            query: {
                "presets": ["es2015", "stage-0", "react"]
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
            test: /\.jpe?g$|\.gif$|\.png$|\.otf$|\.xml$|\.ico$|\.txt$/,
            loader: "file?name=[path][name].[ext]"
        }, {
            test: /\.svg$/,
            loader: 'svg-loader?pngScale=2&name=[path][name].[ext]'
        }, {
            test: /\.xml?$/,
            loader: 'xml?name=[path][name].[ext]'
        }]
    },
    postcss: [
        require('autoprefixer')
    ]
};
