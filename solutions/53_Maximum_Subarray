/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let localMaxValue = nums[0];
	let maxValue = nums[0];

	for (let i = 1; i < nums.length; i++) {
		if (localMaxValue + nums[i] <= nums[i]) {
			localMaxValue = nums[i];
		} else {
			localMaxValue = localMaxValue + nums[i];
		}

		maxValue = Math.max(localMaxValue, maxValue);
	}

	return maxValue;
};
