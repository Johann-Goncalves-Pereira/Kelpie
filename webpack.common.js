const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");

var MODE =
    process.env.npm_lifecycle_event === "prod" ? "production" : "development";
var filename = MODE == "production" ? "js/[name]-[hash].js" : "js/index.js";

module.exports = {
    entry:  './src/index.js',
    plugins: [
        new CleanWebpackPlugin()
    ],
    output: {
        filename: filename,
        publicPath: '/',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.elm', '.css', '.scss']
    },
    module: {
        noParse: /.elm$/,
        rules: [
            {
                test: /\.elm$/,
                exclude: [ /^Constants/, /elm-stuff/, /node_modules/ ],
                loader: "string-replace-loader",
                options: {
                  multiple: [
                    { search: "REPLACED_STRING", replace: "value" },
                  ]
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            // Use this template to get basic responsive meta tags
            template: "src/index.html",
            // inject details of output file at end of body
            inject: "body"
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/index-[hash].css',
        }),
    ],
}

