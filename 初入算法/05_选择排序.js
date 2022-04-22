function swap(array, m, n) {
  let temp = array[m];
  array[m] = array[n];
  array[n] = temp;
}
function selectionSort(array) {
  let length = array.length;
  for (let i = 0; i < length - 1; i++) {
    //   用于标记最小的元素
    let index = i;
    for (let j = i + 1; j < length; j++) {
      if (array[index] > array[j]) {
        index = j;
      }
    }
    if (i != index) swap(array, i, index);
  }
  return array;
}
let arr = [1, 4, 8, 9, 6, 7];
let arr = [4, 8, 1, 9, 6, 7];

console.log(selectionSort(arr));
