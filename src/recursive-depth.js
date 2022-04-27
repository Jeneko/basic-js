const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let res = 1;
    let add = 0;

    for (let el of arr) {
      if (Array.isArray(el)) {
        let dep = this.calculateDepth(el);
        add = add > dep ? add : dep;
      }
    }

    return res + add;
  }
}

module.exports = {
  DepthCalculator
};
