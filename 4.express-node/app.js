const express = require('express')
const router = require('./routers/index')
const app = express()

// 路由模块化
app.use('/user', router)

//中间件处理404 ，没有匹配的路由
app.use((req, res, next) => {
  res.status(404).send('404 NOT FOUND')
})

// 中间见面处理储物信息
app.use((err, req, res, next) => {
  res.status(500).send('service error')
})
// 添加监听
app.listen('3000', () => {
  console.log('http://127.0.0.1:3000')
})