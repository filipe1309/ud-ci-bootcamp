// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return mySolution1(stringA, stringB)
}

function mySolution1(stringA, stringB) {
  const stringACleaned = stringA.replace(/[^\w]/, "").toLowerCase();
  const stringBCleaned = stringB.replace(/[^\w]/, "").toLowerCase();
  if (stringACleaned.length !== stringBCleaned.length) return false;

  const stringAMap = {}
  const stringBMap = {}
  for (const char of stringACleaned) {
    if (!stringAMap[char]) stringAMap[char] = 0;
    stringAMap[char]++;
  }

  for (const char of stringBCleaned) {
    if (!stringBMap[char]) stringBMap[char] = 0;
    stringBMap[char]++;
  }

  for (const char in stringAMap) {
    if (stringAMap[char] !== stringBMap[char]) return false;
  }

  return true;
}

module.exports = anagrams;
