//计算数组中最大连续数

function findMaxNumSubArray(arr,leftIndex,rightIndex){
  if(leftIndex == rightIndex) return [leftIndex,rightIndex,arr[rightIndex]]
  let middleIndex = (leftIndex,rightIndex) >> 2
  let [leftLowIndex,leftHighIndex,leftSum] = findMaxNumSubArray(arr,leftIndex,middleIndex);
  let [rightLowIndex,rightHighIndex,rightSum] = findMaxNumSubArray(arr,middleIndex,rightIndex);

  




  
}