/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  let answer = [];

  let sortedArray = points.sort((a, b) => {
    const distA = Math.sqrt(a[0] ** 2 + a[1] ** 2);
    const distB = Math.sqrt(b[0] ** 2 + b[1] ** 2);
    return distA - distB;
  });

  for (let i = 0; i < k; i++) {
    answer.push(sortedArray[i]);
  }

  return answer;
};
