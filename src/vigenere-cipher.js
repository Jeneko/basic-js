/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(type) {
    this.type = type;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    return this.process(message, key);
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    return this.process(message, key, true);
  }

  process(message, key, decrypt) {
    const CHAR_CODE_A = 65;
    const CHAR_CODE_Z = 90;
    const CHAR_QTY = 26;
    const encChars = [];
    let messageIndex = 0;
    let keyIndex = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (; messageIndex < message.length; messageIndex++, keyIndex++) {
      if (keyIndex >= key.length) {
        keyIndex = 0;
      }

      let messageCharCode = message.charCodeAt(messageIndex);
      let keyCharCode = key.charCodeAt(keyIndex);
      let curChar = message.charAt(messageIndex);

      if (messageCharCode >= CHAR_CODE_A && messageCharCode <= CHAR_CODE_Z) {
        if (decrypt) {
          keyCharCode = -keyCharCode;
        }
        curChar = String.fromCharCode((messageCharCode + keyCharCode + CHAR_QTY) % CHAR_QTY + CHAR_CODE_A);
      } else {
        keyIndex--;
      }

      encChars.push(curChar);
    }

    if (this.type === false) {
      encChars.reverse();
    }

    return encChars.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

/*
 99  0 9  23
011021013021
attackatdawn \
              => LXFOPVEFRNHR
LEMONLEMONLE /
141111411114
1 2431 2431 

A = 0
B = 1
C = 2
D = 3
E = 4
F = 5
G = 6
H = 7
I = 8
J = 9
K = 10
L = 11
M = 12
N = 13
O = 14
P = 15
Q = 16
R = 17
S = 18
T = 19
U = 20
V = 21
W = 22
X = 23
Y = 24
Z = 25
*/