// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return mySolution(str)
}

function mySolution(str) {
  let wordsArr = str.split(" ");
  wordsArr = wordsArr.map(word => {
      const firstCharCapital = word[0].toUpperCase(); //String.fromCharCode(word.charCodeAt(0) - 32);
      const restOfString = word.split("").slice(1).join("");
      return firstCharCapital + restOfString;
    }
  )
  return wordsArr.join(" ");
}

module.exports = capitalize;
