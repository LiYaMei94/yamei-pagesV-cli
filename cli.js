#!/usr/bin/env node
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');



const substring = (strs) => {
  let index = strs.lastIndexOf("templates") + "templates".length + 1
  let str = strs.substring(index, strs.length)
  return str
}

/**
 * 递归获取指定目录下的所有的文件路径
 * @param {*} entry 
 */
const readDir = (tempDir, outputDir, temp, answers) => {
  const dirInfo = fs.readdirSync(tempDir)
  let res = temp || [];
  dirInfo.forEach(item => {
    const location = path.join(tempDir, item)
    const info = fs.statSync(location)
    // 判断当前的path是目录还是文件，如果是目录就创建文件夹，如果是文件就将当前的路径存入路径的数组中
    if (info.isDirectory()) {
      // 这里要剔除掉'.gitignore'，会被认为是目录
      if (item !== '.gitignore') {
        // 创建文件夹,名称是在命令行输入的answers
        fs.mkdirSync(path.join(outputDir, answers.name));
      }
      // 递归调用readDir将指定目录下的所有文件都获取到
      readDir(location, outputDir, res, answers);
    } else {
      // console.log(`location===${location}`)
      res.push(location)
    }
  })
  return res
}



/**
 * node中命令行询问用户的是inquirer:yarn add inquirer
 *
 */
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Your Page name',
    default: `page`
  },
  {
    type: 'input',
    name: 'dirname',
    message: 'Your Page dirname',
    default: ``
  },
]).then(answers => {

  // console.log(answers)// { name: 'page', dirname: 'pages' }

  /**
   * 获取模板目录
   * path.join() 方法会将所有给定的 path 片段连接到一起（使用平台特定的分隔符作为定界符），然后规范化生成的路径。
   * 长度为零的 path 片段会被忽略。 如果连接后的路径字符串为长度为零的字符串，则返回 '.'，表示当前工作目录。
   * __dirname指的是当前文件所在文件夹的绝对路径
   */
  console.log(__dirname)
  const tempDir = path.join(__dirname, 'templates')

  /**
   * 输出的目标目录是命令行的那个目录中执行就是那个目录
   * process.cwd() 方法会返回 Node.js 进程的当前工作目录
   */


  //  输出目录是用户输入的目录或者是运行该命令的目录
  const outputDir = path.join(process.cwd(), answers.dirname === '' ? '' : `src/${answers.dirname}`)
  const lastIndex = outputDir.lastIndexOf('\\')

  // 获取当前目录的文件夹名
  const fileName = outputDir.substring(lastIndex + 1, outputDir.length)

  //拿到tempDir下的所有目录
  const files = readDir(tempDir, outputDir, [], answers)

  //遍历写入文件
  for (const item of files) {
    // 拿到temp文件夹下的所有文件路径
    let str = substring(item)

    // 读取文件
    ejs.renderFile(path.join(tempDir, str), answers, (err, res) => {
      if (err) throw err
      // 输出的文件名是用户在命令行输入的name，所以将temp替换成answers.name
      const outputFileName = str.replace(/temp/g, answers.name)
      // 将得到内容写入目标目录的各个文件中
      fs.writeFileSync(path.join(outputDir, outputFileName), res)
      // console.log(res)
    })
  }
});


