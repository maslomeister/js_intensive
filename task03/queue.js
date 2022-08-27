class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length > 0 ? false : true;
  }

  size() {
    return this.items.length;
  }
}
