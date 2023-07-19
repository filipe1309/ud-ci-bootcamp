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
  const stringACleaned = cleanUpString(stringA);
  const stringBCleaned = cleanUpString(stringB);
  if (stringACleaned.length !== stringBCleaned.length) return false;

  const aCharMap = buildCharMap(stringACleaned)
  const bCharMap = buildCharMap(stringBCleaned)

  for (const char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) return false;
  }

  return true;
}

function cleanUpString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase();
}

function buildCharMap(stringCleaned) {
  const charMap = {}
  for (const char of stringCleaned) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function solution2(stringA, stringB) {
  const stringACleaned = cleanUpString(stringA);
  const stringBCleaned = cleanUpString(stringB);
  const stringASorted = sortString(stringACleaned);
  const stringBSorted = sortString(stringBCleaned);

  return stringASorted === stringBSorted;
}

function sortString(str) {
  return str.split("").sort().join("");
}

module.exports = anagrams;
