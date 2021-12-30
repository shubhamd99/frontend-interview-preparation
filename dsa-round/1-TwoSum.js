// Problem Link - https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target
// Can you come up with an algorithm that is less than O(n2) time complexity?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
// O(n^2) time | O(1) Space
var twoSum = function(nums, target) {
    if (nums.length === 0 || !target) {
		return [];
	}

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9)); // [0,1]. Because nums[0] + nums[1] == 9, we return [0, 1].
console.log(twoSum([3,2,4], 6)); // [1,2]
console.log(twoSum([3,3], 6)); // [0,1]


// O(n) time | O(n) Space
// x + y = 10
// y = 10 - x
var twoSum2 = function(nums, target) {
    const numMap = {};

    for (const [index, num] of nums.entries()) {
        const match = target - num;
        if (match in numMap) {
            return [numMap[match], index];
        } else {
            numMap[num] = index;
        }
    }

    return [];
};

console.log(twoSum2([2,7,11,15], 9)); // [0,1]. Because nums[0] + nums[1] == 9, we return [0, 1].
console.log(twoSum2([3,2,4], 6)); // [1,2]
console.log(twoSum2([3,3], 6)); // [0,1]

// O(nlog(n)) time | O(1) Space
// Left amd Right Pointers
// Binary Search
var twoSum3 = function(nums, target) {
    nums.sort((a, b) => a - b); // O(log(n))

    let left = 0; // first index
	let right = nums.length - 1; // last index

    while (left < right) { // O(n)
        const curSum = nums[left] + nums[right];

        if (curSum === target) {
            return [nums[left], nums[right]];
        } else if (curSum < target) {
            left++;
        } else if (curSum > target) {
            right--;
        }
    }

    return [];
};

console.log(twoSum3([2,7,11,15], 9)); // [0,1]. Because nums[0] + nums[1] == 9, we return [0, 1].
console.log(twoSum3([3,2,4], 6)); // [1,2]
console.log(twoSum3([3,3], 6)); // [0,1]
