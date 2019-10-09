
//计算数组中最大连续数
function findMaxNumSubArray(arr,leftIndex,rightIndex){
  if(leftIndex == rightIndex) return [leftIndex,rightIndex,arr[rightIndex]]
  let middleIndex = (leftIndex + rightIndex) >> 1
  let [leftLowIndex,leftHighIndex,leftSum] = findMaxNumSubArray(arr,leftIndex,middleIndex);
  let [rightLowIndex,rightHighIndex,rightSum] = findMaxNumSubArray(arr,middleIndex + 1,rightIndex);
  let [leftMiddleIndex,rightMiddleIndex,middleSum] = getMaxMiddleNum(arr,leftIndex,middleIndex,rightIndex);
  if(leftSum >= rightSum && leftSum >= middleSum){
    return [leftLowIndex,leftHighIndex,leftSum]
  }else if(rightSum >= leftSum && rightSum >= middleSum){
    return [rightLowIndex,rightHighIndex,rightSum]
  }else{
    return [leftMiddleIndex,rightMiddleIndex,middleSum]
  }

  function getMaxMiddleNum(arr,leftIndex,middle,rightIndex ){
    let sum = 0, leftMax = - Number.MAX_SAFE_INTEGER,rightMax = - Number.MAX_SAFE_INTEGER,leftMaxIndex = middle,rightMaxIndex = middle;
    
    for(let i = middle;i > leftIndex; i--){
      sum = arr[i] + sum;
      if(sum > leftMax){
        leftMax = sum;
        leftMaxIndex = i
      }
    }

    sum = 0;
    for(let i = middle + 1; i < rightIndex; i++){
      sum = arr[i] + sum;
      if(sum > rightMax){
        rightMax = sum;
        rightMaxIndex = i
      }
    }
    // console.log([leftMax,rightMax,leftMax + rightMax]);
    return [leftMaxIndex,rightMaxIndex,leftMax + rightMax]
  }
}

let arr = [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-1,15]

// console.log(findMaxNumSubArray(arr,0,arr.length))


function maxSubArray(arr){
  let max = 0 , cur = 0;
  for(let i = 0 ; i < arr.length; i++){
    cur += arr[i];
    max = Math.max(max,cur);
    cur = cur > 0 ? cur : 0
  }
  return max
}
console.log(maxSubArray(arr));