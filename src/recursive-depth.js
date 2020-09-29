const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 0;
    let max = 0;
    function count(arr)  {
      if (arr.length === 0) {
        res += 1;
        max = (res > max) ? res : max;
      } else {
        res += 1;
        arr.forEach(elem => {
          if (Array.isArray(elem)) {
            count(elem);
          } else {
            max = (res > max) ? res : max;
          }
        });
        res = 1;
      }
    }
    count(arr);
    return (max === 0)?1:max;
  }
};