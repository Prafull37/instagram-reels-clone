const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
// const webpack = require("webpack");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports=(mode)=>{
    const isProduction = mode==="production";

    return {
        mode,
        entry:"./src/index.jsx",
        output:{
            path:path.resolve(__dirname,'dist'),
            ...( isProduction? {filename:'[name].[contenthash].js'}:{filename:"[name].[fullhash].js"}),
            clean:true
        },
       ...(!isProduction ? {devServer:{
            port:3001,
            open:true,
        }}:{}),
        devtool: 'source-map',
        resolve:{
            fullySpecified:false,
            extensions:[".mjs",'.js','.jsx'],
        },
        module:{
            rules:[
              {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
              },
              {
                test: /\.css$/, // styles files
                use: [MiniCssExtractPlugin.loader, {loader:"css-loader",options:{url:true,modules:true}}, ],
              }
            ]
        },
        plugins:[
            new HtmlWebpackPlugin({
                template: "public/index.html",
                inject:true,
            }),
            new MiniCssExtractPlugin()
        ],
        optimization:{
            splitChunks:{
                chunks:"all"
            }
        }
    }
}