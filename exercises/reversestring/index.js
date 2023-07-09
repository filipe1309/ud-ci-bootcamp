// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return solution_3(str);
}

function mySolution(str) {
  return str.split('').reverse().join('');
}

function solution_1(str) {
  return mySolution(str);
}

function solution_2(str) {
  let reversed = '';
  for (let char of str) {
    // insert each char in the begining of the empty string
    reversed = char + reversed
  }

  return reversed;
}

function solution_3(str) {
  // reduce((accumulator, currentValue))
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
