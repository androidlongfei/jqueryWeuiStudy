
# List中使用到的知识点

## transform Matrix

- [Matrix usage ](http://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/)

## -webkit-tap-highlight-color

这个属性只用于iOS (iPhone和iPad)。当你点击一个链接或者通过Javascript定义的可点击元素的时候，它就会出现一个半透明的灰色背景。要重设这个表现，你可以设置-webkit-tap-highlight-color为任何颜色。

想要禁用这个高亮，设置颜色的alpha值为0即可。

示例：设置高亮色为50%透明的红色:
```
-webkit-tap-highlight-color: rgba(255,0,0,0.5);
```
浏览器支持: 只有iOS(iPhone和iPad).

## :checked 用法

为所有选中的输入元素设置背景颜色：

```
input:checked {
    height: 50px;
    width: 50px;
}
```

`:checked` 选择器匹配每个选中的输入元素（仅适用于单选按钮或复选框）。


## '+' 与 '~'选择器
