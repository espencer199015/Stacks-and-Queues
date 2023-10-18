/** Node: node for a stack. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained-together nodes. */
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /** unshift(val): add new value to start of the list. Returns undefined. */
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** shift(): remove the node from the start of the list
   * and return its value. Should throw an error if the list is empty. */
  shift() {
    if (!this.head) {
      throw new Error('Stack is empty.');
    }
    const removedNode = this.head;
    this.head = this.head.next;
    this.length--;
    return removedNode.val;
  }

  /** peek(): return the value of the first node in the list. */
  peek() {
    if (!this.head) {
      throw new Error('Stack is empty.');
    }
    return this.head.val;
  }

  /** isEmpty(): return true if the list is empty, otherwise false */
  isEmpty() {
    return this.length === 0;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
class Stack {
  constructor() {
    this.size = 0;
    this._list = new LinkedList();
  }

  /** push(val): add new value to end of the stack. Returns undefined. */
  push(val) {
    this._list.unshift(val);
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  pop() {
    const val = this._list.shift();
    this.size--;
    return val;
  }

  /** peek(): return the value of the first node in the stack. */
  peek() {
    return this._list.peek();
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;