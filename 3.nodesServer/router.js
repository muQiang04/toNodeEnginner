// 解析俩里面的参数
const urls = require('url')

const fs = require('fs')
const controller = require('./controller')

module.exports = (req, res) => {
  const { url, method } = req
  if (method === 'GET') {
    // 请求头传参
    console.log(urls.parse(url, true).query)
    if (url === '/') {
      controller.index(res, './index.html')
    } else {
      controller.png(res, './logo2.jpg')
    }
  } else if(method === 'POST') {
    let data = ''
    req.on('data', d => {
      data += d
    })

    req.on('end', () => {
      controller.user(data)
    })

    res.end()
  }
}