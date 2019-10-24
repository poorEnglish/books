class MyPromise {
	constructor(excutor) {
		this.resolveCallbacks = [];
		this.rejectCallbacks = [];
		this.resolve = this.resolve.bind(this);
		this.reject = this.reject.bind(this);
		this.then = this.then.bind(this);
		this.status = 'pending';
		this.value = undefined;
		this.reason = undefined;
		try{
			excutor(this.resolve, this.reject);
		}catch(e){
			this.reject(e)
		}
	}


	resolve(value){
		if (this.status == 'pending') {
			this.status = 'fullFilled';
			this.value = value;
			setTimeout(() => {
				this.resolveCallbacks.forEach(fn => fn()) 
			})
		}
	}

	static reject(reason){
		if (this.status == 'pending') {
			this.status = 'rejected';
			this.reason = reason;
			setTimeout(() => {
				this.rejectCallbacks.forEach(fn => fn()) 
			})
		}
	}

	then(onFullfilled,onRejected){
		// let {status, value, resolveCallbacks, rejectCallbacks} = this;
		let that = this;
		let promise2 = new MyPromise((resolve, reject)=>{
			if(that.status == 'fullFilled'){
				setTimeout(()=>{
					try{
						let x = onFullfilled(that.value);
						resolvePromise(promise2,x,resolve,reject)
					}catch(e){
						reject(e)
					}
				},0)
			}else if(that.status == 'rejected'){
				setTimeout(()=>{
					try{
						let x = onRejected(that.reason);
						resolvePromise(promise2,x,resolve,reject)
					}catch(e){
						reject(e)
					}
				},0)
			}else{
				that.resolveCallbacks.push(()=>{
					setTimeout(()=>{
						try{
							let x = onFullfilled(that.value);
							resolvePromise(promise2,x,resolve,reject)
						}catch(e){
							reject(e)
						}
					},0)
				});

				that.rejectCallbacks.push(()=>{
					setTimeout(()=>{
						try{
							let x = onRejected(that.reason);
							resolvePromise(promise2,x,resolve,reject)
						}catch(e){
							reject(e)
						}
					},0)
				})
			}
		})

		return promise2;
	}
}

function resolvePromise(promise2, x, resolve, reject){
	if(promise2 === x){
		return reject(new Error('infinite cycle'))
	}

	if(x != null && (typeof x == 'object' || typeof x == 'function')){
		if(typeof x.then == 'function'){
			let called = false;
			try{
				x.then(y =>{
					if(called) return ;
					called = true;
					resolvePromise(promise2,y,resolve,reject);
				}, err =>{
					if(called) return;
					called = true;
					reject(err)
				})
			}catch(e){
				if(called) return;
				called = true;
				reject(e)
			}
		}else{
			resolve(x)
		}
	}else{
		resolve(x)
	}
}


// let p1 = new MyPromise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		console.log(222222)
// 		resolve('hello')
// 	})
// 	console.log(11111);
// })

// let p3 = p1.then((result)=>{
// 	console.log('p11111');
// 	setTimeout(()=>{
// 		console.log('p1222222')
// 		console.log(result);
// 	},100)
// 	return 'p13333'
// })


// p3.then(full=>{
// 	console.log('foo')
// 	console.log(full)
// },rej =>{
// 	console.log(rej)
// })

// let p2 =p1.then((val)=>{
// 	console.log(val + ' world')
// 	return new MyPromise((res,rej)=>{
// 		setTimeout(()=>{})
// 			rej(new Error('test error'))
// 			// res(22);
// 		},10)
// },err=>{
// 	console.log(err)
// })
// p2.then(res =>(res),err =>{
// 	console.log(33333);
// 	console.log(err);
// })
