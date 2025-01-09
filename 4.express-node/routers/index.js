const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.url + '-' + req.method)
  res.send('/index')
})

router.get('/list', (req, res) => {
  console.log(req.url + '-' + req.method)
  res.send('/list')
})

module.exports = router