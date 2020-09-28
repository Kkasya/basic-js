const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  let str1 = String(str);
  let addition = '';
  if (options.addition !== undefined) addition = String(options.addition);
  let separator = '+';
  if (options.separator) separator = String(options.separator);
  let additionSeparator = '';
  if (options.addition !== undefined) {
    if (options.additionSeparator) {
      additionSeparator = String(options.additionSeparator);
    } else additionSeparator = '';
  }
  let repeatTimes = 1;
  if (options.repeatTimes) repeatTimes = Number(options.repeatTimes);
  let additionRepeatTimes = 1;
  if (options.additionRepeatTimes) additionRepeatTimes = Number(options.additionRepeatTimes);
  let result = '';

  for (let i = 0; i < repeatTimes; i++) {
    result += str1;
    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition;
      if (j != additionRepeatTimes - 1) result += additionSeparator;
    }
    if (i != repeatTimes - 1) result += separator;
  }
  return result;
};
  