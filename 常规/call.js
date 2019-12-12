Function.prototype.myCall = function(context,...args){
    let prop = Symbol('contextProp');
    let thisFunc = arguments.callee;
    if(context && context instanceof Object){
        context[prop] =thisFunc;
        return context[prop](...args)
    }else{
        let types = {
            string: String,
            number: Number
        }
        let type = typeof context;
        if(types[type]){
            let newContext = new types[type](context);
            new newContext[prop] = thisFunc;
            return newContext[prop](...args)
        }else{
            return thisFunc(...args)
        }
    }

}