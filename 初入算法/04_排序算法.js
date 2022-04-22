function ArrayList() {
  // 属性
  this.array = [];
  // 方法
  ArrayList.prototype.insert = function (item) {
    this.array.push(item);
  };

  ArrayList.prototype.toString = function () {
    return this.array.join("-");
  };

  ArrayList.prototype.swap = function (m, n) {
    let temp = this.array[m];
    this.array[m] = this.array[n];
    this.array[n] = temp;
  };
  // 冒泡算法
  ArrayList.prototype.bubbleSort = function () {
    // for (let i = 0; i < this.array.length - 1; i++) {
    //   for (let j = 0; j < this.array.length - 1 - i; j++) {
    //     if (this.array[j] > this.array[j + 1]) {
    //       let item = this.array[j];
    //       this.array[j] = this.array[j + 1];
    //       this.array[j + 1] = item;
    //     }
    //   }
    // }
    let length = this.array.length;
    for (let j = length - 1; j >= 0; j--) {
      for (let i = 0; i < j; i++) {
        if (this.array[i] > this.array[i + 1]) this.swap(i, i + 1);
      }
    }
  };
  // 选择排序
  ArrayList.prototype.selectionSort = function () {
    let length = this.array.length;
    for (let i = 0; i < length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < length; j++) {
        if (this.array[minIndex] > this.array[j]) {
          minIndex = j;
        }
      }
      if (i != minIndex) this.swap(i, minIndex);
    }
  };

  // 插入排序
  ArrayList.prototype.insertionSort = function () {
    let length = this.array.length;
    // 不能用for循环，因为不知道要比较几次
    for (let i = 1; i < length; i++) {
      let temp = this.array[i];
      // 用于比较的索引
      let index = i - 1;
      while (temp < this.array[index] && index >= 0) {
        this.array[index + 1] = this.array[index];
        //   最小的话，这儿是-1哦
        index--;
      }
      // 大，放比较位置的后一位 | 最大，放原位
      this.array[index + 1] = temp;
    }
  };
  // 希尔排序
  ArrayList.prototype.shellSort = function () {
    let length = this.array.length;
    let gap = Math.floor(length / 2);

    while (gap >= 1) {
      // 从间隔的第二位开始比较
      for (let i = gap; i < length; i++) {
        let index = i;
        let temp = this.array[index];

        // 按间隔分组后，对其插入排序
        while (temp < this.array[index - gap] && index > gap - 1) {
          // 移位
          this.array[index] = this.array[index - gap];
          index -= gap;
        }
        // 插入
        this.array[index] = temp;
      }

      // 缩小间隙
      gap = Math.floor(gap / 2);
    }
  };
  // 快速排序
  ArrayList.prototype.median = function (left, right) {
    // 拿到中间位置
    let center = Math.floor((left + right) / 2);

    // 对三个位置排序
    if (this.array[left] > this.array[center]) {
      this.swap(left, center);
    }
    if (this.array[left] > this.array[right]) {
      this.swap(left, right);
    }
    if (this.array[center] > this.array[right]) {
      this.swap(right, center);
    }

    // 将center移动到right-1位
    this.swap(center, right - 1);
    return this.array[right - 1];
  };

  ArrayList.prototype.quickSort = function () {
    this.quickSortRec(0, this.array.length - 1);
  };
  ArrayList.prototype.quickSortRec = function (left, right) {
    // 结束条件
    if (left >= right) return;
    // 获取枢纽
    let pivot = this.median(left, right);

    // 记录开始位置
    let bigIndex = left;
    let smallIndex = right - 1;

    // 循环查找位置
    while (true) {
      while (this.array[++bigIndex] < pivot) {}
      while (this.array[--smallIndex] > pivot) {}
      if (bigIndex < smallIndex) {
        // 表示没重叠，交换两指针指向的元素
        this.swap(bigIndex, smallIndex);
      } else {
        break;
      }
    }

    // 枢纽和bigIndex指向的元素交换 bigIndex在结束循环时一定是大于pivot的数字
    // 且一定是pivot正确的位置
    if (bigIndex != right) this.swap(bigIndex, right - 1);

    // 递归——分而治之
    this.quickSortRec(left, bigIndex - 1);
    this.quickSortRec(bigIndex + 1, right);
  };
}

let list = new ArrayList();
list.insert(66);
list.insert(46);
list.insert(28);
list.insert(44);
list.insert(71);
list.insert(96);
console.log(list.toString());
// 选择排序
list.quickSort();
console.log(list.toString());
