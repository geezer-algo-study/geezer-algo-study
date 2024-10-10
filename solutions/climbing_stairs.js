/**
 * @param {number} n
 * @return {number}
 */

// top-down 방식의 동적계획법
let memo = {};
var climbStairs = function (n) {
  // O(1)
  memo[0] = 1;
  memo[1] = 1;
  memo[2] = 2;

  if (!memo[n]) {
    // 최대 O(n)
    memo[n] = climbStairs(n - 2) + climbStairs(n - 1);
  }

  return memo[n];
};
