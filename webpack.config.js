var webpack = require('webpack');
var path = require('path')

module.exports = {
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
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/]
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            }, {
                test: /\.less$/,
                loader: "style-loader!css-loader!autoprefixer-loader!less-loader",
                exclude: [/node_modules/, /public/]
            }, {
                test: /\.jsx$/,
                loader: "react-hot!babel-loader",
                exclude: [/node_modules/, /public/]
            }, {
                test: /\.gif$/,
                loader: "url-loader?limit=1000&imetype=image/gif-loader"
            }, {
                test: /\.jpg$/,
                loader: "url-loader?limit=1000&imetype=image/jpg-loader"
            }, {
                test: /\.png$/,
                loader: "url-loader?limit=1000&imetype=image/png-loader"
            }, {
                test: /\.svg/,
                loader: "url-loader?limit=26000&imetype=image/svg+xml"
            }, {
                test: /\.json$/,
                loader: "json-loader"
            },

        ]
    }

};