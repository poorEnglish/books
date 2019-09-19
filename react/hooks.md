
##Hook

##### useState

- useState 在'setState'操作是替换，而不是Object.assign
&nbsp;

- Hook是一种复用状态逻辑的方式，不复用state本身(即定义在Hook内的state在每一次调用时，都不一样)。即便在同一个组件内，多次调用同一个Hook也一样
&nbsp;

- userState的参数既可以是正常数值、对象，也可以是返回初始值的函数，这个在初始值需要复杂计算的时候比较好用

##### useEffect

- 使用useEffect时，第一个参数一般传入匿名箭头函数，这会使得每一次渲染后都会传给effect一个新的函数去执行
&nbsp;

- 在返回一个函数后，这个函数会在执行第二次及以后的effect和componetWillUnMount前执行。
&nbsp;

- effect优化：useEffect的第二个参数是effect是否执行的参照物，若只想执行一次，就传入空数组，若是根据某个/某些参数执行，就把这些参数写在数组内传入。useEffect会根据数组内数据是否变动决定是否执行effect

##### Hook规则

1、 Hook应该只在react函数式组件内调用

2、 Hook应该在组件顶层调用(不要在循环、条件语句内调用Hook)

3、React是根据Hook执行顺序，记录对应的正确的state与useState的关系，在循环和条件语句内执行Hook可能会使得顺序不一致而导致其他错误

##### 自定义Hook

- 自定义hook必须使用use开头，这样的约定命名让‘liner’插件在使用是查找到bug  
 &nbsp;

- 
