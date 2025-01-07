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

const main = async () => {
  await client.connect()
  const db = client.db('mytest')
  const cc = db.collection('cc')
  const res = await cc.find()
  console.log(await res.toArray())
}

main().finally(() => {
  client.close()
})