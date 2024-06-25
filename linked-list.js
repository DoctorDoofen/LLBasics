class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(head, length) {
    this.head = null
    this.length = 0
  }

  addToHead(val) {

    let node1 = new LinkedListNode(val)
    node1.next = this.head
    this.head = node1
    this.length++
  }

  addToTail(val) {
    let node1 = new LinkedListNode(val)
    if (!this.head) {
      this.head = node1
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next
      }
      current.next = node1
    }
    this.length++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
