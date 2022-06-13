// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// Given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let startIndex = -1;
    let endIndex = -1;

    const firstPos = binarySearch(nums, 0, nums.length - 1, target)

    if (firstPos > -1) {
        startIndex = firstPos;
        endIndex = firstPos;

        while (nums[startIndex] === nums[startIndex - 1]) {
            startIndex--;
        }

        while (nums[endIndex] === nums[endIndex + 1]) {
            endIndex++;
        }
    }

    return [startIndex, endIndex];
};

function binarySearch(nums, left, right, target) {

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
}

console.log(searchRange([5,7,7,8,8,10], 8)); // [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)); // [-1,-1]