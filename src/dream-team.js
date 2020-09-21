const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let result = [];
  if (!Array.isArray(arr) ) return false;
  arr.forEach(elem => {
    if (typeof(elem) === "string") {
      if (elem !== ''){
        elem = elem.trim();
        result.push(elem[0].toUpperCase());
      }
    }
  })
  return result.length !== 0?result.sort().join(''):false;
};
