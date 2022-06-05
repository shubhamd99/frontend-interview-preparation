// A function that calls itself is known as a recursive function.
// A recursive function solves a particular problem by calling a copy of itself and solving smaller subproblems of the original problems.

// Normal Recursion Space - O(n)
// Tail Recursion Space - O(1)

// Regular Recursive function
// Space - O(n)
function recfactorial(x) {
    // Factorial of 0 and 1 is 1
    if (x <= 1) {
        return 1;
    } else {
        return x * recfactorial(x - 1);
    }
}
// 4 * 3 * 2 * 1 = 24

// Tail Recursive function
// Space - O(1)
function tailfactorial(x, totalSoFar = 1) {
    if (x === 0) {
        return totalSoFar;
    } else {
        // In Regular, we are waiting for another recursion function to complete than multiplying it with x (x * recfactorial(x - 1)) then returning it
        // In Tail, we are simply returning another instance of funtion 
        return tailfactorial(x - 1, totalSoFar * x);
    }
}
// tailfactorial(4)
// tailfactorial(4, 1)
// tailfactorial(3, 4)
// tailfactorial(2, 12)
// tailfactorial(1, 24)
// tailfactorial(0, 24)
// Ans - 24