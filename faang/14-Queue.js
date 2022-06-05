// Queue - First In First Out
// Enqueue - Append the value to the end of the queue O(1)
// Dequeue - Remove the value at the start of the queue O(1)
// Peek - Return the value at the start of the queue O(1)
// Empty - Whether ot not queue is empty, returns bool value O(1)

class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }
    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }
    peek() {
        return this.elements[this.head];
    }
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.length === 0;
    }
}

let q = new Queue();
// enqueue all elements
for (let i = 1; i <= 7; i++) {
    q.enqueue(i);
}
console.log('peek', q.peek()); // 1
console.log('length', q.length); // 7

// dequeue all elements
while (!q.isEmpty) {
    console.log('dequeue', q.dequeue());
}

console.log('length', q.length); // 0