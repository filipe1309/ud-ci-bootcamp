// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  return mySolution(array, size);
}

function mySolution(array, size) {
  let result = [];
  for (let pos = 0, newPos = -1; pos < array.length; pos++) {
    newPos += (pos % size) ? 0 : 1;
    if (result[newPos] === undefined) result[newPos] = []
    result[newPos].push(array[pos]);
  }
  return result;
}

function solution1(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element)
    }
  }

  return chunked;
}

function solution2(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    chunked.push(chunk);
    index += size;
  }

  return chunked;
}


// function chunk(array, size) {
//   const chunked = [];
//   array.forEach((num, i) => {
//     if(i % size === 0) {
//       chunked.push([]);
//     }
//     chunked[chunked.length-1].push(num);
//   })
 
//   return chunked;
// }

module.exports = chunk;
