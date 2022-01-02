// Problem Link - https://leetcode.com/problems/maximum-subarray/

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

// With Kandane’s algorithm we search the given array nums[1…n] from left to right.
// In the ith step, it calculate the subarray with the largest sum ending at i,
// this sum is maintained in currentSum. Moreover,
// it calculates the subarray with the largest sum anywhere in nums[1…n],
// maintained in maxSum and easily obtained as the maximum of all values of currentSum.

/**
 * @param {number[]} nums
 * @return {number}
*/
// O(n) time | O(1) Space
var maxSubArray = function(nums) {
    // initiate two variable, maxSum for total max, sum for current max
    let maxSum = -Infinity;
    let currentSum = 0;

    // iterate through the nums, store sub-problems result
    for (let idx = 0; idx < nums.length; idx++) {
        // cumulating answers to the top
        
        // compare currentSum add current number 
        // with current number and store the maximum value
        currentSum = Math.max(nums[idx], currentSum + nums[idx]);
        
        // compare maxSum with currentSum and store the greater value
        maxSum = Math.max(currentSum, maxSum);
    }

    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
console.log(maxSubArray([1])) // 1
console.log(maxSubArray([5,4,-1,7,8])) // 23