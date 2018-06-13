####柯里化

#####不可或缺的curry
>概念：传递参数的一部分来调用一个函数，使其返回一个函数去处理剩下的参数
````
var add=(x)=>{
    return (y)=>{
        return x+y
    }
}
var increment=add(1)
increment(5)  //6
````

