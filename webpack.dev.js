var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './example/es6/index.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/",
        filename: 'build.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: [/node_modules/], use: "babel-loader" }
        ]
    },
    devServer: {
        contentBase: './example/es6',
        historyApiFallback: true,
        noInfo: true
    },
    devtool: "#eval-source-map"
};
