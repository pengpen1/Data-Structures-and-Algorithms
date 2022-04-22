function swap(array, m, n) {
  let temp = array[m];
  array[m] = array[n];
  array[n] = temp;
}
function getPivot(array, left, right) {
  let center = Math.floor((left + right) / 2);

  // 排序
  if (array[left] > array[center]) {
    swap(array, left, center);
  }
  if (array[left] > array[right]) {
    swap(array, left, right);
  }
  if (array[center] > array[right]) {
    swap(array, center, right);
  }

  swap(array, center, right - 1);

  return array[right - 1];
}
function quickSort(array) {
  function recursion_quickSort(array, left, right) {
    // 结束条件
    if (left >= right) return;
    // 获取枢纽
    let pivot = getPivot(array, left, right);

    // 记录开始位置
    let bigIndex = left;
    let smallIndex = right - 1;

    // 循环查找位置
    while (true) {
      while (array[++bigIndex] < pivot) {}
      while (array[--smallIndex] > pivot) {}
      if (bigIndex < smallIndex) {
        // 表示没重叠，交换两指针指向的元素
        swap(array, bigIndex, smallIndex);
      } else {
        break;
      }
    }

    if (bigIndex != right) swap(array, bigIndex, right - 1);
    // 递归——分而治之
    recursion_quickSort(array, left, bigIndex - 1);
    recursion_quickSort(array, bigIndex + 1, right);
  }

  recursion_quickSort(array, 0, array.length - 1);
  return array;
}

let arr = [66, 46, 28, 44, 71, 96, 33, 46, 55, 17];
console.log(quickSort(arr));
// getPivot(arr, 0, arr.length - 1);
// console.log(arr);
