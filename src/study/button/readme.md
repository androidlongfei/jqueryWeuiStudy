# button

## CSS3 伪类选择符 E:not(s)

语法：

```
E:not(s){ sRules }
```

> 匹配不含有s选择符的元素E。

例子

```
table tbody tr:not(:first-child):not(:last-child) td  
{  
     text-align: right;  
}  
```

> 以上代码可以选择table表格中tbody部分非首个、非最后一个的tr，并设置其子元素td文本样式居右

单个的not写法：

```
/*选中非段落元素*/  
:not(p)  
{  

}  
```

多个not的写法

```
/*选中div里面非首个、非最后一个的中间p元素*/  
div p:not(:first-child):not(:last-child){  
}  
```

## line-height

- [line-height](http://www.zhangxinxu.com/wordpress/2009/11/css%E8%A1%8C%E9%AB%98line-height%E7%9A%84%E4%B8%80%E4%BA%9B%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%8F%8A%E5%BA%94%E7%94%A8/)
- [demo](./test/line_height.html)
- [mult](./test/mult_line_center.html)

css中起高度作用的是height以及line-height！如果一个标签没有定义height属性(包括百分比高度)，那么其最终表现的高度一定是由line-height起作用.

## text-decoration

- [定义文本的样式](http://www.w3school.com.cn/cssref/pr_text_text-decoration.asp)

## background-color 与background 的区别

background 可以设置 背景颜色、背景图片、定位等 ；

而background-color 只能设置 背景颜色 。
