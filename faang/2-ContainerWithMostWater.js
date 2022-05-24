// Two Pointer
// Time - O(n^2)
// Space - O(1)
// Area = Height x Width
// Height -> Min(a, b)
// Width -> b(index) - a(index)
const getMaxWaterContainer = function(heights) {
    let maxArea = 0;

    if (heights.length < 2) {
        return maxArea;
    }

    for (let a = 0; a < heights.length; a++) {
        for (let b = a + 1; b < heights.length; b++) {
            const height = Math.min(heights[a], heights[b]);
            const width = b - a;
            const area = height * width;

            if (area > maxArea) {
                maxArea = area;
            }
        }
    }

    return maxArea;
};

// Two Shifting Pointers
//  Move the smallest pointer -> a++ and b--
// if the value of first index is less than the value of last index increase the first index else decrease the last index.
// As the decrease in width is constant, by following the above process the optimal answer can be reached.
// Time - O(n)
// Space - O(1)
// We will move smaller amoung two, because smaller has high chances of affecting the water level
const getMaxWaterContainer2 = function(heights) {
    let maxArea = 0;

    if (heights.length < 2) {
        return maxArea;
    }

    let a = 0;
    let b = heights.length - 1;

    while (a < b) {
        const height = Math.min(heights[a], heights[b]);
        const width = b - a;
        const area = height * width;

        maxArea = Math.max(maxArea, area);

        // Move the smallest pointer
        heights[a] < heights[b] ? a++ : b--;
    }
    

    return maxArea;
};

console.log(getMaxWaterContainer([7,1,2,9,3])); // 7 x 3 = 21
console.log(getMaxWaterContainer2([7,1,2,9,3])); // 7 x 3 = 21