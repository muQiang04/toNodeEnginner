/**
 * 处理自定义指令选项
 * command设置自定义命令
 * alias设置别名
 * description 设置描述
 * action 写需要执行的逻辑
 */

const myAction = require('./action')

const myCommander = (program) => {
  program
        .command('create <project> [other......]')
        .alias('cre')
        .description('自定义指令')
        .action(myAction)
}

module.exports = myCommander