* cli工具，算是一个脚手架模板，只要放入你自己的项目模板，就可以借助它快速搭建项目
* 所有的模板放在 `public/templates` 目录下面
* 目前只提供了创建项目的功能

## Install

```
$ git clone 
$ cd sm-cli
$ npm install
```
将自己的项目模板放入 `public/templates` 目录下面
```
$ npm link
```
当然也可以改个npm目前没有的包名，然后发布到npm使用
```
$ npm info cli_name
$ npm publish .
```

## Usage
* 将自己的模板放在 `public/templates` 目录下面
* 执行以下命令：

```js
$ sm list
// => show your template list

$ sm create [project]
// => create project in current workspace directory

$ sm -v
// => 0.1.0

$sm -h
// => help
```