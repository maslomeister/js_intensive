class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  size() {
    return this._length;
  }

  head() {
    return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  add(item) {
    let node = new Node(item);

    if (this._head) {
      let tailNew = this._tail;
      this._tail = node;
      node.prev = tailNew;
      tailNew.next = node;
    } else {
      this._head = node;
      this._tail = node;
    }

    this._length++;
  }

  remove() {
    if (this._length === 1) {
      this._head = null;
      this._tail = null;
    } else {
      if (!this._head) return;
      let tailNew = this._tail;
      this._tail = tailNew.prev;
      this._tail.next = null;
      tailNew.prev = null;
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

    return curr;
  }

  addAt(item, index) {
    if (index < 0 || index > this._length) {
      return;
    }

    if (index === 0) {
      let node = new Node(item);

      if (this._head) {
        let headNew = this._head;
        this._head = node;
        node.next = headNew;
        headNew.prev = node;
      } else {
        this._head = node;
        this._tail = node;
      }

      this._length++;
      return;
    }

    if (index === this._length) return this.add(item);

    let node = new Node(item);

    let curr = this._head;

    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    let headNew = curr;
    let tailNew = headNew.prev;

    tailNew.next = node;
    node.next = headNew;
    node.prev = tailNew;

    this._length++;
  }

  removeAt(index) {
    if (index < 0 || index > this._length - 1) {
      return;
    }

    if (index === 0) {
      if (this._length === 1) {
        this._head = null;
        this._tail = null;
      } else {
        if (!this._head) return;
        let headNew = this._head;
        this._head = headNew.next;
        this._head.prev = null;
        headNew.prev = null;
      }

      this._length--;
      return;
    }

    if (index === this._length - 1) return this.remove();

    let curr = this._head;

    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    let tailNew = curr.prev;
    let headNew = curr.next;

    tailNew.next = headNew;
    headNew.prev = tailNew;

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
