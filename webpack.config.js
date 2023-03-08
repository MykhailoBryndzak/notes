var webpack = require('webpack');
var path = require('path')

module.exports = {
    mode: 'development',
    entry: "./client/main.js",
    output: {
        path: path.resolve(__dirname, 'server/public/build'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js']
    },
    // Activate source maps for the bundles in order to preserve the original
    // source when the user debugs the application
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /public/],
                use: {
                    loader: "babel-loader",
                }
            }, {
                test: /\.css$/,
                exclude: [/node_modules/, /public/],
                use: [
                    {loader:  "style-loader"},
                    {loader: "css-loader"},
                ]
            }, {
                test: /\.less$/,
                exclude: [/node_modules/, /public/],
                use: [
                    {loader:"style-loader"},
                    {loader:"css-loader"},
                    {loader:"less-loader"}
                ]
            }, {
                test: /\.jsx$/,
                exclude: [/node_modules/, /public/],
                use: [
                    {loader:"react-hot"},
                    {loader:"babel-loader"}
                ]
            }, {
                test: /\.gif$/,
                use: [
                    {loader:"url-loader"},
                ]
            }, {
                test: /\.jpg$/,
                use: [
                    {loader:"url-loader"},
                ]
            }, {
                test: /\.png$/,
                use: [
                    {loader:"url-loader"},
                ]
            }, {
                test: /\.svg/,
                use: [
                    {loader:"url-loader"},
                ]
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, 'server/public'),
        compress: true,
        port: 9000,
        open: true
    }
};