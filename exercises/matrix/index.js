// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  return mySolution1(n);
}

function mySolution1(n) {
  const results = Array(n).fill().map(()=>Array(n).fill());
  // const results = [];
  // for (let i = 0; i < n; i++) { results.push([]); }
  let startColumn = 0;
  let startRow = 0;
  let endColumn = n - 1;
  let endRow = n - 1;
  let counter = 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Start row
    for (let col = startColumn; col <= endColumn; col++) {
      results[startRow][col] = counter++;
    }
    startRow++;

    // End Column
    for (let row = startRow; row <= endRow; row++) {
      results[row][endColumn] = counter++;
    }
    endColumn--;

    // End Row
    for (let col = endColumn; col >= startColumn; col--) {
      results[endRow][col] = counter++;
    }
    endRow--;

    // Star Column
    for (let row = endRow; row >= startRow; row--) {
      results[row][startColumn] = counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;
