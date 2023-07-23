// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
  solution2(n)
}

function mySolution(n) {
  const lineSize = n*2 - 1;
  let spaceSize = (lineSize - 1)/2;
  let hashSize = lineSize - spaceSize*2;
  for (let i = 0; i < n; i++) {
    const step = " ".repeat(spaceSize) 
      + "#".repeat(hashSize) 
      + " ".repeat(spaceSize);
    console.log(step);
    hashSize += 2;
    spaceSize--;
  }
}

function solution1(n) {
  const lineSize = n*2 - 1;
  const midpoint = Math.floor(lineSize/2);

  for (let row = 0; row < n; row++) {
    let level = "";
    for (let column = 0; column < lineSize; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

function solution2(n, row = 0, level = "") {
  if (row === n) return;
  const lineSize = n*2 - 1;
  if (level.length === lineSize) {
    console.log(level);
    return solution2(n, row + 1);
  }

  const midpoint = Math.floor(lineSize/2);
  const column = level.length;
  if (midpoint - row <= column && midpoint + row >= column) {
    level += "#";
  } else {
    level += " ";
  }

  solution2(n, row, level);
}

module.exports = pyramid;
