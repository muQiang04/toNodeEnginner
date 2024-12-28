const fs = require('fs')
// 将数据流变成字符串
const queryString = require('querystring')

module.exports = {
  index(res, url) {
    fs.readFile(url, 'utf8', (err, data) => {
      res.write(data)
      res.end()
    })
  },
  png(res, url) {
    fs.readFile(url, (err, data) => {
      res.end(data)
    })
  },
  user(data) {
    const value = queryString.parse(data)
    console.log(value)
  }
}