// https://leetcode.com/problems/backspace-string-compare/

// Space - O(a + 2b) or O(2a + b) which is O(a + b)
// Time -  O(a + 2b) or O(2a + b) which is O(a + b)
const backSpaceCompare = function(s, t) {
    // O(n)
    const buildString = (str, backspaceStr = '#') => {
        const result = [];
        for (let idx = 0; idx < str.length; idx++) {
            if (str[idx] === backspaceStr) {
                result.pop();
            } else {
                result.push(str[idx]);
            }
        }
        return result;
    };

    const a = buildString(s); // O(a)
    const b = buildString(t); // O(b)

    if (a.length === 0 && b.length === 0) {
        return true;
    }

    if (a.length !== b.length) {
        return false;
    }

    for (const [index, str] of a.entries()) {
        if (str !== b[index]) {
            return false;
        }
    }

    return true;
}

// Two Pointer
// Time - O(a + 2b) or O(2a + b) which is O(a + b)
// Space - O(1)
const backSpaceCompare2 = function(s, t) {
    let p1 = s.length - 1;
    let p2 = t.length - 1;

    while (p1 >= 0 || p2 >= 0) {
        // Incase of hash we have to move back by two: 'abc##' -> 'a
        if (s[p1] === '#' || t[p2] === '#') {
            if (s[p1] === '#') {
                let backcount = 2;
                while (backcount > 0) {
                    p1--;
                    backcount--;

                    // Incase we found another '#' while going backwards, we have to increase backcount again
                    if (s[p1] === '#') {
                        backcount += 2;
                    }
                }
            }

            // Incase of hash we have to move back by two
            if (t[p2] === '#') {
                let backcount = 2;
                while (backcount > 0) {
                    p2--;
                    backcount--;

                    // Incase we found another '#' while going backwards, we have to increase backcount again
                    if (t[p2] === '#') {
                        backcount += 2;
                    }
                }
            }
        } else {
            if (s[p1] !== t[p2]) {
                return false;
            } {
                p1--;
                p2--;
            }
        }
    }

    return true;
}

// console.log(backSpaceCompare('ab#z', 'az#z')); // true
// console.log(backSpaceCompare('abc#d', 'acc#c')); // false
// console.log(backSpaceCompare('x#y#z#', 'a#')); // true, empty string
// console.log(backSpaceCompare('a###b', 'b')); // true
// console.log(backSpaceCompare('Ab#z', 'ab#z')); // false, case sensitive

console.log(backSpaceCompare2('ab#z', 'az#z')); // true
console.log(backSpaceCompare2('abc#d', 'acc#c')); // false
console.log(backSpaceCompare2('x#y#z#', 'a#')); // true, empty string
console.log(backSpaceCompare2('a###b', 'b')); // true
console.log(backSpaceCompare2('Ab#z', 'ab#z')); // false, case sensitive