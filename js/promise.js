function MyPromise(excutor){
    
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.resolveCallbacks = [];
    this.rejectedCallbacks = []

    resolve = (value)=>{
        let state = this.state;
        if(state == 'pending'){
            state = 'fullFilled';
            this.value = value;
            this.resolveCallbacks.forEach(fn => fn())
        } 
    }

    reject = (reason)=>{
        let state = this.state;
        if(state == 'pending'){
            this.reason = reason
            state = 'rejected';
            this.rejectedCallbacks.forEach(fn => fn())
        } 
    }

    excutor(resolve,reject);
}

MyPromise.prototype.then = function(onFullfiled,onRejected){
    onFullfiled = typeof onFullfiled == 'function' ? onFullfiled : val => val;
    onRejected = typeof onRejected == 'function' ? onRejected : e => {throw e}
    let state = this.state;
    let promise2 = new MyPromise((resolve,reject)=>{
        if(state == 'pending'){
            this.resolveCallbacks.push(()=>{
                let x = onFullfiled(this.value);
                resolvePromise(promise2,x,resolve,reject)
            })
            this.rejectedCallbacks.push(()=>{
                let x = onRejected(this.reason);
                resolvePromise(promise2,x,resolve,reject)
            })
        }else if(state == 'fullFilled'){
            setTimeout(()=>{
                let x = onFullfiled(this.value);
                resolvePromise(promise2,x,resolve,reject)
            })
        }else{
            setTimeout(()=>{
                let x = onRejected(this.reason);
                resolvePromise(promise2,x,resolve,reject)
            })
        }
    })
    return promise2;
}

function resolvePromise(promise2,x,resolve,reject){
    if(x === promise2){
        return reject(new Error('Chaining cycle detected for promise'))
    }

    let called = false;
    if(x!= null && (typeof x == 'function' || typeof x == 'object')){
        try{
            if(typeof x.then == 'function'){
                x.then(y => {
                    if(called) return;
                    called = true;
                    resolvePromise(promise2,y,resolve,reject)
                })
            }else{
                if(called) return;
                called = true;
                resolve(x);
            }
        }catch(e){
            if(called) return;
            called = true;
            reject(e)
        }
    }else{
        if(called) return;
        called = true;
        resolve(x);
    }
}


new MyPromise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(111111);
        resolve(2222)
    },10)
}).then((ff)=>{
    console.log(ff);
    return new MyPromise((resolve,reject)=>{
        reject(new Error('test'))
    })   
}).then(()=>{
    console.log(3333);
},(or)=>{
    console.log(444);
    console.log(or)
})