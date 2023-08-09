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
  let result = [1];
  let children = root.children;
  let arr = [];

  do {
    arr = [];
    let levelCounter = 0;
    for (let i = 0; i < children.length; i++) {
      levelCounter++;
      arr.push(...children[i].children);
    }
    children = arr;
    result.push(levelCounter);
  } while (arr.length);

  return result;
}

module.exports = levelWidth;
