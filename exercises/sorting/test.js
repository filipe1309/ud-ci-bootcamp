const S = require('./index');
const bubbleSort = S.bubbleSort;
const selectionSort = S.selectionSort;
const mergeSort = S.mergeSort;
const merge = S.merge;

function getArrayOddSize() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getArrayEvenSize() {
  return [100, -40, 500, -124, 0, 21];
}

function getSortedArrayOddSize() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

function getSortedArrayEvenSize() {
  return [-124, -40, 0, 21, 100, 500];
}

describe('Bubble sort', () => {
  test('sorts an array', () => {
    expect(bubbleSort(getArrayOddSize())).toEqual(getSortedArrayOddSize());
    expect(bubbleSort(getArrayEvenSize())).toEqual(getSortedArrayEvenSize());
  });
});

describe('Selection sort', () => {
  test('sorts an array', () => {
    expect(selectionSort(getArrayOddSize())).toEqual(getSortedArrayOddSize());
    expect(selectionSort(getArrayEvenSize())).toEqual(getSortedArrayEvenSize());
  });
});

describe('Merge sort', () => {
  test('merge function can join together two sorted arrays', () => {
    const left = [1, 10];
    const right = [2, 8, 12];

    expect(merge(left, right)).toEqual([1,2,8,10,12]);
  });
  
  test('sorts an array', () => {
    expect(mergeSort(getArrayOddSize())).toEqual(getSortedArrayOddSize());
    expect(mergeSort(getArrayEvenSize())).toEqual(getSortedArrayEvenSize());
  });
});
