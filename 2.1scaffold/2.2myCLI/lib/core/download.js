// 下载远程代码
const download = require('download-git-repo')
//设置loading
const ora = require('ora')
// 设置输出样式
const chalk = require('chalk')

const downloadFun = (url, project) => {
  const spinner = ora().start()
  spinner.text = '正在下载代码......'
  download(`direct${ url }`, project, { clone: true}, err => {
    if (err) {
      spinner.fail(`${chalk.red('下载') + chalk.blue.bold('失败')}`)
    } else {
      spinner.succeed('下载成功')
    }
  })
}

module.exports = downloadFun