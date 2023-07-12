// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return mySolution2(str);
}

function mySolution(str) {
  return str.split('').reverse().join('') === str
}

function solution_1(str) {
  return mySolution(str);
}

function mySolution2(str) {
  let lo = 0;
  let hi = str.length - 1
  while (lo < hi) {
    if (str[lo++] !== str[hi--]) return false;
  }
  return true;
}

module.exports = palindrome;
