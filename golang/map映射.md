- 映射是一个集合，以类似处理数组和切片的方式迭代映射中的元素，映射是无序的。其实现使用散列表（哈希表）

- 创建和初始化
  - `dict:=make(map[string] int) `
  - `dict:=map[string] string {"red":"#da1337","orange":"#e95a22"}`
  - 映射字面量：`dict:=map[[]string] int {}`

- 映射的键可以为任何值，比如内置类型和结构类型，只要改类型可用==比较。（切片、函数以及包含切片的结构类型因为具有引用语义，不能作为键使用）  

- 使用
  -  存值 
  ```go
      colors:=map[string] string {}
      colors["Red"]="#da1337"
  ```
  - 声明一个nil的映射不能用于存储键值对 `var colors map[string] string `,此时往colors内存值会报错

  - 取值
    取值时可以返回值和是否存在，也可以只接受值
    ```go
      value ,exist:=colors["blue"]
      or  value:=colors["blue"]
      //go语言在不存在键对应的值时，会返回对应值类型的零值
    ```
  
  - 函数间传递映射，传递的是引用
     
