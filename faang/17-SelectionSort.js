// The selection sort algorithm sorts an array by repeatedly finding the minimum element
// (considering ascending order) from unsorted part and putting it at the beginning

// Space - O(1)
// Time - O(n^2)
/**
 * 
 * @param {number[]} arr 
 * @returns 
 */
function selectionSort(arr) {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        let min = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min]
        arr[min] = temp;
    }

    return arr;
}

console.log(selectionSort([4,6,7,9,1,3,4,2, 5, 8, 10]));