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
  mySolution(n)
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

module.exports = pyramid;
