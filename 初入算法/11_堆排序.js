function swap(array, m, n) {
  let temp = array[m];
  array[m] = array[n];
  array[n] = temp;
}
function maxHeapify(array, start, end) {
  // 建立父节点指针和子节点指针
  let dad = start;
  let son = dad * 2 + 1;
  // 子节点范围判断
  if (son >= end) return;
  // 选择子节点中最大的
  if (son + 1 < end && array[son] < array[son + 1]) son++;
  // 如果父节点小于子节点则交换
  if (array[dad] < array[son]) {
    swap(array, dad, son);
    // 继续调整子节点
    maxHeapify(array, son, end);
  }
}
function heapSort(array) {
  // 建立大顶堆
  let length = array.length;
  // 从最后一个父节点开始调整
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    maxHeapify(array, i, length);
  }
  // 排序
  for (let i = length - 1; i > 0; i--) {
    // 将大顶堆的的根节点和最后的子节点交换
    swap(array, 0, i);
    // 将交换后的根节点，也就是最大的值移除大顶堆，并将错乱的结构重新调整为大顶堆
    maxHeapify(array, 0, i);
  }
  return array;
}
var a = [7, 3, 6, 5, 8, 9, 0, 24, 100, 77, 0, 3];
console.log(heapSort(a));
