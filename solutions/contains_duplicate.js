/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let numsMap = new Map();

  for (let value of nums) {
    if (numsMap.has(value)) {
      return true;
    }
    numsMap.set(value, true);
  }
  return false;
};
