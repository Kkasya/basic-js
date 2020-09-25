const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  let arr1 = [];
  let discard = '';
  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i+1]) {
      if (discard === 'next') {
        discard = 'del';
        continue;
      }
      if (discard === 'double') {
        if (arr[i + 1] === '--double-prev'){
          arr1.push(arr[i]);
        } else {
          arr1.push(arr[i]);
          arr1.push(arr[i]);
        }
        discard = '';
        continue;
      }
    }
    switch (arr[i]) {
      case '--discard-next':
        discard = 'next';
        break;
      case '--discard-prev':
        if (arr1[0] && discard != 'del') {
          arr1.pop()
        } else discard = '';
        break;
      case '--double-next':
        discard = 'double';
        break;
      case '--double-prev':
        if (arr1[0] && arr[i - 2] !== '--discard-next'){
          if (discard != 'del') {
            arr1.push(arr[i - 1]);
            arr1.push(arr[i - 1]);
          }else {
            arr1.push(arr[i-1]);
          }}
        discard = '';
        break;
      default:
        arr1.push(arr[i]);
    }
  }
  return arr1;
};