/** Node: node for a queue. */
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
    this.tail = null;
    this.length = 0;
  }

  /** push(val): add new value to end of the list. Returns undefined. */
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** shift(): remove the node from the start of the list
   * and return its value. Should throw an error if the list is empty. */
  shift() {
    if (!this.head) {
      throw new Error('Queue is empty.');
    }
    const removedNode = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removedNode.val;
  }

  /** peek(): return the value of the first node in the list. */
  peek() {
    if (!this.head) {
      throw new Error('Queue is empty.');
    }
    return this.head.val;
  }

  /** isEmpty(): return true if the list is empty, otherwise false */
  isEmpty() {
    return this.length === 0;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */
class Queue {
  constructor() {
    this.size = 0;
    this._list = new LinkedList();
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */
  enqueue(val) {
    this._list.push(val);
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */
  dequeue() {
    const val = this._list.shift();
    this.size--;
    return val;
  }

  /** peek(): return the value of the first node in the queue. */
  peek() {
    return this._list.peek();
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;