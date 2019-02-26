'use strict';

class ListItem<T> {
  public data: T;
  public prev: ListItem<T>;
  public next: ListItem<T>;

  constructor(data: T) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class List<T> {
  public head: ListItem<T>;
  public tail: ListItem<T>;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(data: T) {
    const item = new ListItem<T>(data);
    if (this.head === null) {
      this.head = item;
    } else {
      item.prev = this.tail;
      this.tail.next = item;
    }
    this.tail = item;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Usage

const list = new List<string>();
list.push('Ave');
list.push('Emperor');
list.push('Marcus Aurelius!');
list.display();
