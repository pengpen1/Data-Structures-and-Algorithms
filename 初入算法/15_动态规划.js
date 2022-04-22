function lcs(word1, word2) {
  var max = 0;
  var index = 0;
  var lcsarr = new Array(word1.length + 1);
  for (var i = 0; i <= word1.length + 1; ++i) {
    lcsarr[i] = new Array(word2.length + 1);
    for (var j = 0; j <= word2.length + 1; ++j) {
      lcsarr[i][j] = 0;
    }
  }
  for (var i = 0; i <= word1.length; ++i) {
    for (var j = 0; j <= word2.length; ++j) {
      if (i == 0 || j == 0) {
        lcsarr[i][j] = 0;
      } else {
        if (word1[i - 1] == word2[j - 1]) {
          lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
        } else {
          lcsarr[i][j] = 0;
        }
      }
      if (max < lcsarr[i][j]) {
        max = lcsarr[i][j];
        index = i;
      }
    }
  }
  var str = "";
  if (max == 0) {
    return "";
  } else {
    for (var i = index - max; i <= max; ++i) {
      str += word2[i];
    }
    return str;
  }
}

function find(str1, str2) {
  //创建一个二维数组
  let temp = new Array();
  let max = 0;
  let index = null;
  for (let i = 0; i < str1.length; i++) {
    //初始化为二维数组
    temp[i] = new Array();
    for (let j = 0; j < str2.length; j++) {
      //比较两个位置是否相等，相等就将让temp[i][j]相对于temp[i-1][j-1]加一（前提是temp[i-1][j-1]存在）
      if (str1.charAt(i) === str2.charAt(j)) {
        if (i > 0 && j > 0 && temp[i - 1][j - 1] > 0) {
          temp[i][j] = 1 + temp[i - 1][j - 1];
        } else {
          temp[i][j] = 1;
        }
        //保存当前temp中最大的数字，并
        if (max < temp[i][j]) {
          max = temp[i][j];
          index = i;
        }
      } else {
        temp[i][j] = 0;
      }
    }
  }
  // 因为要算上开始的位置所以要加一

  return str1.substr(index - max + 1, max);
}

find("wdw32efew4332", "efer32e2wd2332");
let str1 = "coveccxaaae";
let str2 = "acveccxaf";
console.log(find("a", "a"));
// console.log(lcs(str1, str2));
