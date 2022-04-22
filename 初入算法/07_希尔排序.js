function shellSort(array) {
  let length = array.length;
  // 取间隔
  let gap = Math.floor(length / 2);

  while (gap >= 1) {
    // 插入排序，从第二个位置开始比较
    for (let i = gap; i < length; i++) {
      // 获取并标记插入元素位置
      let index = i;
      let temp = array[index];

      while (temp < array[index - gap] && index > gap - 1) {
        array[index] = array[index - gap];
        index -= gap;
      }
      array[index] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return array;
}

let arr = [4, 8, 1, 9, 99, 6, 7, 33, 44, 22, 27, 64];
console.log(shellSort(arr));
