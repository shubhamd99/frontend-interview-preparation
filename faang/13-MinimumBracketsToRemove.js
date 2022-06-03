// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

/**
 * Time - O(4n) -> O(n)
 * Space - O(2n) -> O(n)
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {

    const res = s.split('');
    const stack = []; // LIFO - Last In First Out

    for (let i = 0; i < res.length; i++) {
        // Left Bracket
        // We will push left brackets into our stack
        if (res[i] === '(') {
            stack.push(i);
        // Right Bracket
        } else if (res[i] === ')') {
            // If theres already an Left Bracket present in our stack then we will remove that
            if (stack.length) {
                stack.pop();
            } else {
                res[i] = '';
            }
        }
    }

    // We will remove all the left brackets that are unclosed
    while(stack.length) {
        const currentIndex = stack.pop();
        res[currentIndex] = '';
    }

    return res.join('');
};

console.log(minRemoveToMakeValid('a)bc(d)')); // abc(d)
console.log(minRemoveToMakeValid('(ab(c)d')); // ab(c)d or (abc)d
console.log(minRemoveToMakeValid("))((")); // "" empty string
