/**
 * Time - O(n)
 * Space - O(n)
 * @param {string} s 
 * @returns 
 */
const validParenthesis = function(s) {
    const parens = {
        '{': '}',
        '[': ']',
        '(': ')',
    };

    if (s.length === 0) {
        return true;
    }

    const stack = [];

    for (let idx = 0; idx < s.length; idx++) {
        if (parens[s[idx]]) {
            stack.push(s[idx]);
        } else {
            const leftBracket = stack.pop();
            const correctBracket = parens[leftBracket];

            if (s[idx] !== correctBracket) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(validParenthesis('{()[]}'));
