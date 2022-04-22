function lcs(str1, str2) {
  // 1.初始化
  //   let lcsarr = new Array(str1.length).fill(new Array(str2.length).fill(0));同一个索引
  let lcsarr = new Array(str1.length);
  let max = 0;
  let index = null;

  // 2.遍历二维数组
  for (let i = 0; i < str1.length; i++) {
    lcsarr[i] = new Array(str2.length).fill(0);
    for (let j = 0; j < str2.length; j++) {
      // 2.1相等就将让temp[i][j]相对于temp[i-1][j-1]加一
      // 看看str1上一个的值和str2上一个对比的值是否一样，一样就是连续滴
      if (str1[i] == str2[j]) {
        //   2.2记录
        if (i > 0 && j > 0) {
          lcsarr[i][j] = 1 + lcsarr[i - 1][j - 1];
        } else {
          lcsarr[i][j] = 1;
        }
        //   2.3记录max，index
        if (max < lcsarr[i][j]) {
          max = lcsarr[i][j];
          index = i;
        }
      } else {
        lcsarr[i][j] = 0;
      }
    }
  }

  //3.1返回值处理
  if (index === null) return null;
  // 3.2要算上开始的位置所以要加一
  return str1.substr(index - max + 1, max);
}
let str1 = "coveccxaaae";
let str2 = "acveccxaf";
console.log(lcs(str1, str2));
console.log(lcs("48854", "65488"));
