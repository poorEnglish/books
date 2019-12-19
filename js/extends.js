
// function Person1(name, age) {
//   this.name = name;
//   this.age = age;
//   return 2
// }
// {name:22,age:22}  检测返回值不是object类型，仍返回新创建的对象
// console.log(new Person1(22, 22))


//原型链继承
/**
 * 子对象实例的_protp_指向父对象的实例，父对象实例的_proto_指向父对象的protoType
 */

// function SuperProto() {
  // this.name = 'nick';
  // this.constructor = SuperProto;
// }

// function SubExtend(age){
//   this.age = age;
// }

// SubExtend.prototype = new SuperProto();

// let subE = new SubExtend(23);
// console.log(subE.getInfo())
// console.log(subE._proto_)


// 借用构造函数继承
//优点：引用类型数据
//缺点：方法无法复用
// function SuperType(){
//   this.colors = ['red','green','black'];
// }

// function SubType(){
//   SuperType.call(this)
// }

//组合继承
/**
 * 把原型链继承和借用构造函数继承结合起来，
 * 借用构造函数负责取得一般属性
 * 原型链继承则负责继承方法
 */
// function SubType(){
//   SuperType.call(this)
// }

// SuperType.prototype = new SuperType()

// //原型式继承
// var superObj = {
//   name:'nick',
//   hobbies: ['swim','draw'],
//   setHobby:function(hobby){
//     this.hobbies.push(hobby)
//   }
// }

// function object(o){
//   var fn = function(){};
//   fn.prototype = o;
//   return new fn();
// }

// var sub = object(superObj);
// sub.setHobby('drive');
// console.log(superObj.hobbies);

//寄生式继承
/**
 * 没有实现方法复用啊，方法得写到obj参数上比较好 
 */
// function createAnather(obj){
//   let newobj = object(obj);
//   newobj.sayName = function(){
//     console.log(this, name)
//   }
//   return newobj;
// }


//寄生组合式继承


function SuperType(name){
  this.name = name;
}

SuperType.prototype.sayName = function(){
  console.log(this.name)
}

function SubType(name,age){
  SuperType.call(this,name);
  this.age = age;
}

// function object(o){
//   function F(){};
//   F.prototype = o;
//   return new F();
// }

function inheritePrototype(SubType,SuperType){
  var proto = Object.create(SuperType.prototype);
  proto.constructor = SubType;
  SubType.prototype = proto;
  // SubType.prototype = SuperType.prototype;
}

inheritePrototype(SubType,SuperType);

SubType.prototype.sayAge = function(){
  console.log(this.age);
}

// let subT = new SubType('yang',23);
// subT.sayName();
// subT.sayAge();

