const express = require('express')

// 迎来接收 x-www-form-urlencoded 形式的 参数
const bodyParser = require('body-parser')

// 使用 formidable 来解析 form-data 的的post的请求
const formidable = require('formidable')

const app = express()

app.use(bodyParser({ extended: false }))

// 跨域问题
const cors = require('cors')
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// 用来接收get请求 (用 req.query 来获取查询参数)
app.get('/',(req,res) =>{
    res.send({
        status: 200,
        data: {
            msg: '访问服务器成功！',
            query: req.query
        }
    })
})

// 用来处理 POST 请求
app.post('/user/list',(req,res) => {
    // 如果通过 post 向服务器提交 查询字符串 参数 。在服务端直接使用req.query
    // res.send({msg: 'ok', status: 200, data: req.query})

    //  通过 x-www-from-urlencoded 形式传参  使用了中间件之后 post 请求的参数保存在 req.body 
    // res.send({ status: 200,data: {msg: 'OK',query: req.body }

    // 通过请求体向服务器提交参数
    const form = new formidable.IncomingForm()
    form.parse(req,(err, fields, files) => {
        if (err) return res.send({status: 500, msg: '服务端解析错误'})
        console.log(fields) // 普通的文件
        console.log(files)
        res.send({status:200,data:{fields,files}})

    })
})

// 监听 1001 端口
app.listen('1001',() => {
    console.log('Api server is running at http://127.0.0.1:1001')
})