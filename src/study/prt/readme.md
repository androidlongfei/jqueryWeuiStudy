# mysql分页取数据

limit是mysql的语法：

```shell
select * from table limit m,n
```

> 其中m是指记录开始的index，从0开始，表示第一条记录 n是指从第m+1条开始，取n条。

例子:

```shell
select * from tablename limit 2,4
```

> 即取出第3条至第6条，4条记录
