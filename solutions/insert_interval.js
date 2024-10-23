/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let startIndex = newInterval[0];
  let endIndex = newInterval[1];
  let newArray = [];

  for (const [start, end] of intervals) {
    let currentStart = start;
    let currentEnd = end;
    if (start <= startIndex) {
      currentStart = start;
    }

    if (end >= startIndex) {
    }
  }
};
