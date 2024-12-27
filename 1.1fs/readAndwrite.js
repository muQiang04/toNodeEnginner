const fs = require('fs')

/**
 * 读取文件
 * params1 文件路径
 * params2 字符编码
 * params3 回调函数
 */ 
fs.readFile('./a.txt', 'utf8', (err, data) => {
  console.log('错误信息：', err)
  console.log('文件内容：', data)
})

/**
 * 写入文件
 * params1 文件路径
 * params2 写入内容
 * params3 回调函数
 */

fs.writeFile('./a.txt', '写入文件', (err) => {
  if (!err) {
    console.log('写入成功')
  }
})