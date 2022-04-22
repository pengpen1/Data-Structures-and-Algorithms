function countSort(array) {
  const C = [];
  // 1.计数
  for (let i = 0; i < array.length; i++) {
    const j = array[i];
    C[j] >= 1 ? C[j]++ : (C[j] = 1);
  }
  console.log("统计数组", C);
  const D = [];
  // 2.将下标加入到结果数组（不稳定）
  for (let j = 0; j < C.length; j++) {
    if (C[j]) {
      while (C[j] > 0) {
        D.push(j);
        C[j]--;
      }
    }
  }
  return D;
}
Array.prototype.countSort = function () {
  const C = [];
  for (let i = 0; i < this.length; i++) {
    const j = this[i];
    C[j] >= 1 ? C[j]++ : (C[j] = 1);
  }
  const D = [];
  for (let j = 0; j < C.length; j++) {
    if (C[j]) {
      while (C[j] > 0) {
        D.push(j);
        C[j]--;
      }
    }
  }
  return D;
};
const arr = [11, 9, 6, 8, 1, 3, 5, 1, 1, 0, 100];
console.log(arr.countSort());
console.log(countSort(arr));
