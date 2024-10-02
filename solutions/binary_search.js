/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0; // O(1)
  let right = nums.length - 1; // O(1)

  while (left <= right) {
    // O(log n)
    let mid = Math.floor((left + right) / 2); // O(1)

    if (nums[mid] === target) {
      // O(1)
      return mid;
    } else if (nums[mid] < target) {
      // O(1)
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // 타겟을 찾지 못한 경우
};

// 최대 시각 복잡도 O(log n)
