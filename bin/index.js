#!/usr/bin/env node

const program = require('commander');

const argv = process.argv;
const filePath = __dirname;
const currentPath = process.cwd();

// console.log(argv)
// console.log(filePath)
// console.log(currentPath)

program
  .version(require('../package.json').version, '-v, --version'); // 定义版本

program
  .option('-m --module', 'create new module'); // 定义命令选项

program
  .command('create [project]') // 定义命令
  .description('create your project')
  .action(function (project) {
    require('../lib/create')(project);
  });

program
  .command('list')
  .description('list all templates')
  .action(() => {
    require('../lib/list')();
  });


program.parse(argv);
