// https://leetcode.com/problems/kth-largest-element-in-an-array/

// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// We have to sort the array first with quickSort, then with kth value for example if k = 2
// [1,2,3,4,5,6] will traverse the array from backwards and the result will be 5

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const indexToFind = nums.length - k;
    quickSort(nums, 0, nums.length - 1); // Time - O(n logn), Space - O(n)
    return nums[indexToFind];
};

/**
 * 
 * @param {number[]} array 
 * @param {number} left 
 * @param {number} right 
 * @returns {number[]}
 */
function quickSort(array, left, right) {
    if (left < right) {
        const partitionIndex = partition(array, left, right);
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
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

console.log(findKthLargest([3,2,1,5,6,4], 2));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
console.log(findKthLargest([3], 1));