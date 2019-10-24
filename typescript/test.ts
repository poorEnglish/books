//枚举 会默认给数字
enum Color { Red = 3, Blue = 5, Brown }
let c: Color = Color.Blue

//接口，单纯的描述数据结构，没有继承的类
interface Sconfig {
    color?: number;
    width?: number;
    readonly name: string
    isHasj?:boolean
}

interface Area {
    color?: number;
    area?: number
}

//元组 允许表示一个已知元素数量和类型的数组。

let x:[string,boolean,number]

//已经定义好的类型和顺序不能乱
x=['sd',false,21]

//超过表示长度的地方可以添加任意定义过的类型
x[5]='dsa'; x[6]=true



//函数，简单的书写只是比普通js方法多了参数类型，增加了返回类型
function getArea(config: Sconfig): Area {
    let newArea = { color: Color.Red, area: 100 };
    if (config.color) newArea.color = config.color;
    if (config.width) newArea.area = Math.pow(config.width, 2);
    return newArea
}