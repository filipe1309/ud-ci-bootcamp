// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // debugger;
  return mySolution(str);
}

// reverse('asdf'); // debugger; // 'fdsa'

function mySolution(str) {
  return str.split('').reverse().join('');
}

function solution1(str) {
  return mySolution(str);
}

function solution2(str) {
  let reversed = '';
  for (let char of str) {
    // insert each char in the begining of the empty string
    reversed = char + reversed;
    // debugger;
  }

  return reversed;
}

function solution3(str) {
  // reduce((accumulator, currentValue))
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

function solution4(str) {
  const arr = str.split('');
  let result = '';
  for (let i = arr.length-1; i >= 0; i--) {
    result += arr[i];
  }
  return result;
}

module.exports = reverse;
