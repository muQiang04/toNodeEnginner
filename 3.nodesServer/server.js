const http = require('http')
const fs = require('fs')
// 解析俩里面的参数
const urls = require('url')
// 将数据流变成字符串
const queryString = require('querystring')

const server = http.createServer()

server.listen('8080', () => {
  console.log('http://127.0.0.1:8080')
})

server.on('request', (req, res) => {
  const { url, method } = req
  if (method === 'GET') {
    // 请求头传参
    console.log(urls.parse(url, true).query)
    if (url === '/') {
      fs.readFile('./index.html', 'utf8', (err, data) => {
        res.write(data)
        res.end()
      })
    } else {
      fs.readFile('./logo2.jpg', (err, data) => {
        res.end(data)
      })
    }
  } else if(method === 'POST') {
    let data = ''
    req.on('data', d => {
      data += d
    })

    req.on('end', () => {
      const value = queryString.parse(data)
      console.log(value)
    })

    res.end()
  }
})