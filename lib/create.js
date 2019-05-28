const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const ora = require('ora');
const chalk = require('chalk');
const copy = require('./utils/copy');

const filePath = __dirname;
const currentPath = process.cwd();

module.exports = function (project) {
  const projectPath = path.resolve(currentPath, project);
  const templatePath = path.resolve(filePath, '../public/templates')
  const templates = fs.readdirSync(templatePath);

  inquirer
    .prompt([
      {
        name: 'template',
        type: 'list',
        message: '请选择项目模板',
        choices: templates
      }
    ])
    .then(async (answers) => {
      // console.log(answers);

      const spinner = ora('\n 开始生成项目，请等待...');
      spinner.start();

      // 创建项目
      fs.mkdirSync(projectPath);

      // 复制项目模板中的内容到新的项目
      copy(path.resolve(templatePath, answers.template), projectPath);

      spinner.stop();

      console.log(chalk.green(`\n √ ${project} 项目生成完毕!`));
      console.log(chalk.green(`\n cd ${project} && npm install \n`));

    });
}
