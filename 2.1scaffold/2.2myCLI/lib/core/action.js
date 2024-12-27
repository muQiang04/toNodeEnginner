/**
 * 命令行问答交互 inquirer
 * prompt设置问题
 * then获取输入的答案
 */

const inquirer = require('inquirer').default
const downloadFun = require('./download')
const { framwork: choices, framworkUrl } = require('../../config')

const myAction = async (project, args) => {
  const name = 'framwork'
  const answers = await inquirer
   .prompt([
     {
       type: 'list',
       name,
       choices,
       message: '你选择的框架'
     }
    ])
  
  const framworkName = answers[name]
  const url = framworkUrl[framworkName]
  downloadFun(url, project) 
}

module.exports = myAction