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

}

function merge(left, right) {
  let sortedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) sortedArray.push(left.shift());
    else sortedArray.push(right.shift());
  }

  return [...sortedArray, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
