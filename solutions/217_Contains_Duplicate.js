/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	let i = 0;
	let flag = false;

	while (!flag && i < nums.length) {
		if (nums.lastIndexOf(nums[i]) > i) {
			flag = true;
			break;
		}
		++i;
	}

	return flag;
};
