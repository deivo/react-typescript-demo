const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    mode: "development",
    devtool: false,
    entry: "./src/index.tsx",
    output: {
        filename: "[name].[hash:5].js", // [hash:5] 获取前5位的哈希值
        path: path.join(__dirname, "dist"),
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: {
            index: "./index.html",
        },
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            "@": path.resolve("src"), // @ 可以指向 src 目录
        },
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.[hash:5].html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
};