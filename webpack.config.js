"use strict";
let webpack = require("webpack");

module.exports = {
    entry: "./app/index.ts",
    output: {
        path: "/public/scripts/",
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: "ts-loader", exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ["", ".tsx", ".ts", ".js", ".jsx"] 
    },
    externals: {
        // "underscore": "_"
    },
    target: "web",
    cache: true,
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
    ],
    devtool: "inline-source-map",
    // devServer is "webpack-dev-server" command running
    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true,
        contentBase: "./public"
    }
}