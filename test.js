function getIndex(){
    let restArr = Array.from(arguments);
    let target = restArr.pop();
    let sum = 0;
    let obj = {};
    for(let i = 0 ; i< restArr.length; i++){
        let num = restArr[i]
        if(num< target){
            if(obj[num]){
                obj[num].push(i)
            }else {
                obj[num] = [i]
            }
        }
    }
    let keys = Object.keys(obj);
    let computedValue = [];
    for(let i = 0 ; i < keys.length; i++){
        let halfSum = target - parseInt(keys[i]);
        if(computedValue.includes(keys[i]) ||computedValue.includes(halfSum)) continue;
        let inds = obj[halfSum];
        if(!inds) continue;
        if(inds === obj[keys[i]]){
            sum += (inds.length -1)*sumArr(inds);
        }else {
            let fInds = obj[keys[i]];
            sum += (sumArr(inds) * fInds.length + sumArr(fInds) * inds.length)
        }
        computedValue.push(parseInt(keys[i]),halfSum);
    }
    return sum;
    function sumArr(arr){
        let i = 0;
        let sum = 0;
        while(i < arr.length){
            sum += arr[i];
            i++;
        }
        return sum ;
    }
}

var res = getIndex(0,1,5,11,17,16,2,5,10,30,12);
console.log(res);