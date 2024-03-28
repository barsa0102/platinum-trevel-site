const path = require("path")
const postCSSPlugins = [
require("postcss-import"),
require("postcss-mixins"),
require("postcss-simple-vars"),
require("postcss-nested"), 
require("autoprefixer") 
];
module.exports = {
    entry: "./app/assets/script/App.js",
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, "app"),
    },
    devServer:{
        port: 3000,
        host: "0.0.0.0",
        static: {
        directory: path.join(__dirname, "app")
        },
        hot: true,
        historyApiFallback: { index: "index.html" }
        },
// devServer: {
//     before: function(app, server) {
//         server_watch("./app/**/*.html");
//     },
//     static: { directory: path.join(__dirname, "app"), },
//     // contentBase: path.join(__dirname, "app"),
//     hot: true,
//     port: 3000,
// },                                                                              
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}],
            },
        ],
    },
};
