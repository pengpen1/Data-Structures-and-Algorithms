// 确定数量逻辑
Array.prototype.bucketSort = function (num) {
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  const max = Math.max(...this);
  const min = Math.min(...this);
  const buckets = [];
  const bucketsSize = Math.floor((max - min) / num) + 1;
  for (let i = 0; i < this.length; i++) {
    const index = ~~((this[i] - min) / bucketsSize);
    !buckets[index] && (buckets[index] = []);
    buckets[index].push(this[i]);
    let l = buckets[index].length;
    while (l > 0) {
      buckets[index][l] < buckets[index][l - 1] &&
        swap(buckets[index], l, l - 1);
      l--;
    }
  }
  console.log(buckets);
  let wrapBuckets = [];
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] && (wrapBuckets = wrapBuckets.concat(buckets[i]));
  }
  return wrapBuckets;
};
const arr = [22, 15, 3, 4, 8, 9, 18, 64, 52, 77, 34, 17, 21, 20, 88, 89];
// const arr = [1, 8, 4, 10, 6, 7, 5, 2, 3, 9];
console.log(arr.bucketSort(5));
// console.log(~~3.2);
// console.log(~3.2);
// console.log(~-2);
// console.log(~2);
