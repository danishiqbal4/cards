var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    devServer: {
        compress: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 3000
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devtool: 'eval-cheap-module-source-map',
    entry: './dev/js/index.tsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"],
            }
        ],
    }
};
