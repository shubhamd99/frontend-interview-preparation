// Problem Link - https://leetcode.com/problems/3sum/

// Given an integer array nums,
// return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
*/
// O(n^2) time
// two pointers
var threeSum = function(nums, target = 0) {
    // sort the given array in ascending order
    nums.sort((a,b) => a - b);
    const triplets = [];

    for (let idx = 0; idx < nums.length - 2; idx++) {
        // making sure our solution set does not contain duplicate triplets
        if (nums[idx] !== nums[idx - 1]) {
            let left = idx + 1; // A left pointer will be set to a number that comes immediately after the current number
            let right = nums.length - 1; // a right pointer will be set to the number at the end of the array

            while (left < right) {
                // Then we are going to find our current sum which is the sum of our current number, a left number, and a right number.
                const currentSum = nums[idx] + nums[left] + nums[right];
                // Now we check if our current sum is equal to our target sum, which in this case is 0
                if (currentSum === target) {
                    // If it is equal, we just add those three numbers to our final array (triplets).
                    triplets.push([nums[idx], nums[left], nums[right]]);

                    while(nums[left] == nums[left + 1]) left++;
                    while(nums[right] == nums[right - 1]) right--; // For making sure our solution set does not contain duplicate triplets

                    left++;
                    right--;
                } else if (currentSum < 0) {
                    // If the current sum is less than 0, we move the left pointer to the right by one to increase the sum.
                    // Because we earlier sorted the given array in ascending order,
                    // we know that each number is greater than the number to its left.
                    left++;
                } else if (currentSum > 0) {
                    // If the current sum is greater than 0, because we know that each number is smaller than the number to its right,
                    // we can move the right pointer to the left by one to decrease the sum
                    right--;
                }
            }
        }
    }

    return triplets;
};

console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []