---
title: '主题'
---

**样式变量**

- solar-vue 使用了 Less 对样式进行预处理，并内置了一些样式变量，通过替换样式变量即可定制你自己需要的主题。
- 下面是一些基本的样式变量，所有可用的颜色变量请参考配置

```less
// colors
@text-color: #323233;
@border-color: #ebedf0;
@active-color: #f2f3f5;
@background-color: #f8f8f8;
@background-color-light: #fafafa;
```

**定制方式**

- solar-vue 的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整

- 我们使用 modifyVars 的方式来覆盖变量。

```javascript
npm install style-loader css-loader less less-loader babel-plugin-import -D

// 在 babel.config.js 中配置按需引入样式源文件
// 注意：babel6 不支持按需引入样式，请手动引入
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'Solar-Vue',
        libraryDirectory: 'lib',
        style: name => `${name}/style/less`
      },
      'Solar-Vue'
    ]
  ]
};
```

**手动引入**

```javascript
// 手动引入组件的样式源文件
import Button from 'Solar-Vue/lib/button'
import 'Solar-Vue/lib/button/style/less'
```

**使用 less 提供的 modifyVars 即可对变量进行修改，下面是参考的 webpack 配置。**

```javascript
// webpack.config.js
module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        {
          loader: 'less-loader',
          options: {
            modifyVars: {
              // 直接覆盖变量
              'text-color': '#111',
              'border-color': '#eee'
              //引入自定义变量文件
              'hack': `true; @import "your-less-file-path.less";`
            }
          }
        }
      ]
    }
  ]
};



```
