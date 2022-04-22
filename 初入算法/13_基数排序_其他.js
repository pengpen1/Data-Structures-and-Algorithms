/*
 * 基数排序
 * @param{无序数组} arr
 */
function radix_sort(arr) {
  // 取最大值 最大值的位数就是要循环遍历的次数
  const max = Math.max(...arr);

  // 定义一个桶
  const buckets = Array.from({ length: 10 }, () => []);

  // 定义当前要遍历的位数 个位 十位 百位...
  let m = 1;
  while (m <= max) {
    // m < 最大值
    // 下方m要 m*=10 -> 每次遍历增加一位
    // 保证遍历完所有可能的位数

    // 放入桶
    arr.forEach((number) => {
      // digit表示某位数的值
      const digit = ~~((number % (m * 10)) / m);

      // 把该位数的值放到桶buckets中
      // 通过索引确定顺序 类比计数排序
      buckets[digit].push(number);
    });

    // 从桶buckets中取值
    // 完成此步后 就完成了一次位数排序
    let ind = 0;
    buckets.forEach((bucket) => {
      while (bucket.length > 0) {
        // shift从头部取值
        // 保证按照队列先入先出
        arr[ind++] = bucket.shift();
      }
    });

    // 每次最外层while循环后m要乘等10
    // 也就是要判断下一位 比如当前是个位 下次就要判断十位
    m *= 10;
  }

  return arr;
}
const arr = [22, 15, 3, 4, 8, 9, 18, 64, 52, 77, 34, 17, 21, 20, 88, 89];
console.log(radix_sort(arr));
