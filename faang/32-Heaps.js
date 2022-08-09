// A Heap is a special Tree-based data structure in which the tree is a complete binary tree. Generally, Heaps can be of two types:

// Max-Heap: In a Max-Heap the key present at the root node must be greatest among the keys present at all of it’s children.
// The same property must be recursively true for all sub-trees in that Binary Tree.

// Min-Heap: In a Min-Heap the key present at the root node must be minimum among the keys present at all of it’s children.
// The same property must be recursively true for all sub-trees in that Binary Tree.

class PriorityQueue {
    // Default comparator function -> Max Heap
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }

    size() {
        return this._heap.length;
    }

    peek() {
        return this._heap[0];
    }

    isEmpty() {
        return this._heap.length === 0;
    }

    // Formula to find parent node in a binary tree
    _parent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    // Formula to find left child node in a binary tree
    _leftChild(idx) {
        return idx * 2 + 1;
    }

    // Formula to find right child node in a binary tree
    _rightChild(idx) {
        return idx * 2 + 2;
    }

    // Swap array elements in place
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }

    _compare(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }

    push(value) {
        this._heap.push(value);
        this._siftUp();

        return this.size();
    }

    _siftUp() {
        let nodeIdx = this.size() - 1; // Last Element Index

        // Max Heap -> current node should be smaller than parent node
        while (nodeIdx > 0 && this._compare(nodeIdx, this._parent(nodeIdx))) {
            this._swap(nodeIdx, this._parent(nodeIdx));
            nodeIdx = this._parent(nodeIdx);
        }
    }

    pop() {
        if (this.size() > 1) {
            // Replace first index with last index, so that we can pop the first element
            this._swap(0, this.size() - 1);
        }

        const poppedValue = this._heap.pop();
        this._siftDown();
        return poppedValue;
    }

    _siftDown() {
        let nodeIdx = 0; // First Element Index

        while (
            (this._leftChild(nodeIdx) < this.size() &&
                this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
            (this._rightChild(nodeIdx) < this.size() &&
                this._compare(this._rightChild(nodeIdx), nodeIdx))
        ) {
            const greaterChildIdx =
                this._rightChild(nodeIdx) < this.size() &&
                    this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
                    ? this._rightChild(nodeIdx)
                    : this._leftChild(nodeIdx);

            this._swap(greaterChildIdx, nodeIdx);
            nodeIdx = greaterChildIdx;
        }
    }
}