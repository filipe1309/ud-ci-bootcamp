// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let size = 0;

    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head ? this.head.next : null;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {this.head = null; return; }

    let prev = this.head;
    let node = this.head.next;

    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    let newNode = new Node(data);
    if (!this.head) { this.head = newNode; return; }

    let node = this.getLast();
    node.next = newNode;
  }

  getAt(idx) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter == idx) return node;
      counter++;
      node = node.next;
    }
    return null;
  }
}

module.exports = { Node, LinkedList };
