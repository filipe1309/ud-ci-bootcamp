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

  let stepLine = "";
  for (let i = 1; i <= n; i++) {
    stepLine += (i <= step) ? "#" : " "
  }

  console.log(stepLine);
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

module.exports = steps;
