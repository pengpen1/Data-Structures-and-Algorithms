let arr2 = [
  35, 99, 98, 77, 8, 82, 26, 48, 98, 68, 77, 66, 87, 12, 76, 17, 49, 84, 54, 26,
  2, 66, 33, 47, 2, 80, 43, 67, 60, 42, 29, 52, 2, 79, 26, 85, 49, 72, 100, 5,
  24, 3, 92, 53, 35, 51, 14, 27, 13, 29, 73, 23, 90, 48, 87, 24, 31, 78, 74, 61,
  16, 82, 43, 95, 91, 59, 60, 71, 31, 77, 86, 77, 79, 96, 70, 89, 62, 97, 81,
  16, 27, 0, 16, 65, 89, 72, 28, 2, 11, 15, 3, 84, 32, 88, 46, 96, 12, 50, 54,
  97,
];
// 快排
function quickSort(array) {
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
// 使用二分查找，找82
function binSearch(array, num, orderly = true) {
  // 如果orderly为true说明，希望序列发生改变成为有序数组
  newArry = orderly ? quickSort(array) : quickSort([...array]);
  let upperBound = newArry.length - 1;
  let lowerBound = 0;

  while (upperBound >= lowerBound) {
    let mid = ~~((upperBound + lowerBound) / 2);
    if (num > newArry[mid]) {
      lowerBound = mid + 1;
    } else if (num < newArry[mid]) {
      upperBound = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

function indexArray(array, num) {
  let indexArray = [];
  let position = binSearch(array, num);
  if (position == -1) return -1;
  indexArray.push(position);
  for (let i = position - 1; i >= 0; i--) {
    if (array[i] === num) {
      indexArray.push(i);
    } else {
      break;
    }
  }
  for (let i = position + 1; i < array.length; i++) {
    if (array[i] === num) {
      indexArray.push(i);
    } else {
      break;
    }
  }
  return indexArray;
}

console.log(indexArray(arr2, 77));
