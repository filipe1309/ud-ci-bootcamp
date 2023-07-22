// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  mySolution(n);
}

function mySolution(n) {
  for (let i = 1; i <= n; i++) {
    const hashtags = new Array(i).fill("#");
    console.log(hashtags.join("").padEnd(n," "));
  }
}

function mySolution2(n) {
  mySolution2Recursive(1, n);
}

function mySolution2Recursive(step, n) {
  if (step > n) return;
  console.log("#".repeat(step) + " ".repeat(n - step));
  mySolution2Recursive(step+1, n);
}

function solution1(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let col = 0; col < n; col++) {
      stair += (col <= row) ? "#" : " ";
    }
    console.log(stair);
  }
}

function solutionFromComments1(n) {
  for(let i = 1; i <= n; i++) {
    console.log("#".repeat(i) + " ".repeat(n-i));
  }
}

function solution2(n, row = 0, stair = '') {
  if (n == row) return;

  if (n === stair.length) {
    console.log(stair);
    return solution2(n, row + 1);
  }

  stair += (stair.length) <= row ? "#" : " ";
  solution2(n, row, stair);
}

module.exports = steps;
