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
    this.insertRecursiveSolution(data);
  }

  insertRecursiveSolution(data) {
    if (data <= this.data) {
      if (this.left) this.left.insertRecursiveSolution(data);
      else this.left = new Node(data);
    }
    if (data > this.data) {
      if (this.right) this.right.insertRecursiveSolution(data);
      else this.right = new Node(data);
    }
  }

  mySolutionInsertInterative(data) {
    let currNode = this;
    const node = new Node(data);
    while (currNode) {
      if (data <= currNode.data) {
        if (currNode.left === null) {currNode.left = node; return;}
        currNode = currNode.left;
      }
      if (data > currNode.data) {
        if (currNode.right === null) {currNode.right = node; return;}
        currNode = currNode.right;
      }
    }
  }

  contains(data) {
    return this.containsRecursiveSolution(data);
  }

  containsRecursiveSolution(data) {
    if (this.data === data) return this;
    if (data < this.data && this.left) return this.left.containsRecursiveSolution(data);
    if (data > this.data && this.right) return this.right.containsRecursiveSolution(data);
    return null;
  }

  mySolutionContainsIterative(data) {
    let currNode = this;
    while (currNode) {
      if (currNode.data === data) return currNode;
      if (data < currNode.data) { currNode = currNode.left; }
      if (data > currNode.data) { currNode = currNode.right; }
    }

    return null;
  }
}

module.exports = Node;
