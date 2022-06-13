// https://leetcode.com/problems/binary-search/

// Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half.
// The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n). 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const foundVal = nums[mid];

        if (foundVal === target) {
            return mid;
        // Left Side
        } else if (foundVal < target) {
            left = mid + 1;
        // Right Side
        } else {
            right = mid - 1;
        }
    }

    return -1;
};

console.log(search([-1,0,3,5,9,12], 9)); // 4
console.log(search([-1,0,3,5,9,12], 2)); // -1