// https://leetcode.com/problems/reverse-linked-list-ii/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    getLast() {
        if (!this.head) {
          return null;
        }
    
        let node = this.head;
        while (node) {
          if (!node.next) {
            return node;
          }
          node = node.next;
        }
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            // There are some existing nodes in our chain
            last.next = new ListNode(data);
        } else {
            // The chain is empty!
            this.head = new ListNode(data);
        }
    }

    print(head = this.head) {
        let currentNode = head;
        const nodeListArray = [];
        while (currentNode) {
            nodeListArray.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(nodeListArray);
        return nodeListArray;
    }
}

/**
 * Time - O(n)
 * Space - O(1) -  We are not creating any new memory, we are just pointing to some reference in the already created memory - head (Mutable DataStructre Object)
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @returns {ListNode}
 */
const reverseLinkedListFromMToN = function(head, m, n) {
    // 1,2,3,4,5
    // m -> 2
    // n - 4
    // m - 1 -> 1
    // n + 1 -> 5

    let currentPos = 1;
    let currentNode = head;
    let start = head;

    while (currentPos < m) {
        start = currentNode; // value before we need to start reversal (m - 1)
        currentNode = currentNode.next;
        currentPos++;
    }

    let newList = null;
    // start -> m - 1
    // tail -> m
    let tail = currentNode; // current node will become tail after the reversal

    while (currentPos >= m && currentPos <= n) {
        const next = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = next;
        currentPos++;
    }

    start.next = newList; // new list will always be the head of the list that we have
    tail.next = currentNode; // current node is actually pointing to (n + 1)

    // When m = 1 we need to return new head of the reverse linkedlist which is equal to newlist
    return m > 1 ? head : newList;
}

const l = new LinkedList();
l.insertLast('1');
l.insertLast('2'); // m
l.insertLast('3');
l.insertLast('4'); // n
l.insertLast('5');
l.print(); // 1 2 3 4 5 null

// Unlike array the linkedlist starts from 1 index not from 0
l.print(reverseLinkedListFromMToN(l.head, 2, 4)); // 1 4 3 2 5 null