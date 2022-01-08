// Problem Link - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
*/
// O(n) time | O(1) Space
var maxProfit = function(prices) {
    let profit = 0;
    let min = prices[0];

    for (let idx = 1; idx < prices.length; idx++) {
        // The day we should buy at
        min = Math.min(min, prices[idx - 1]);
        // Check if selling at the current day gives us the most profit
        profit = Math.max(prices[idx] - min, profit);
    }

    return profit;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

console.log(maxProfit([7,6,4,3,1])); // 0
// In this case, no transactions are done and the max profit = 0.