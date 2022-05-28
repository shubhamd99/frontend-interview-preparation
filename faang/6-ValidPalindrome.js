// https://leetcode.com/problems/valid-palindrome

/**
 * Space - O(1)
 * Time - O(n)
 * @param {string} str 
 * @returns {boolean}
*/
const validPalindrome = function(str) {
    // No Extra Space
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); // include A-Z, a-z and 0-9 char // ^ -> not in this group

    if (str.length <= 1) {
        return true;
    }

    let p1 = 0;
    let p2 = str.length - 1;

    while (p1 < p2) {
        if (str[p1] !== str[p2]) {
            return false;
        }
        p1++;
        p2--;
    }

    return true;
}

console.log(validPalindrome('aba')); // true
console.log(validPalindrome('aabaa')); // true
console.log(validPalindrome('aabbaa')); // true
console.log(validPalindrome('abc')); // false
console.log(validPalindrome('a')); // true
console.log(validPalindrome('')); // true
console.log(validPalindrome('race car')); // true
console.log(validPalindrome('A man, a plan, a canal: Panama')); // true
console.log(validPalindrome('What the hell is this??')); // false
console.log(validPalindrome('ab')); // false