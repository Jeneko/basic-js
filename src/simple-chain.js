/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.values.length;
  },

  addLink(value = ' ') {
    if (!this.values) {
      this.values = [];
    }
    this.values.push(String(value));
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position - 1 < 0 || position > this.values.length) {
      this.values = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.values.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.values.reverse();
    return this;
  },

  finishChain() {
    let result = '( ' + this.values.join(' )~~( ') + ' )';
    this.values = [];
    return result;
  }
};

module.exports = {
  chainMaker
};