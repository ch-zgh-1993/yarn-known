/*
* @Author: Zhang Guohua
* @Date:   2020-04-10 14:53:10
* @Last Modified by:   zgh
* @Last Modified time: 2020-04-10 15:55:02
* @Description: create by zgh
* @GitHub: Savour Humor
*/


## start

- npm install -g // 将当前项目安装到全局, 进行测试



## content

- program.parse: 之前要声明所有的命令。
- version: -V, --version
- option:
    + 第一个参数是选项
        * '-v, -version <type>
    + 第二个选项：描述，在 help 时的显示的命令描述。
    + 第三个选项是默认值。也可以是处理方法(用户传入值，上一个值) 
        * 方法只会在当前命令，触发