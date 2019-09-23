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
  // if(arr.length <= 10) return insertSort(arr);
  if (arr.length <= 1) return arr;
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

function sortTimeTracer(sortFunc, length) {
  let testArr = [],i = 0;
  while (i < length) {
    testArr.push(parseInt(Math.random() * 100));
    i++
  }
  console.time('testStart');
  console.log(sortFunc(testArr));
  // sortFunc(testArr)
  console.timeEnd('testStart');
}

// console.log(shellSort(testArr));

sortTimeTracer(bubbleSort, 100);