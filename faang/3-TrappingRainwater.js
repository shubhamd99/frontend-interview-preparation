
// One Pointer
// Current Water = min(max Left, max Right) - current height
// Time - O(n^2)
// Space - O(1)
const getTrappedRainwater = function(heights) {
    let totalWater = 0;

    for (let p = 0; p < heights.length; p++) {
        let leftP = p;
        let rightP = p;
        let maxLeft = 0;
        let maxRight = 0;

        // Loop through left side from p and calculate the left Max
        while (leftP >= 0) {
            maxLeft = Math.max(maxLeft, heights[leftP]);
            leftP--;
        }

        // Loop through right side from p and calculate the right Max
        while (rightP < heights.length) {
            maxRight = Math.max(maxRight, heights[rightP]);
            rightP++;
        }

        // Current Water = min(max Left, max Right) - current height
        const currentWater = Math.min(maxLeft, maxRight) - heights[p];

        // We will not add negative value
        if (currentWater >= 0) {
            totalWater += currentWater;
        }
    }

    return totalWater;
}

// Two Pointers
// We will move smaller amoung two, because smaller has high chances of affecting the water level
// We will take smallest value amoung two pointer as current height
// Time - O(n)
// Space - O(1)
const getTrappedRainwater2 = function(heights) {
    let left = 0;
    let right = heights.length - 1;

    let total = 0;
    let maxLeft = 0;
    let maxRight = 0;

    // Loop through heights
    while (left < right) {
        // check which one is smaller and operate on that side, because smaller side will impact the water level
        if (heights[left] <= heights[right]) {
            // If height is taller than will update the max left height otheriwse we will calculate the total current water
            if (heights[left] >= maxLeft) {
                maxLeft = heights[left];
            } else {
                // Max left substracts current height will give you water level
                total += maxLeft - heights[left];
            }
            left++;
        } else {
            if (heights[right] >= maxRight) {
                maxRight = heights[right];
            } else {
                total += maxRight - heights[right];
            }
            right--;
        }
    }

    return total;
}

// [] 0
// [3] 0
// [3,4,3] 0
// Will not count left and right side of the graph as walls

console.log(getTrappedRainwater([0,1,0,2,1,0,3,1,0,1,2])); // 8
console.log(getTrappedRainwater2([0,1,0,2,1,0,3,1,0,1,2])); // 8