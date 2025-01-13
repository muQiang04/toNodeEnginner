const mongoose = require('mongoose')

async function main(params) {
  await mongoose.connect('mongodb://127.0.0.1:27017/rexpress-video')
}

main().then(res => {
  console.log('mongoose链接成功')
}).catch(err => {
  console.log('mongoose链接失败')
})

module.exports = {
  User: mongoose.model('User', require('./user'))
}