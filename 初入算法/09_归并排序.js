// let num = 67;
// console.log(num >> 1);
// console.log(Math.floor(num / 2));
// // 竟然等价

function mergeSort(array) {
  // 结束递归条件
  if (array.length < 2) return array;
  // 拿到中心位置
  let center = Math.floor(array.length / 2);
  // 分割数组
  let left = array.slice(0, center);
  let right = array.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];
  // 合并的两数组都有值时
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // 处理一个数组中剩下的值(剩下的可能不只有1个元素)
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  // 返回合并后的数组
  return result;
}

let arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr));
