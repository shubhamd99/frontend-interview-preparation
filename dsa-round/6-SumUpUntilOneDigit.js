// Sum up a number until it becomes 1 digit JS
// Subset Sum

// Recursive
// A brute force approach is to sum all the digits until sum < 10
function getOneDigit(num) {
    let numToString = String(num);
    let sum = numToString.split("").reduce((acc, cur) => {
        acc += parseInt(cur);
        return acc;
    }, 0);
    return sum >= 10 ? getOneDigit(sum) : sum;
}

console.log(getOneDigit(657234)); // 9
console.log(getOneDigit(5)); // 5
console.log(getOneDigit(234235)); // 1

// 19 = 2 + 3 + 4 + 2 + 3 + 5
// 10 = 1 + 9
// 1 = 1 + 0

// simple and elegant O(1) solution for this too
function getOneDigit2(num) {
    if (num === 0) return 0;

    // If a number n is divisible by 9, then the sum of its digit until sum becomes single digit is always 9.
    // A number can be of the form 9x or 9x + k. For the first case, answer is always 9. For the second case, and is always k.
    return (num % 9 === 0) ? 9 : (num % 9) 
}

console.log(getOneDigit2(657234)); // 9
console.log(getOneDigit2(5)); // 5
console.log(getOneDigit2(234235)); // 1


// Bonus

// SUM OF ALL ARGUMENTS IN A FUNCTION
// Recursevily Currying Example

function sumTillN(a) {
    return function (b) {
        return b ? sumTillN(a + b) : a;
    }
}

// console.log(sum(1)(2)(3)());

// [ sum(1)(2) ](3)(4)()
// [ sum(3)(3) ](4)()
// [ sum(6)(4) ]()
// 10
console.log('sumTillN', sumTillN(1)(2)(3)(4)()); // 10