// Problem Link - https://leetcode.com/problems/search-in-rotated-sorted-array/

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length),
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target,
// return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity

// BUT how to find the pivot point where we should divide the array?
// One way is to search for the pivot by going through the list,
// but it would take O(n) time. So we need a different way of searching for that pivot.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Binary Search : O(log n)
var search = function(nums, target) {
    // We want to modify the binary search algorithm,
    // since the given array is rotated at a pivot and is not strictly sorted.

    if (nums.length === 0 || nums === null) return -1;

    let left = 0;
    let right = nums.length - 1;

    // Here we're just converting towards finding that minimum element in the array.
    // We face 2 cases :
    // 1> if arr[mid] > arr[right], it means we're in right sorted array, so go towards left to find the pivot element.
    // 2> else it means the array is rotated, so go towards left to find that right sorted array.
    while (left < right) {
        let mid = Math.floor((left + right)/2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    let pivot = left;
    left = 0;
    right = nums.length - 1;

    // For searching pivot, we know for a fact that arr[pivot-1] > arr[pivot] < arr[pivot+1] ,
    // and we're going to use this one key property to find that sweet little pivot
    if (nums[pivot] <= target && target <= nums[right]) {
        left = pivot;
    } else {
        right = pivot;
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] == target){
            return mid;
        }
        if (nums[mid] < target){
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    
    return -1;
};

console.log(search([4,5,6,7,0,1,2], 0)); // 4
console.log(search([4,5,6,7,0,1,2], 3)); // -1
console.log(search([1], 0)); // -1
