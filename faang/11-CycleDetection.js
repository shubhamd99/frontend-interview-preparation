// https://leetcode.com/problems/linked-list-cycle
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

/**
 * Time - O(n)
 * Space - O(n)
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @returns {ListNode}
 */
const findCycle = function(head) {
    let current = head;
    const seenNodes = new Set();

    while (!seenNodes.has(current)) {
        if (current === null || current.next === null) {
            return false
        }
        seenNodes.add(current);
        current = current.next;
    }

    return true;
}

// floyd cycle detection algorithm
// fast and slow pointer
/**
 * Time - O(n)
 * Space - O(1)
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @returns {ListNode}
 */
 const findCycle2 = function(head) {
    let tortoise = head;
    let hare = head;

    while (true) {
        // There is No Loop Found
        if (hare === null || hare.next === null) {
            return false;
        }
        hare = hare.next.next;
        tortoise = tortoise.next;

        if (hare == tortoise) {
            return true;
        }
    }
}