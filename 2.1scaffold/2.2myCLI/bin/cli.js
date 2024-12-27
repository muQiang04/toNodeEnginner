#! /usr/bin/env node

// 获取该环境下的参数
// console.log(process.argv)

const { program }  = require('commander')

const help = require('../lib/core/help')
help(program)

const myCommander = require('../lib/core/myCommander')
myCommander(program)

/**
 * 使用commander来处理参数
 * parser处理参数 process.argv: 输入的命令
 */
program.parse(process.argv)