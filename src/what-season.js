const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  if (date == null) return 'Unable to determine the time of year!';
  if ( (typeof date === 'object') ||  (date != undefined)) {
    if ((isNaN(date.valueOf()) && date instanceof Date)) {
      throw new Error('Error');
    }

    let mon = date.getMonth();
    if (mon === 0 || mon === 1 || mon === 11) return 'winter';
    if (mon === 2 || mon === 3 || mon === 4) return 'spring';
    if (mon === 5 || mon === 6 || mon === 7)  return 'summer';
    if (mon === 8 || mon === 9 || mon === 10) return 'autumn';
  } else return 'Error';
};
