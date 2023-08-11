// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function swap(arr, i, j) {
  const tmp = arr[j];
  arr[j] = arr[i];
  arr[i] = tmp;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) swap(arr, j, j+1);
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) indexOfMin = j;
    }
    if (indexOfMin !== i) swap(arr, i, indexOfMin);
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const leftSorted = mergeSort(arr.slice(0, middle))
  const rightSorted = mergeSort(arr.slice(middle))

  return merge(leftSorted, rightSorted);
}

function merge(leftSorted, rightSorted) {
  let sortedArray = [];

  while (leftSorted.length && rightSorted.length) {
    if (leftSorted[0] < rightSorted[0]) sortedArray.push(leftSorted.shift());
    else sortedArray.push(rightSorted.shift());
  }

  return [...sortedArray, ...leftSorted, ...rightSorted];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
