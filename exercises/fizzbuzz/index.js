// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  return mySolution(n);
}

function mySolution(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    result = i % 3 == 0 ? "fizz": "";
    result += i % 5 == 0 ? "buzz" : "";
    console.log(result ? result : i)
  }
}

module.exports = fizzBuzz;
