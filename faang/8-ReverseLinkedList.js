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

// Iterate through the linked list. In loop, do following. 
// Before changing next of current, 
// store next node 
// next = curr->next
// Now change next of current 
// This is where actual reversing happens 
// curr->next = prev 
// Move prev and curr one step forward 
// prev = curr 
// curr = next

/**
 * Time - O(n)
 * Space - O(1) -  We are not creating any new memory, we are just pointing to some reference in the already created memory - head (Mutable DataStructre Object)
 * @param {ListNode} head 
 */
const reverseLinkedList = function(head) {
    let prev = null;
    let current = head;

    // current head will become null in the end once the list is reversed
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

const l = new LinkedList();
l.insertLast('1');
l.insertLast('2');
l.insertLast('3');
l.insertLast('4');
l.insertLast('5');
l.print();
l.print(reverseLinkedList(l.head));