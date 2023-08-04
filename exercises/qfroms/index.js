// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack1 = new Stack();  
    this.stack2 = new Stack(); 
  }

  add(record) {
    // move out items from stack1 to stack2
    this.#moveItemsBetweenStacks(this.stack1, this.stack2);

    // insert new record on stack1
    this.stack1.push(record);

    // move back items from stack2 to stack1
    this.#moveItemsBetweenStacks(this.stack2, this.stack1);
  }

  #moveItemsBetweenStacks(stackFrom, stackTo) {
    while (stackFrom.peek()) {
      stackTo.push(stackFrom.pop());
    }
  }

  remove() {
    return this.stack1.pop()
  }

  peek() {
    return this.stack1.peek()
  }
}

module.exports = Queue;
