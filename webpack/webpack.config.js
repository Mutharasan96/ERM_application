const path = require('path')
const HTMLWebpackplugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, "..", './public/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ],
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|jpeg)$/,
                type:'asset/resource'
            },
            {
                test:/\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type:'asset/inline'
            },
        ],
    },
    output:{
        path:path.resolve(__dirname,'..','/build'),
        filename:'bundle.js'
    },
    mode:'development',
    plugins:[
        new HTMLWebpackplugin({
            template:path.resolve(__dirname,'..','./public/index.html')
        })
    ]

}