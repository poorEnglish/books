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
注：作者这里加载的lodash库curry函数和现在的lodash好像有点不同，现有库的lodash_curry一开始的参数是一个函数，函数标明接受的入参。返回的函数会暂存接受的参数，参数未到标明的入参数量时返回函数，直到参数够了再执行

