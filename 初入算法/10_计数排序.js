function countingSort(array) {
  let length = array.length;
  let resultArray = [];
  let min = array[0];
  let max = array[0];

  // 1.max min
  for (let i = 0; i < length; i++) {
    min = min <= array[i] ? min : array[i];
    max = max >= array[i] ? max : array[i];
  }
  // 统计数组的长度为max-min+1；min作为偏移量

  let countArray = new Array(max - min + 1).fill(0);
  // 2.统计次数
  for (let i = 0; i < length; i++) {
    countArray[array[i] - min] = countArray[array[i] - min]
      ? countArray[array[i] - min] + 1
      : 1;
  }
  // 3.累加计数
  for (let i = 0; i < countArray.length - 1; i++) {
    countArray[i + 1] = (countArray[i + 1] || 0) + (countArray[i] || 0);
  }
  console.log("统计数组：", countArray);
  // 4.反向遍历
  for (let i = length - 1; i >= 0; i--) {
    resultArray[countArray[array[i] - min] - 1] = array[i];
    countArray[array[i] - min]--;
  }
  return resultArray;
}
var arr = [70, 72, 73, 74, 90];
var arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
console.log(countingSort(arr));
