function insertionSort(array) {
  let length = array.length;
  for (let i = 1; i < length; i++) {
    // 取出标记元素
    let index = i;
    let temp = array[i];

    while (temp < array[index - 1] && index > 0) {
      // 向后移动一位(往覆盖一位)
      array[index] = array[index - 1];
      index--;
    }
    array[index] = temp;
  }
  return array;
}
// 标记位为index，比较元素为index-1，标记元素比比较元素大，就没有移动位置的话就没有（index--），那退出while后index就是比较元素index-1的后一位
// let arr = [1, 4, 8, 9, 6, 7];
let arr = [4, 8, 1, 9, 6, 7];

console.log(insertionSort(arr));
