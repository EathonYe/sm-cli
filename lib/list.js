const chalk = require('chalk');
const ora = require('ora');
const fs = require('fs');
const path = require('path');

module.exports = () => {
  const spinner = ora('\n ' + chalk.yellow('正在查询模版列表，请等待...'));
  spinner.start();

  try {
    const paths = fs.readdirSync(path.resolve('./public/templates'));

    spinner.stop();

    console.log(chalk.green('\n可用的模版列表：\n'));
    paths.forEach(p => {
      console.log(
      '  ' + chalk.yellow('★') +
      '  ' + chalk.blue(p));
    });
  } catch (err) {
    if (err) {
      console.log(chalk.red('\n查询模版列表失败'));
      console.log(chalk.red(err));
      process.exit();
    }
  }
}