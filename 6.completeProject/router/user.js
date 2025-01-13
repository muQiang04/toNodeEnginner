const express = require('express')
const controller = require('../controller/user')

const router = express.Router()

router
  .post('/register', controller.register)
  .get('/list', controller.list)
  .delete('/del', controller.delete)

module.exports = router