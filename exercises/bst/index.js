// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    let currNode = this;
    const node = new Node(data);
    while (currNode) {
      if (data <= currNode.data) {
        if (currNode.left === undefined) {currNode.left = node; return;}
        currNode = currNode.left;
      }
      if (data > currNode.data) {
        if (currNode.right === undefined) {currNode.right = node; return;}
        currNode = currNode.right;
      }
    }
  }

  contains(data) {
    let currNode = this;
    while (currNode) {
      if (currNode.data === data) return currNode;
      if (data <= currNode.data) { currNode = currNode.left; }
      if (data > currNode.data) { currNode = currNode.right; }
    }

    return null;
  }
}

module.exports = Node;
