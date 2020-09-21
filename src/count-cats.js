const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
  arr.forEach(i => {
    i.forEach(j => {
      if (j === '^^') count +=1;
    })
  } )
  return count;
};