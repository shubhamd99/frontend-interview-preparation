// https://leetcode.com/problems/valid-palindrome-ii/
// A string is almost a palindrome if it becomes a palindrome after removing 1 letter

const validSubPalindrome = function(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

/**
 * Space - O(1)
 * Time - O(n)
 * @param {string} str 
 * @returns {boolean}
*/
const almostPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (s[start] !== s[end]) {
            return validSubPalindrome(s, start + 1, end) || validSubPalindrome(s, start, end - 1);
        }
        start++;
        end--;
    }
    return true;
}

console.log(almostPalindrome('race a car')); // true // 'raceacar' -> 'racecar' we can remove either 'e' or 'a' to make it palindrome
console.log(almostPalindrome('abccdba')); // true // 'abccdba' -> 'abccba' here we have to only remove 'd', otherwise it will not be an palindrome
console.log(almostPalindrome('abcdefdba')); // false
console.log(almostPalindrome('')); // true
console.log(almostPalindrome('a')); // true
console.log(almostPalindrome('ab')); // true -> 'a'
console.log(almostPalindrome('cbbcc')); // true