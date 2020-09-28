const CustomError = require("../extensions/custom-error");
let res = 0;
let max = 0;
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) {
      res += 1;
      max = (res > max)?res:max;
    } else {
      res += 1;
      arr.forEach(elem => {
        if (Array.isArray(elem)) {
          this.calculateDepth(elem);
        } else {
          max = (res > max)?res:max;
        }
      });
      res = 0;
    }
    return max;
  }
};