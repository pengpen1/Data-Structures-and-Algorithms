function foo(N) {
  if (N <= 0) return 1;
  let count_1 = foo(N - 1);
  let count_2 = foo(N - 1);
  return count_1 + count_2;
}
console.log(foo(5));
