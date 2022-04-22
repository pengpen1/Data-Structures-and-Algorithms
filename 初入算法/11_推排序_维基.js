Array.prototype.heap_sort = function () {
  var arr = this.slice(0);
  function swap(i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  function max_heapify(start, end) {
    //建立父節點指標和子節點指標
    var dad = start;
    var son = dad * 2 + 1;
    if (son >= end)
      //若子節點指標超過範圍直接跳出函數
      return;
    //先比較兩個子節點大小，選擇最大的
    if (son + 1 < end && arr[son] < arr[son + 1]) son++;

    if (arr[dad] < arr[son]) {
      //如果父节点小于子节点时，交换内容再继续比较子节点子节点比较
      swap(dad, son);
      max_heapify(son, end);
    }
  }

  var len = arr.length;
  //初始化，i從最後一個父節點開始調整
  for (var i = Math.floor(len / 2) - 1; i >= 0; i--) max_heapify(i, len);
  // 形成大顶堆
  console.log(arr);
  //先將第一個元素和已排好元素前一位做交換，再從新調整，直到排序完畢
  for (var i = len - 1; i > 0; i--) {
    swap(0, i);
    //   做调整时已经忽略了最后一位，相当于将最后一位移除大顶堆
    max_heapify(0, i);
  }

  return arr;
};
var a = [7, 3, 6, 5, 8, 9];
console.log(a.heap_sort());
