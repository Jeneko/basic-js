/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (
    date instanceof Date === false ||
    Object.getOwnPropertyDescriptor(date, 'toString')
  ) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth();
  month++;

  if (month > 2 && month < 6) {
    return 'spring';
  }

  if (month > 5 && month < 9) {
    return 'summer';
  }

  if (month > 8 && month < 9) {
    return 'summer';
  }

  if (month > 8 && month < 12) {
    return 'autumn';
  }

  if (month > 11 || month < 3) {
    return 'winter';
  }
}

module.exports = {
  getSeason
};
