// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return mySolution(n);  
}

function mySolution(n) {
  let nStringReversed = n.toString().split('').reverse().join('')
  return parseInt(nStringReversed) * Math.sign(n); // OR (n < 0 ? -1 : 1) intead o Math.sign
}

module.exports = reverseInt;
