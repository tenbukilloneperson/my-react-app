// 基于Express 的 web 服务器
const express = require('express')
const compression = require('compression')
// 创建一个服务器
const app = express()
// 在静态资源托管之前开启 网络传输压缩  中间件
app.use(compression())
//托管静态资源
app.use(express.static('../../build'))

// 开启一个端口
app.listen('1000',() => {
    console.log('Web server is runing at http://127.0.0.1:1000')
})