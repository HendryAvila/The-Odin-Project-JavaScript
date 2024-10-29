const loader = require("css-loader");
const HtmlWebpackClient = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "main.js"
    },


    devServer: {
        port: 5000
    },


    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }
        ]
    },


    plugins: [
        new HtmlWebpackClient({
            template: "./src/index.html"
        })
    ]
}