#####mongo中的数据类型
- null
- boolean
- 数值 
  shell中默认为64位浮点数，想用整形可以使用NumberInt类：NumberInt(3)
- 字符串
- 日期 毫秒数，不储存时区
- 正则 /***/  
- 数组
- 内嵌文档 其实就是嵌套
- 对象Id 12字节的ID，文档的唯一标识 ObjectId()
- 二进制数据 在储存非UTF-8字符时，只能使用二进制
- 代码 查询和代码中可以包括任意js代码