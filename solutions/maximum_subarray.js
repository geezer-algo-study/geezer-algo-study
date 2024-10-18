/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length;
  let memo = new Array(n + 1).fill(-1);
  let maxSum = nums[0];

  for (let i = 0; i < n; i++) {
    maxSum = Math.max(maxSum, dp(i, memo, nums));
  }

  return maxSum;
};

const dp = (i, memo, nums) => {
  if (i === 0) {
    return nums[i];
  }

  if (memo[i] === -1) {
    memo[i] = Math.max(nums[i], dp(i - 1, memo, nums) + nums[i]);
  }

  return memo[i];
};
