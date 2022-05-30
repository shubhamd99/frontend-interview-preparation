// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

class ListNode {
    constructor(value = 0, prev = null, next = null, child = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
        this.child = child; // Child can point to seperate one or more doubly linked list
    }
}

// Head -> { prev: null, next: ListNode }
// Tail -> { prev: ListNode, next: null }


// Space - O(2N) -> O(n)
// Time - O(n)
const flattenLinkedList = function(head) {
    if (!head) return head;

    let currentNode = head;

    while (currentNode !== null) {
        if (currentNode.child === null) {
            currentNode = currentNode.next;
        } else {
            let tail = currentNode.child;
            // Loop until we found tail of the child node
            while (tail.next !== null) {
                tail = tail.next;
            }

            tail.next = currentNode.next; //  point child tail to current node next pointer
            if (tail.next !== null) {
                tail.next.prev = tail; // point next pointer prev to tail
            }

            currentNode.next = currentNode.child; // set current next pointer to child
            currentNode.next.prev = currentNode; // set current node's child prev to current node
            currentNode.child = null; // reset child since it's merged
        }
        
    }

    return head;
}


// c -> current pointer starts with 1 
// 1 2 3 4 5
//   c (child found)
// 1 2 8 9 4 5
//     c
// 1 2 8 9 4 5
//       c
// 1 2 8 9 4 5
//       c (child found)
// 1 2 8 9 10 11 5
//          c
// 1 2 8 9 10 11 5

// .. so on