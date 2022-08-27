class Stack {
  constructor() {
    this.items = [];
  }

  pop() {
    this.items.pop();
  }

  push(item) {
    if (item) {
      this.items.push(item);
    }
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  length() {
    return this.items.length;
  }
}
