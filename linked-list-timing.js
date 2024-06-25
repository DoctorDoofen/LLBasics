const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

let n = 100000;

let ll1 = new LinkedList()

console.time("LL: add to head")
for (let i = 0; i < n; i++) {
    ll1.addToHead(i)
}

console.timeEnd("LL: add to head")


let ll2 = new LinkedList()

console.time("LL: add to tail")
for (let i = 0; i < n; i++) {
    ll2.addToTail(i)
}

console.timeEnd("LL: add to tail")


let num = 100000;

let dll1 = new DoublyLinkedList()

console.time("DLL: add to head")
for (let i = 0; i < n; i++) {
    dll1.addToHead(i)
}

console.timeEnd("DLL: add to head")


let dll2 = new DoublyLinkedList()

console.time("DLL: add to tail")
for (let i = 0; i < n; i++) {
    dll2.addToTail(i)
}

console.timeEnd("DLL: add to tail")
