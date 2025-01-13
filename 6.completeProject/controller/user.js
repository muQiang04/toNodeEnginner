const { User } = require('../model')
exports.list = async (req, res) => {
  res.send('查询用户列表')
}

exports.delete = async (req, res) => {
  res.send('删除用户')
}

exports.register = async (req, res) => {
  const userModel = new User(req.body)
  const dbBack = await userModel.save()
  res.status(201).json(dbBack)
}