  module.exports = function check(str, bracketsConfig) {
  let lgStr = str.length-1;
  if (str.length%2 == 0) {
    for (let i = lgStr; i >= 0; i--) {
      for (let a = 0; a < bracketsConfig.length; a++) {
       let b = bracketsConfig[a].join('');
        if (str[i] == bracketsConfig[a][0]) str = str.replace(b, '');
      }
    }
    let result = (str != '') ? false : true;
    return result;
  } else { return false; }
}