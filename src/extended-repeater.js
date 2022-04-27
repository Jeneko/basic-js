/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {
  repeatTimes = 1,
  separator = '+',
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '|',
}) {

  if (typeof str !== 'string') {
    str = String(str);
  }

  if (typeof addition !== 'string') {
    addition = String(addition);
  }

  let repeatedAddition = addition;
  if (addition && additionRepeatTimes > 1) {
    repeatedAddition = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  }

  let repeatedString = str + repeatedAddition;
  if (repeatTimes > 1) {
    repeatedString = new Array(repeatTimes).fill(repeatedString).join(separator);
  }

  return repeatedString;
}

module.exports = {
  repeater
};
