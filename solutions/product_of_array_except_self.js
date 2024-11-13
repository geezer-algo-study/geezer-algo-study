/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const zeroCount = nums.filter((num) => num === 0).length;
  if (zeroCount > 1) return new Array(nums.length).fill(0);

  if (zeroCount === 1) {
    const totalProduct = nums.reduce(
      (acc, num) => (num === 0 ? acc : acc * num),
      1
    );
    return nums.map((num) => (num === 0 ? totalProduct : 0));
  }

  const totalProduct = nums.reduce((acc, num) => acc * num, 1);
  return nums.map((num) => totalProduct / num);
};
