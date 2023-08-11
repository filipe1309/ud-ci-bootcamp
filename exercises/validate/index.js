// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  return solution(node, min, max);
}

function mySolution(node, min = null, max = null) {
  if (!node) return true;
  if (min && node.data < min) return false;
  if (max && node.data > max) return false;
  
  return mySolution(node.left, min, node.data) && mySolution(node.right, node.data, max);
}

function solution(node, min = null, max = null) {
  if (min && node.data < min) return false;
  if (max && node.data > max) return false;

  if (node.left && !solution(node.left, min, node.data)) return false;
  if (node.right && !solution(node.right, node.data, max)) return false;

  return true;
}

module.exports = validate;
