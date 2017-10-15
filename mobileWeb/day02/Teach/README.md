# day 02 --less&媒体查询
## less是什么
  LESS是CSS预处理器，可为网站启用可定制，可管理和可重复使用的样式表。LESS是一种动态样式表语言，可以扩展CSS的功能。LESS也是跨浏览器友好的。

  CSS预处理器是一种脚本语言，可以扩展CSS并将其编译成常规的CSS语法，以便您可以通过Web浏览器读取它。它提供了诸如变量，函数，混合和操作等功能，允许您构建动态CSS。
## 为什么要使用less
 - LESS轻松生成可在浏览器中运行的CSS。
 - LESS使您能够通过使用嵌套来编写更好和有组织的代码。
 - 通过使用变量可以更快地实现维护。
## less如何使用
  - 在webstorm中的使用方法
  - 在vscode中的使用方法
  - 用考拉编译less到css
## less语
  - 变量
    ```
    a,
    .link {
      color: #428bca;
    }
    .widget {
      color: #fff;
      background: #428bca;
    }
    ```
  - 注释
    ```
    /*
    这是一个注释块
    */
    // 这是注释行
    ```
  - 混合器
    ```
    .clearfix {
      display: block;
      zoom: 1;
    }
    .clearfix:after {
      content: " ";
      display: block;
      font-size: 0;
      height: 0;
      clear: both;
      visibility: hidden;
    }
    ```
  - 嵌套规则
  - 运算
  - 函数
  - 导入


## 什么是媒体查询
  - 媒体查询是CSS3的中一个强大的工具。它是包含媒体类型以及零或多个检查特定媒体特征条件的表达式。
    表达式描述了媒体特征, 最终会被解析为 true 或 false.如果是true 那么会执行  如果是false 就不会执行了.
    要做响应式(媒体查询)  还要做rem布局(需要用到媒体查询)
    通过不同的判别条件识别不同的设备 以给该设备应用不同的样式
## 如何使用媒体查询
  - link标签中的CSS媒体查询
    用link方式引入的时候 media属性中 放着媒体查询的条件  如果条件成立 那么应用该样式表
    <link rel="stylesheet" href="./link-ipone5.css" media="screen and (width: 320px)">
  - 样式表中的@media关键字引入CSS媒体查询
      @media 条件 {
        在该条件成立的时候 应用的样式
      }
## 媒体特性
  - width 视口的宽度
  - height 视口的高度
  - device-width 设备屏幕宽度
  - device-height 设备屏幕高度
  - orientation 横屏竖屏 
    - portrait （纵向）
    - landscape（横向）

## 如何解决媒体查询的兼容性问题
  Respond.js 是一个极小的增强 Web 浏览器的 JavaScript 库，使得原本不支持 CSS 媒体查询的浏览器能够支持它们。该脚本循环遍历页面上的所有 CSS 引用，并使用媒体查询分析 CSS 规则。然后，该脚本会监控浏览器宽度变化，添加或删除与 CSS 中媒体查询匹配的样式。最终结果是，能够在原本不支持的浏览器上运行媒体查询。
