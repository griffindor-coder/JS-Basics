// Implementing stack in JavaScript
// Rules for stack 1) FIFO 2) push 3) pop 4) peek 5) length

var stack = function createStack() {
  this.count = 0;
  this.storage = {};

  // adds a value onto the end of the stack
  this.push = function push(item) {
    this.storage[this.count] = item;
    this.count++;
  };

  // removes a value onto the end of the stack
  this.pop = function pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let item = this.storage[this.count];
    delete this.storage[this.count];
    return item;
  };

  //  size of the stack
  this.size = function size() {
    return this.count;
  };

  // Peek function of the stack

  this.peek = function peek() {
    return this.storage[this.count - 1];
  };
};

//  Instantiating a new object
const stackInstance = new stack();
stackInstance.push("a");
stackInstance.push("b");
stackInstance.push("c");
stackInstance.push("d");
console.log(stackInstance.storage);
console.log(stackInstance.pop());
console.log(stackInstance.peek());
console.log(stackInstance.size());