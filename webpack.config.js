const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');

module.exports={
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, "./dist/index.js"),
        filename: "index.js",
        publicPath: "/dist  "
    },
    externalsPresets: {node:true},
    externals: [nodeExternals()],
    module:{
        rules:[
            {
                test: /\.(js|jsx)?$/,
                exclude: /node-modules/,
                use:  {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test: /\.css?$/,
                use:  {
                    loader: "css-loader"
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
    ]

}
