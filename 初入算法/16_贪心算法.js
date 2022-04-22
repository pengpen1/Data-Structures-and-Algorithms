function ksack(values, weights, capacity) {
  let load = 0; //记录已装入货物体积
  let index = 0; //索引
  let totalValue = 0; //已装入物品的总价值
  while (load < capacity && index < values.length) {
    if (weights[index] <= capacity - load) {
      totalValue += values[index];
      load += weights[index];
    } else {
      let r = (capacity - load) / weights[index];
      // 获取剩余容量和待放入物品体积的占比
      totalValue += r * values[index];
      load += r * weights[index];
    }
    index++;
  }
  return totalValue;
}
let items = ["A", "B", "C", "D"];
let values = [50, 140, 60, 60];
let weights = [5, 20, 10, 12];
let capacity = 45;
console.log(ksack(values, weights, capacity));
