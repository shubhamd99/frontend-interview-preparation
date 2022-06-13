// https://leetcode.com/problems/kth-largest-element-in-an-array/

// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Hoare's Quick Select Algorithm

// The algorithm is similar to QuickSort.
// The difference is, instead of recurring for both sides
// (after finding pivot), it recurs only for the part that contains the k-th smallest element
// The logic is simple, if index of partitioned element is more than k, then we recur for left part
// If index is same as k, we have found the k-th smallest element and we return
// If index is less than k, then we recur for right part
// This reduces the expected complexity from O(n log n) to O(n), with a worst case of O(n^2)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const indexToFind = nums.length - k;
    quickSelect(nums, 0, nums.length - 1, indexToFind);
    return nums[indexToFind];
};

/**
 * Time - O(n)
 * Space - O(n)
 * @param {number[]} array 
 * @param {number} left 
 * @param {number} right 
 */
function quickSelect(array, left, right, idxToFind) {
    if (left < right) {
        const partitionIndex = partition(array, left, right);
        // We eliminated half of the search space
        if (partitionIndex === idxToFind) {
            return array[partitionIndex];
        } else if (idxToFind < partitionIndex) {
            return quickSelect(array, left, partitionIndex - 1, idxToFind);
        } else {
            return quickSelect(array, partitionIndex + 1, right, idxToFind);
        }
    }
}

/**
 * 
 * @param {number[]} array 
 * @param {number} left 
 * @param {number} right 
 * @returns {number}
 */
function partition(array, left, right) {
    const pivotElm = array[right];
    let partitionIndex = left;

    for (let j = left; j < right; j++) {
        if (array[j] < pivotElm) {
            swap(array, partitionIndex, j);
            partitionIndex++;
        }
    }

    swap(array, partitionIndex, right);
    return partitionIndex;
}

/**
 * 
 * @param {number[]} arr 
 * @param {number} i 
 * @param {number} j
 * @returns {void}
 */
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // 4
console.log(findKthLargest([3], 1)); // 3