const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    mode: 'development',

    plugins: [
        new HtmlPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    
    module: { // 解析第三方模块
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            // 要为普通的css文件开启模块化
            { test: /\.css$/, use: ['style-loader', 'css-loader?modules']}
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.join(__dirname, './src')
        }
    }
}