// let arr = new Array(2);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = [];
// }
// console.log(arr[0].length);//0

function bucketSort(array, bucketCount) {
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  // 拿到最大最小元素
  let max = array[0];
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }

  // 确定桶大小
  bucketCount = bucketCount || 5;
  const bucketSize = ~~((max - min) / bucketCount) + 1;
  console.log(bucketSize);
  const buckets = [];

  // 将每个元素装入对应的桶
  for (let i = 0; i < array.length; i++) {
    // 1.获取对应的index并初始化
    let index = ~~((array[i] - min) / bucketSize);
    !buckets[index] && (buckets[index] = []);
    // 2.装桶并插入排序
    buckets[index].push(array[i]);
    let l = buckets[index].length;
    while (l > 0) {
      buckets[index][l] < buckets[index][l - 1] &&
        swap(buckets[index], l, l - 1);
      l--;
    }
  }
  console.log(buckets);

  // 装入原数组并返回
  array = [];
  for (let i = 0; i < buckets.length; i++) {
    while (buckets[i].length) {
      array.push(buckets[i].shift());
    }
  }
  return array;
}
// const arr = [22, 15, 3, 4, 8, 9, 18, 64, 52, 77, 34, 17, 21, 20, 88, 89];
const arr = [1, 8, 4, 10, 6, 7, 5, 2, 3, 9];
// console.log(bucketSort(arr, 5));
console.log(bucketSort(arr, 2));
