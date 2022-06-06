// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands.
// The array is virtually split into a sorted and an unsorted part.
// Values from the unsorted part are picked and placed at the correct position in the sorted part.


// Space - O(1)
// Time - O(n)
/**
 * 
 * @param {number[]} arr 
 * @returns 
 */
function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            //move number to the first position
            array.unshift(array.splice(i, 1)[0]);
        } else {
            // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
            if (array[i] < array[i - 1]) {
                //find where number should go
                for (var j = 1; j < i; j++) {
                    if (array[i] >= array[j - 1] && array[i] < array[j]) {
                        //move number to the right spot
                        array.splice(j, 0, array.splice(i, 1)[0]);
                    }
                }
            }
        }
    }
    return array;
}

console.log(insertionSort([4,6,7,9,1,3,4,2, 5, 8, 10]));