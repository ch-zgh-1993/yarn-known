#!/usr/bin/env node

const program = require('commander')
const download = require('download-git-repo')
const ora = require('ora')
const package = require('../package')

program
    .version(package.version)
    .option('-i webpack-simple, init webpack-simple', 'init webpack-simple')
    .parse(process.argv)

program.parse(process.argv)

let downloadUrl = 'ch-zgh-1993/webpack-simple'
const spinner = ora('正在从github下载...').start()
download(downloadUrl, 'webpack-simple', function (err) {
    if (!err) {
        spinner.clear()
        spinner.succeed(['项目创建成功!'])

    } else {
        console.log('发生错误')
        process.exit()
    }
})
