// https://leetcode.com/problems/implement-queue-using-stacks/

// Queue - First In First Out
// Enqueue - Append the value to the end of the queue
// Dequeue - Remove the value at the start of the queue
// Peek - Return the value at the start of the queue
// Empty - Whether ot not queue is empty, returns bool value

// Push 1, 2, 3
// Stack 1 - [1,2,3]
// Stack 2 - []

// Pop (First In First Out)
// Stack 1 - [] -> pop
// Stack 2 - [3, 2, 1] -> push
// return Stack 2 pop -> 1

// Peek (First Element)
// Stack 1 - [] -> pop
// Stack 2 - [3, 2, 1] -> push
// return Stack 2 last index value -> 1

// Space - O(n)
var MyQueue = function() {
    this.in = [];
    this.out = [];
};

/** 
 * Time - O(1)
 * Space - O(1)
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.in.push(x);
};

/**
 * Time - O(n)
 * Space - O(1)
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.out.length === 0) {
        // Pop the [in] and push to the [out] to reverse the array
        while (this.in.length) {
            this.out.push(this.in.pop());
        }
    }
    return this.out.pop(); // Last Value
};

/**
 * Time - O(n)
 * Space - O(1)
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.out.length === 0) {
        // Pop the [in] and push to the [out] to reverse the array
        while (this.in.length) {
            this.out.push(this.in.pop());
        }
    }

    return this.out[this.out.length - 1]; // Retun last index item
};

/**
 * Time - O(1)
 * Space - O(1)
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // Only when both of these are zero we can say that queue is empty
    return (this.in.length === 0 && this.out.length === 0)
};

