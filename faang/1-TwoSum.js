// Two Pointer
// Time - O(n^2)
// Space - O(1)
const findTwoSum = function(nums, target) {

    if (nums.length < 2) {
        return null;
    }

    for (let p1 = 0; p1 < nums.length; p1++) {
        const numToFind = target - nums[p1];

        for (let p2 = p1 + 1; p2 < nums.length; p2++) {
            if (numToFind === nums[p2]) {
                return [p1, p2];
            }
        }
    }

    return null;
}

// Time - O(n)
// Space - O(n)
function findTwoSum2(nums, target) {
    if (nums.length < 2) {
        return null;
    }

    const hashMap = {}; // {numToFind: index}

    for (let p1 = 0; p1 < nums.length; p1++) {
        if (hashMap[nums[p1]] >= 0) {
            return [hashMap[nums[p1]], p1];
        } else {
            const numsToFind = target - nums[p1];
            hashMap[numsToFind] = p1;
        }
    }

    return null;
}


console.log(findTwoSum([1, 3, 7, 9, 2], 11));
console.log(findTwoSum2([1, 3, 7, 9, 2], 11));