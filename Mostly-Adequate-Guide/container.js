let _ =require('lodash');
class Container{
    
    constructor(x){
        this._value=x
    }

    static of(x){
        return  new Container(x)
    }

    isEmpty(){
       return  (this._value==null||this._value==undefined)? true: false
    }

    map(func){
        let res= this.isEmpty()?Container.of(null):Container.of(func(this._value))
        console.log(res)
        return res
    }

    rightMap(func){
        let res=Container.of(func(this._value));
        console.log(res);
        return res;
    }

    leftMap(){
        return this
    }

    add(num){
        return Container.of(this._value+num) 
    }

}


// Container.of(24).map((num)=>num*2).map(num=>Math.pow(num,3))
Container.of({name:'smith',age:26}).map(_.property('age')).map(_.add(10))
console.log(_.chunk('dsfsdgsdfgdfgd',4))