// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  return solution2(str);
}

function mySolution1(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let total = 0;
  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) total++;
  }

  return total;
}

function mySolution2(str) {
  return str.replace(/[^aeiou]/gi, '').length
}

function solution2(str) {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0;
}


module.exports = vowels;
