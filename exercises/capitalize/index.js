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
  let arr = str.split(" ");
  arr = arr.map((value) => {
      const firstCharCapital = String.fromCharCode(value.charCodeAt(0) - 32);
      const restOfString = value.split("").slice(1).join("");
      return firstCharCapital + restOfString;
    }
  )
  return arr.join(" ")
}

module.exports = capitalize;
