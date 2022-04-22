function dynFib(n) {
  if (n === 0) return n;
  if (n == 1 || n == 2) return 1;
  var val = [];
  // 将数组填充为0
  for (var i = 0; i <= n; ++i) {
    val[i] = 0;
  }
  // 初始化数组，将序列1、2位赋值，方便计算
  val[1] = 1;
  val[2] = 2;
  for (var i = 3; i <= n; ++i) {
    val[i] = val[i - 1] + val[i - 2];
  }
  return val[n - 1];
}
console.log(dynFib(5));
