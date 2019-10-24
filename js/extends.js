function Person1(name,age){
    this.name = name;
    this.age = age;
    return 2
}
// {name:22,age:22}  检测返回值不是object类型，仍返回新创建的对象
console.log(new Person1(22,22))