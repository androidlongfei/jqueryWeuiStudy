# Flex用法

相关文档

- [Flex语法](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [Flex实例](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
- [flex取值](https://segmentfault.com/q/1010000004080910/a-1020000004121373)
- [demo](https://github.com/JailBreakC/flex-box-demo)

## flex布局容器(Container)实例

- [flex-direction](./test/_1_flex-direction.html)
- [flex-wrap](./test/_2_flex-wrap.html)
- [flex-flow](./test/_3_flex-flow.html)
- [justify-content](./test/_4_justify-content.html)
- [align-items](./test/_5_align-items.html)
- [align-content](./test/_6_align-content.html)


## flex布局项目(Item)实例

- [order](./test/item/_1_order.html)
- [flex-grow](./test/item/_2_flex-grow.html)
- [flex-shrink](./test/item/_3_flex-shrink.html)
- [flex-basis](./test/item/_4_flex-basis.html)
- [flex](./test/item/_5_flex.html)
- [align-self](./test/item/_6_align_self.html)

## flex参数解释

首先明确一点是， flex 是 flex-grow、flex-shrink、flex-basis的缩写。

1.flex 的默认值是以上三个属性值的组合。假设以上三个属性同样取默认值，则 flex 的默认值是 0 1 auto。

如下：

```
.item{
  flex:0 1 auto
}
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}
```

> 解释为当容器扩大时，所有item不会变大；
> 当容变小时，所有item会等比例缩小；
> item默认就是自己本身的大小

2.当 flex 取值为一个非负数字，则该数字为 flex-grow 值，flex-shrink 取 1，flex-basis 取 0%，如下是等同的：

```
.item {flex: 1;}
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}
```

>  解释为当容器扩大时，所有item会等比例扩大，直至撑满容器;
> 当容器缩小时，所有item会等比例缩小，直至撑满整个容器
> item默认就是自己本身的大小

3.当 flex 取值为一个长度或百分比，则视为 flex-basis 值，flex-grow 取 1，flex-shrink 取 1，有如下等同情况（注意 0% 是一个百分比而不是一个非负数字）：

```
.item-1 {flex: 0%;}
.item-1 {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}
.item-2 {flex: 24px;}
.item-1 {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 24px;
}
```

>  解释为当容器扩大时，所有item会等比例扩大，直至撑满容器;
> 当容器缩小时，所有item会等比例缩小，直至撑满整个容器
> item大小是设置的百分比值

4.当 flex 取值为 none，则计算值为 0 0 auto，如下是等同的：

```
.item {flex: none;}
.item {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
}
```

5.当 flex 取值为 auto，则计算值为 1 1 auto，如下是等同的：

```
.item {flex: auto;}
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
}
```
