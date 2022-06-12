// Like QuickSort, Merge Sort is a Divide and Conquer algorithm.
// It divides the input array into two halves, calls itself for the two halves,
// and then it merges the two sorted halves.
// The merge() function is used for merging two halves.
// The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted
// and merges the two sorted sub-arrays into one. 

/**
 * Time - O(nLogn) - Divide and Conquer
 * Space - O(n)
 * @param {number[]} array 
 * @returns 
 */
function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    // Split array into left and right
    const length = array.length;
    const middle = Math.floor(length / 2); // Mid point
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right),
    );
}

/**
 * 
 * @param {number[]} left 
 * @param {number[]} right 
 * @returns {number[]}
 */
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;


    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([4, 6, 7, 9, 1, 3, 4, 2, 5, 8, 10]));