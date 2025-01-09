const express = require('express')
const app = express()
const { promisify } = require('util')
const fs = require('fs')
const reafFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

// 处理返回的值
app.use(express.urlencoded())
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.url)
  next()
})

app.get('/', async (req, res) => {
  try {
    const back = await reafFile('./db.json', 'utf8')
    const { users } = JSON.parse(back) || {}
    res.send(users)
  } catch (error) {
    res.status(500).json({ error })
  }
})

app.post('/', async (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  const body = req.body
  if (!body) {
    res.status(403).json({ error: '缺少用户信息' })
  } else {
    const back = await reafFile('./db.json', 'utf8')
    const backObj = JSON.parse(back)
    const { users }  = backObj || {}
    body.id = (users || []).length + 1
    backObj.users.push(body)
    const addUserArrStr = JSON.stringify(backObj)
    try {
      const w = await writeFile('./db.json', addUserArrStr)
      if (!w) {
        res.status(200).send({
          msg: '添加成功'
        })
      }
    } catch (error) {
      res.status(500).json({ error })
    }
  }
})

app.put('/:id', async (req, res) => {
  try {
    const userId = req.params.id 
    const back = await reafFile('./db.json', 'utf8')
    const backObj = JSON.parse(back)
    const { users }  = backObj || {}
    const flag = users.find(item => item.id = userId * 1)
    if (!flag) {
      res.status(403).json({ 
        error: '用户不存在' 
      })
    } else{
      const body = { 
        id: userId * 1,
        ...backObj.users[userId * 1],
        ...req.body
      }
      backObj.users[userId * 1] = body
      const updateUserArrStr = JSON.stringify(backObj)
      const w = await writeFile('./db.json', updateUserArrStr)
      if (!w) {
        res.status(200).send({
          msg: '修改成功'
        })
      }
    }
  } catch (error) {
    res.status(500).json({ error })
  }
})

// 添加监听
app.listen('3000', () => {
  console.log('http://127.0.0.1:3000')
})