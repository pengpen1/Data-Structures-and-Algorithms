function foo(N) {
  let count = 0;
  let i = N;
  while (i > 1) {
    i = i / 2;
    count++;
  }
  return count;
}
console.log(foo(8));
