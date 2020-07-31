# yamei-pagesV-cli 简介

在`vue`项目中快速创建一个组件

# 目录结构

```
yamei-pagesV-cli
├─.gitignore
├─cli.js —— cli 代码
├─package-lock.json
├─package.json
├─README.md
├─yarn.lock
├─templates —— 模板中的内容可以根据自己需要的基础代码修改
| ├─temp
| | ├─temp.scss
| | ├─temp.vue
| | └tempTS.ts
```

# 使用

1. 克隆代码到本地

   ```
   git clone https://github.com/LiYaMei94/yamei-pagesV-cli.git
   ```

2. 安装依赖

   ```
   yarn install/npm install
   ```

3. 将该命令`link`到全局

   ```
   yarn link/npm link
   ```

   ![link成功](https://img-blog.csdnimg.cn/20200731154221516.png)

   完成之后可以在本地找到该命令：

   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200731155929855.png)

   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200731155932214.png)

4. 创建组件

   1. 输入要创建组件的目录，例如：`components`

      - 操作：输入完成之后按`enter`键

        ![输入要创建组件的目录图示1](https://img-blog.csdnimg.cn/20200731155438934.png)
        ![输入要创建组件的目录图示2](https://img-blog.csdnimg.cn/20200731155026646.gif)

   2. 不输入要创建组件的目录，直接在要创建的目录下运行该命令

      - 操作：输入完成之后按`enter`键

        ![不输入要创建组件的目录图示1](https://img-blog.csdnimg.cn/20200731155436272.png)
        ![不输入要创建组件的目录图示2](https://img-blog.csdnimg.cn/20200731155026723.gif)
