// Space - O(1)
// Time - O(n^2)
function bubbleSort(arr) {
    const length = arr.length;

    for (let idx = 0; idx < length; idx++) {
        for (let j = 0; j < length; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap Numbers
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }

    return arr;
}

console.log(bubbleSort([4,6,7,9,1,3,4,2, 5, 8, 10]));