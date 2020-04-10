#!/usr/bin/env node

const program = require('commander')
const download = require('download-git-repo')
const ora = require('ora')
const package = require('../package')

function hello (value, previous) {
    console.log(`今天是是周 ${new Date().getDay()}, 希望你继续努力，好运一只陪伴着你呀`)
}

function version() {
    console.log(package.version)
}

function initWebpackSimple() {
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
}

program
    .option('-hello', 'hello world', hello)
    .option('-v, -version', 'output the current version', version)
    .option('-i -ws, init webpack-simple', 'init webpack-simple', initWebpackSimple)

program.parse(process.argv)
