let arr = [4, 8, 1, 9, 6, 7];

function demo(array) {
  let N = array.length;
  for (let i = 0; i < N - 1; i++) {
    if (array[i] > array[i + 1]) {
      let tmp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = tmp;
    }
  }
  return array;
}
console.log(demo(arr));

//这只会做一轮的比较

function bubbleSort2(array) {
  let N = array.length;
  for (let i = 0; i < N - 1; i++) {
    // 每轮都会把最小的放后面
    //   时间复杂度为O(N**2)
    for (let j = 0; j < N - 1 - i; j++) {
      // 最后一个一定是最小的，所以下一次倒数第二个即可
      if (array[j] < array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}

function swap(array, m, n) {
  let temp = array[m];
  array[m] = array[n];
  array[n] = temp;
}
function bubbleSort(array) {
  let length = array.length;
  for (let j = length - 1; j >= 0; j--) {
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) swap(array, i, i + 1);
    }
  }
  return array;
}
console.log(bubbleSort(arr));
