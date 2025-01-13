const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const route = require('./router')

const app = express()

app.use(express.json())
app.use(express.urlencoded())
//解决跨域
app.use(cors())
// 日志管理
app.use(morgan('dev'))
app.use('/api/v1', route)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`正式启动服务: http://127.0.0.1:${PORT}`)
})