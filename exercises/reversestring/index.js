// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return mySolution(str);
}

function mySolution(str) {
  return str.split('').reverse().join('');
}

function solution_1(str) {
  return mySolution(str)
}

module.exports = reverse;
