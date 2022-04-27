/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  let result = 0;
  const mapS1 = mapStringChars(s1);
  const mapS2 = mapStringChars(s2);

  for (let [char] of mapS1) {
    if (mapS2.has(char)) {
      result += mapS1.get(char) < mapS2.get(char) ? mapS1.get(char) : mapS2.get(char);
    }
  }

  return result;
}

function mapStringChars(string) {
  const map = new Map();

  for (let char of string) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  return map;
}

module.exports = {
  getCommonCharacterCount
};
