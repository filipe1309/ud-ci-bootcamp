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
    result = i % 3 === 0 ? "fizz": "";
    result += i % 5 === 0 ? "buzz" : "";
    console.log(result ? result : i);
  }
}

function solution1(n) {
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) { // or i % 15 === 0
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i)
    }
  }
}

module.exports = fizzBuzz;
