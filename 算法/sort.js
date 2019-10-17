let testArr = [21, 3, 43, 1, 5, 56, 76, 25, 23, 41]

// 100000 十万的量 3106.395ms
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let cursor = i - 1;
    while (cursor >= 0 && arr[cursor] > key) {
      arr[cursor + 1] = arr[cursor];
      cursor -= 1
    }
    arr[cursor + 1] = key
  }
  return arr;
}
// 十万的量 27029.298ms 太尼玛低效量吧
function bubbleSort(arr) {
  for (let i = arr.length; i >= 1; i--) {
    for (let j = 0; j < i ; j++) {
      if (arr[j] > arr[j + 1]) {
        let key = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = key;
      }
    }
  }
  return arr
}



// 100000 233.358ms
function mergeSort(arr) {
  //在arr.lengt <=10 的情况下使用插入排序，十万的量用了179ms 还是快了不少 这也是为什么v8在大于10的时候才使用快速排序的原因吧
  if(arr.length <= 10) return insertSort(arr);
  // if (arr.length <= 1) return arr;
  let middle = parseInt(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, middle));
  let rightArr = mergeSort(arr.slice(middle));
  let emptyArr = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    let ls = leftArr[0],
      rs = rightArr[0];
    emptyArr.push(ls > rs ? rightArr.shift() : leftArr.shift())
  }
  emptyArr = emptyArr.concat(leftArr, rightArr);
  return emptyArr;
}
//这个希尔
function shellSort(arr) {
  var len = arr.length;
  for (var fraction = Math.floor(len / 2); fraction > 0; fraction = Math.floor(fraction / 2)) {
    for (var i = fraction; i < len; i++) {
      for (var j = i - fraction; j >= 0 && arr[j] > arr[fraction + j]; j -= fraction) {
        // if(arr[j] > arr[fraction + j]){
          var temp = arr[j];
          arr[j] = arr[fraction + j];
          arr[fraction + j] = temp;
        // }
      }
    }
  }
  return arr;
}

//1000000 190.307ms    new Array 175.934ms
//堆排序分为两个阶段，第一阶段是把数组分配成堆，第二阶段是将顶部和底部最后的数交换，将堆的长度减一，得到顶部数，在hepayFy
//用到的核心是heapyFy
function heapSort(arr){
  let heapSize = arr.length;
  //建堆
  for(let i =Math.floor(heapSize/2); i > 0 ; i--){
    heapyFy(arr,i - 1);
  }
  //一步步取值并排序
  // let res =new Array(heapSize);
  let res = [];
  while(heapSize >= 1){
    // res[heapSize - 1] = arr[0];
    res.push(arr[0])
    arr[0] = arr[heapSize - 1];
    heapyFy(arr,0);
    heapSize -= 1;
  }

  return res;

  function heapyFy(arr,index){
    //这里不用递归，可能性能会好一点
    let i = index;
    let  bootomLeftIndex ;
    while((bootomLeftIndex = ((i + 1) << 1) - 1) < heapSize){
      let max = arr[i];
      // //这里做一个保障，不去判断是否存在第二个子元素，单纯的通过最小integer来玩,
      // let maxBottomIndex = arr[bootomLeftIndex] > (arr[bootomLeftIndex + 1] || Number.MIN_SAFE_INTEGER) ? bootomLeftIndex : bootomLeftIndex  + 1;
      //但是如果这里做判断，就不用在第二阶段操作数组了
      let maxBottomIndex = bootomLeftIndex + 1 >= heapSize? bootomLeftIndex : arr[bootomLeftIndex] > arr[bootomLeftIndex + 1] ? bootomLeftIndex : bootomLeftIndex + 1;

      if(arr[maxBottomIndex] <= max) return;
  
      let tmp = arr[i];
      arr[i] = arr[maxBottomIndex];
      arr[maxBottomIndex] = tmp;
      i = maxBottomIndex ;
    }
  }
}

function sortTimeTracer(sortFunc, length) {
  let testArr = [],i = 0;
  while (i < length) {
    testArr.push(parseInt(Math.random() * 100));
    i++
  }
  console.time('testStart');
  // console.log(testArr)
  // console.log(sortFunc(testArr));
  sortFunc(testArr)
  console.timeEnd('testStart');
}

// console.log(heapSort(testArr));




sortTimeTracer(heapSort, 1000000);