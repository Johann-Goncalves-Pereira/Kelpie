const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.elm$/,
                exclude: [/elm-stuff/, /node_modules/],
                use: [
                    { loader: 'elm-hot-webpack-loader' },
                    {
                        loader: 'elm-webpack-loader',
                        options: {
                            debug: true,
                            verbose: true,
                            forceWatch: true,
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    devServer: {
        disableHostCheck: true,
        inline: true,
        stats: "errors-only",
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true,
        overlay: true,
        hot: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            ENV: '"Development mode!"',
        })
    ]
})

