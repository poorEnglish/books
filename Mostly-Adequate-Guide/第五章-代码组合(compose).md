####代码组合
#####函数饲养
````
var compose=function(f,g){
    return function(x){
        return f(g(x))
    }
}
````
组合看起来就像在饲养函数，选择两个函数结合，生成一个新的函数。

````
var toUpperCase=function(x){return x.toUpperCase()}
var exclaim=function(x){return x+'!'}
````


 >   嵌套函数:
````
var shout=function(x){
    return exclaim(toUpperCase(x))
}
````
>组合:
````
var shout=compose(exclaim,toUpperCase)
````

相比于嵌套函数，compose创建了从右到左的数据流，可读性更高。

左倾：让代码从右到左运行而不是由内而外
举个栗子：
````
let head=function(x){
    return x[0]
}

let reverse=reduce((acc,x)=>{
    return [x].concat(acc)
},[])

var last=compose(head,reverse);
````
>(ps:这个组合起来的last函数根本就是渣渣好么～ 对了，18年世界杯，啤酒类个股涨了不少，开赛后下跌，这个要记住，22年赚波钱)

last函数虽然性能不高，但是顺序很明显，从右到左也更能反应数学上的意义（组合的概念直接来自于数学课本）

#####组合的另一个特性：结合律
````
var associative=compose(f,compose(g,h))==compose(compose(f,g),h); //true
````
结合律意味这如何组合分组的结果都是相同的，一大好处就是任何一个函数分组都可以被拆开来，再以自己的组合方式打包在一起 例如：
````
var last = compose(head, reverse);
var angry = compose(exclaim, toUpperCase);
var loudLastUpper = compose(angry, last);
````

####pointfree

pointfree模式(感觉可以翻译为参数无关)：
   函数无需提及将要操作的数据是什么
````
// 非 pointfree，因为提到了数据：word
var snakeCase = function (word) {
  return word.toLowerCase().replace(/\s+/ig, '_');
};

// pointfree
var snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);

````
主要作用：减少不必要的命名，保持代码的简洁/通用。

####总结
组合像一系列管道那样把不同的函数联系在一起，数据就可以也必须在其中流动
我们认为组合是高于其他所有原则的设计原则，这是因为组合让我们的代码简单而富有可读性
