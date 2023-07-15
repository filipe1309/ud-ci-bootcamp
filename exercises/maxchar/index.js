// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  return mySolution1(str);
}

function mySolution1(str) {
  const obj = {};
  let higherCount = 0;
  let higherChar = '';

  for (const char of str) {
    if (obj[char] == undefined) {
      obj[char] = 0;
    }
    obj[char]++;
    if (obj[char] >= higherCount) {
      higherCount = obj[char];
      higherChar = char;
    }
  }

  return higherChar;
}

module.exports = maxChar;
