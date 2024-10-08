/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // 시간 복잡도 고려해서 이진탐색으로 문제를 품.
    let left = 1; // O(1)
    let right = n; // O(1)

    while (left <= right) {
      // O(log n)
      let mid = Math.floor((left + right) / 2);

      // 중간 값이 true이고 그 이전값이 false일 경우 정답은 중간값이므로 리턴.
      if (isBadVersion(mid) && !isBadVersion(mid - 1)) {
        // O(1)
        return mid;
        // 중간 값 false일 경우는 왼쪽부분에서는 답이 없다는것이므로 left 재설정
      } else if (!isBadVersion(mid)) {
        // O(1)
        left = mid + 1;
        // 둘다 아니라면 right 재설정
      } else {
        // O(1)
        right = mid - 1;
      }
    }
  };
};

// 쵀디 시간 복잡도 O(logn)
