// Contiguous - next or near in time or sequence (Contiguous string)

// Time - O(n^2)
// Space - O(n)
const findSubstring = function(str) {
    if (str.length <= 1) {
        return str.length;
    }

    let max = 0;

    for (let p1 = 0; p1 < str.length; p1++) {
        let hashMap = {};
        let currentLength = 0;
        for (let p2 = p1; p2 < str.length; p2++) {
            if (hashMap[str[p2]]) {
                break;
            } else {
                hashMap[str[p2]] = true;
                currentLength++;
            }
        }
        max = Math.max(max, currentLength);
    }

    return max;
}

// Time - O(n)
// Space - O(n)
const findSubstring2 = function(str) {
    if (str.length <= 1) {
        return str.length;
    }

    let left = 0;

    let longest = 0;

    let hashMap = {};

    for (let right = 0; right < str.length; right++) {
        const currentChar = str[right];
        const prevSeenChar = hashMap[currentChar];

        // If the previous seen char is smaller than left pointer then its not inside our current window
        if (prevSeenChar >= left) {
            // If we found repeating char, will update the left pointer to prevSeen char index + 1
            left = prevSeenChar + 1;
        }

        // We will update the hash map even if we found the char that is there before left to the updated index
        // As well as will update the new char in hashmap with its index
        hashMap[currentChar] = right;
        // The reason we add +1 is because we want the count of elements from the right to left indices, not the span of elements between them
        // The reason for this is because when we're counting elements between a range, i.e. elements 8 to 11, we have 4 elements [8, 9, 10, 11].
        // But when we subtract, we are asking for the difference between these elements i.e. 11 - 8 = 3 which is how many elements are there between 11 and 8 (which is 3)
        longest = Math.max(longest, right - left + 1)
    }
    
    return longest;
}

// console.log(findSubstring('abccabb'));
// console.log(findSubstring('cccccc'));
// console.log(findSubstring('abcbda'));

console.log(findSubstring2('abccabb')); // 3
console.log(findSubstring2('cccccc')); // 1
console.log(findSubstring2('abcbda')); // 4