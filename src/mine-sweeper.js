/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = JSON.parse(JSON.stringify(matrix));
  let matrixWidth = matrix[0].length;
  let matrixHeight = matrix.length;

  for (let i = 0; i < matrixHeight; i++) {
    for (let j = 0; j < matrixWidth; j++) {
      result[i][j] = countMinesAround(i, j);
    }
  }

  return result;

  function countMinesAround(row, col) {
    let minesQty = 0;
    // Top
    if (row - 1 >= 0 && matrix[row - 1][col]) {
      minesQty++;
    }
    // Top-Right
    if (row - 1 >= 0 && col + 1 < matrixWidth && matrix[row - 1][col + 1]) {
      minesQty++;
    }
    // Right
    if (col + 1 < matrixWidth && matrix[row][col + 1]) {
      minesQty++;
    }
    // Right-bottom
    if (row + 1 < matrixHeight && col + 1 < matrixWidth && matrix[row + 1][col + 1]) {
      minesQty++;
    }
    // Bottom
    if (row + 1 < matrixHeight && matrix[row + 1][col]) {
      minesQty++;
    }
    // Bottom-left
    if (row + 1 < matrixHeight && col - 1 >= 0 && matrix[row + 1][col - 1]) {
      minesQty++;
    }
    // Left
    if (col - 1 >= 0 && matrix[row][col - 1]) {
      minesQty++;
    }
    // Left-Top
    if (row - 1 >= 0 && col - 1 >= 0 && matrix[row - 1][col - 1]) {
      minesQty++;
    }
    return minesQty;
  }
}


module.exports = {
  minesweeper
};
