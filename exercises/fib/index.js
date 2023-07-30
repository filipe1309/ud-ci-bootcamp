// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  return mySolution1(n);
}

function mySolution1(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return mySolution1(n-1) + mySolution1(n-2);
}

function mySolution2(n) {
  if (n <= 1) return n;

  let sum = 0;
  let last1 = 1;
  let last2 = 0;
  for (let i = 2; i <= n; i++) {
    sum = last1 + last2;
    last2 = last1;
    last1 = sum;
  }

  return sum;
}

mySolution2(4)

module.exports = fib;
