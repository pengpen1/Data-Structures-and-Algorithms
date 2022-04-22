let num = 63;
let arraa = [1, 5, 8, 9, 7];
let max = Math.max(...arraa);
function maxDigit(arr) {
  let max = Math.max(...arr);
  let l = 0;
  while (max >= 1) {
    max = max / 10;
    l++;
  }
  return l;
}

function radixSort(array) {
  // 获取max，初始化buckets
  const max = Math.max(...array);
  const buckets = Array.from({ length: 10 }, () => []);
  // LSD,低位到高位遍历
  let m = 1;
  while (m <= max) {
    // 按照对应位数上的值将元素放置对应的桶
    for (let i = 0; i < array.length; i++) {
      const digit = ~~((array[i] % (m * 10)) / m);
      buckets[digit].push(array[i]);
    }
    // 将桶中的值按顺序取出
    array = [];
    for (let i = 0; i < buckets.length; i++) {
      while (buckets[i].length) {
        array.push(buckets[i].shift());
      }
    }
    // 下一位
    m *= 10;
  }
  // 返回array
  return array;
}
let arr = [22, 15, 3, 4, 8, 9, 18, 64, 52, 77, 34, 17, 21, 20, 88, 89];
console.log(radixSort(arr));
