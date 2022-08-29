class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SingleLinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  size() {
    return this._length;
  }

  head() {
    return this._head.data;
  }

  add(item) {
    const node = new Node(item);

    if (this._head) {
      let curr = this._head;
      for (let i = 0; i < this._length - 1; i++) {
        curr = curr.next;
      }
      curr.next = node;
    } else {
      this._head = node;
    }

    this._length++;
  }

  remove() {
    let curr = this._head,
      prev;

    if (this._length === 1) {
      this._head = null;
    } else {
      for (let i = 0; i < 2; i++) {
        prev = curr;
        curr = curr.next;
      }

      this._head = prev;
    }

    this._length--;
  }

  indexOf(item) {
    let curr = this._head;

    for (let i = 0; i < this._length; i++) {
      if (item === curr.data) return i;
      curr = curr.next;
    }
  }

  elementAt(index) {
    let curr = this._head;

    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    return curr.data;
  }

  addAt(item, index) {
    if (index > 0 && index > this._length) {
      return;
    }

    if (index === 0) {
      this._head = new Node(item, this._head);
      this._length++;
      return;
    }

    const node = new Node(item);
    let curr = this._head,
      prev;

    for (let i = 0; i < index; i++) {
      prev = curr;
      curr = curr.next;
    }

    node.next = curr;
    prev.next = node;
    this._length++;
  }

  removeAt(index) {
    if (index > 0 && index > this._length) {
      return;
    }

    let curr = this._head,
      prev;

    if (index === 0) {
      this._head = curr.next;
    } else {
      for (let i = 0; i < index; i++) {
        prev = curr;
        curr = curr.next;
      }

      this._head = prev;
    }

    this._length--;
  }

  items() {
    const items = [];
    let current = this._head;
    while (current) {
      items.push(current.data);
      current = current.next;
    }
    return items;
  }
}
