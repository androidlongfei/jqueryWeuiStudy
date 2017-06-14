# 表单控件

## word-wrap 和 word-break

- [相关资料1](http://www.cnblogs.com/2050/archive/2012/08/10/2632256.html)
- [相关资料2](http://www.zhangxinxu.com/wordpress/2015/11/diff-word-break-break-all-word-wrap-break-word/)
- [demo](./test/word_break.html)

1.解释：

word-wrap:用来表明是否允许浏览器在单词内进行断句，这是为了防止当一个字符串太长而找不到它的自然断句点时产生溢出现象。

word-break:标明怎么样进行单词内的断句。

2.用法:

```css
.test{
  word-wrap: break-word;
  word-break: break-all;
}
```

共同点:

```
word-wrap:break-word与word-break:break-all共同点是都能把长单词强行断句
```

不同点:

```
word-wrap:break-word会首先起一个新行来放置长单词，新的行还是放不下这个长单词则会对长单词进行强制断句；

而word-break:break-all则不会把长单词放在一个新行里，当这一行放不下的时候就直接强制断句了
```

## outline

- [w3school](http://www.w3school.com.cn/cssref/pr_outline.asp)
- [相关资料](http://www.zhangxinxu.com/wordpress/2010/01/%E9%A1%B5%E9%9D%A2%E5%8F%AF%E7%94%A8%E6%80%A7%E4%B9%8Boutline%E8%BD%AE%E5%BB%93%E5%A4%96%E6%A1%86%E7%9A%84%E4%B8%80%E4%BA%9B%E7%A0%94%E7%A9%B6/)
- [demo](./test/outline.html)

1.解释

outline （轮廓）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。

注释：`轮廓线不会占据空间`，也不一定是矩形。

2.用法

```css
.test{
  outline: red dashed thin;
}
```

> outline-color:轮廓线的颜色(red:红色)

> outline-style:轮廓线的样式（dashed:虚线）

> outline-width:轮廓线的宽度(thin:细轮廓)

## appearance

将默认的select选择框样式清除

```
appearance:none;  
  -moz-appearance:none;  
  -webkit-appearance:none;
```

## box-shadow

- [给div加阴影效果](http://blog.csdn.net/freshlover/article/details/7610269)

## transition
