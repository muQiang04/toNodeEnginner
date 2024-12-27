/**
 * 使用commander来处理参数
 * 1.通过require引入program
 * 2.通过option设置公告，接受两个参数 params1 命令，params2 描述
 * 3.parser处理参数 process.argv: 输入的命令
 */
const help = (program) => {
  program.option('-f --framwork <framwork>', '设置框架')
}

module.exports = help