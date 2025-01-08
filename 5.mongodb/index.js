/**
 * 链接mongodb
 * 1.引入 MongoClient
 * 2.new 实例化MongoClient
 * 3.connect链接mongodb
 * 4.db链接数据库
 * 5.collection链接数据集
 * 6.查找数据
 */
const { MongoClient } = require('mongodb')

const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url) 

const clientFun = async c => {
  await client.connect()
  const db = client.db('mytest')
  return db.collection(c)
}

const main = async () => {
  const c = await clientFun('cc')
  
  // const res = await c.insertOne({ x: 4, y: 10})
  // console.log(res)
  // const updateRes = await c.updateOne({ x: {$gt: 2 }}, {$set: {x: 9}})
  // console.log(updateRes)
  const delRes = await c.deleteOne({x: {$gt: 3}})
  console.log(delRes)
  const res = await c.find()
  console.log(await res.toArray())
}

main().finally(() => {
  client.close()
})