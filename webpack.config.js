var webpack = require('webpack');

module.exports = {
    entry: "./client/main.js",
    output: {
        path: __dirname + "public/build/",
        publicPath: "build/",
        filename: "bundle.js"
    },
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
                loader: "react-hot!babel",
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