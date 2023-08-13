const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports=(mode)=>{
    return {
        mode,
        entry:"./src/index.jsx",
        output:{
            path:path.resolve(__dirname,'dist'),
            filename:'bundle.[hash].js',
        },
        devServer:{
            port:3001,
            open:true,
        },
        devtool: 'source-map',
        resolve:{
            fullySpecified:false,
            extensions:[".mjs",'.js','.jsx']
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
                use: ["style-loader", {loader:"css-loader",options:{url:true,modules:true}}, ],
              }
            ]
        },
        plugins:[
            new HtmlWebpackPlugin({
                template: "public/index.html",
            })
        ]
    }
}