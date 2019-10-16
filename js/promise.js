import { resolve } from "path";

function myPromise(constru){

    //写入闭包，保证外部不能改变state
    let {getStatus,setStatus} = (function(){
        let state = 'pending';
        return {
            getStatus(){
                return state;
            },
            setStatus(nextState){
                state = nextState
            }
        }
    })()
    
    this.value = undefined;
    this.reason = undefined;
    this.onReject = undefined;
    this.onResolve = undefined;
    this.getStatus = getStatus;
    let self = this;
    function reslove(value){
        if(getStatus() === 'pending'){
            setStatus('fullfiled');
            self.value = value;
            Object.prototype.toString.call(self.onResolve) == '[object Function]' &&  self.onResolve(value);
        } 
    }

    function reject(reason){
        if(getStatus() === 'pending') {
            setStatus('rejected');
            self.reason = reason;
            Object.prototype.toString.call(self.onReject) == '[object Function]' &&  self.onReject(reason);
        }
       
    }

    try{
        constru(resolve,reject)
    }
    catch(e){
        reject(e)
    }
}

myPromise.prototype.then = function(onResolved,onRejected){
    let self = this;
    let promise2;
    if(this.getStatus() === 'pending'){
        
    }
}



new Promise((resolve,reject)=>{

}).then((res)=>{
    return res;
},(rej)=>{
    return rej
})
  .then()