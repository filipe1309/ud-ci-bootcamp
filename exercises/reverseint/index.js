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
  const signal = Math.sign(n); // OR n < 0 ? -1 : 1;
  let nStringReversed = (n * signal).toString().split('').reverse().join('')
  return parseInt(nStringReversed) * signal;
}

module.exports = reverseInt;
