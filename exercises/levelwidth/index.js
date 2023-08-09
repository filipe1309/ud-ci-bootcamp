// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / | \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  return solution(root);
}

function mySolution(root) {
  let result = [1];
  let children = root.children;
  let arr = [];

  while (children.length) {
    arr = [];
    let levelCounter = 0;
    for (let i = 0; i < children.length; i++) {
      levelCounter++;
      arr.push(...children[i].children);
    }
    children = arr;
    result.push(levelCounter);
  }

  return result;
}

function solution(root) {
  const stop = 'STOP';
  let arr = [root, stop];
  let counters = [0];
  while (arr.length > 1) {
    const node = arr.shift();
    if (node === stop) {
      counters.push(0);
      arr.push(stop);
    } else {
      counters[counters.length - 1]++;
      arr.push(...node.children);
    }
  }

  return counters;
}

module.exports = levelWidth;
