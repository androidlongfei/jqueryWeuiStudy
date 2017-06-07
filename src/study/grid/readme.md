# 知识点

## 1.hidden 使用

- [文档说明](http://blog.sina.com.cn/s/blog_60b35e830100uw3z.html)

### 功能1、隐藏溢出

在IE6下，·当子容器的宽高超出父容器时，父容器就会被撑开来。 要想解决这个问题，在父容器中除定义宽和高的值以外，还必须写overflow:hidden，这样就能把子容器的其它内容隐藏。 但是在火狐或者其他浏览器里面，当子容器这个div的宽度和高度都大于父容器这个div的时候，父容器并没有被内撑开而是依旧显示为我们指定的宽高。

- [例子](./test/hidden.html)

### 功能2、消除浮动

## 2.text-align使用

- [文档说明](http://www.w3school.com.cn/cssref/pr_text_text-align.asp)

text-align 属性规定元素中的文本的`水平对齐方式`。

该属性通过指定行框与哪个点对齐，从而设置`块级元素`内文本的水平对齐方式。

常用取值有:left,right,center

## 3.font-weight使用

- [文档说明](http://www.w3school.com.cn/cssref/pr_font_weight.asp)

font-weight 属性设置文本的粗细

该属性用于设置显示元素的文本中所用的字体加粗。数字值 400 相当于 关键字 normal，700 等价于 bold

常用取值有:normal,bold

## 4.css:before 和 css:after 使用

- [文档1](http://blog.csdn.net/u010737354/article/details/50835731)
- [文档2](http://www.w3school.com.cn/cssref/selector_before.asp)

css:before 选择器在被选`元素的内容前面`插入内容。

css:after 选择器在被选`元素的内容后面`插入内容。

注意插入的数据一般是在容器的padding内。

请使用 content 属性来指定要插入的内容。

- [例子](./test/css_before.html)

## 5.transform-origin 和 transform 使用

## 6.box-sizing使用

box-sizing属性可以为三个值之一：content-box（default），border-box，padding-box。

content-box，border和padding不计算入width之内

padding-box，padding计算入width内

border-box，border和padding计算入width之内

使用时：

-webkit-box-sizing: 100px; // for ios-safari, android

-moz-box-sizing:100px; //for 火狐

box-sizing:100px; //for other

注意:padding-box可能不准确

- [例子1](http://www.w3school.com.cn/cssref/pr_box-sizing.asp)
- [例子2](./test/box_sizing.html)
