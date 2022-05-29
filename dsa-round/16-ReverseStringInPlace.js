function setCharAt(str,index,chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

/**
 * Time - O(n)
 * Space - O(n)
 * @param {string} str 
 * @returns {string} 
 */
const reverseStringInPlace = function(str) {
    let p1 = 0;
    let p2 = str.length - 1;

    while (p1 < p2) {
        let temp = str[p1];
        str = setCharAt(str, p1, str[p2]);
        str = setCharAt(str, p2, temp);
        p1++;
        p2--;
    }

    return str;
}

/**
 * @param {string} str 
 * @returns {string} 
 */
const reverseStringInPlace2 = function(str) {
if (str === "") // This is the terminal case that will end the recursion
    return "";
  else
    return reverseStringInPlace2(str.substring(1)) + str.charAt(0);
}

console.log(reverseStringInPlace('abchdhjsd'));
console.log(reverseStringInPlace('hello world'));

console.log(reverseStringInPlace2('abchdhjsd'));
console.log(reverseStringInPlace2('hello world'));

'hello'.substring(1); // ello
'hello'.charAt(0); // h