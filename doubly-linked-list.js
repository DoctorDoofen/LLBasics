class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  addToHead(val) {
    let node1 = new DoublyLinkedListNode(val)
    if (!this.head) {
      this.head = node1
      this.tail = node1
    } else {
      this.head.prev = node1
      node1.next = this.head
      this.head = node1
    }
    this.length++
  }

  addToTail(val) {
    let node1 = new DoublyLinkedListNode(val)

    if (!this.head) {
      this.head = node1
      this.tail = node1
    } else {
      this.tail.next = node1
      node1.prev = this.tail
      this.tail = node1
    }
    this.length++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
