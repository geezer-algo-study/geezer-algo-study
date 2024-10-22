/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	let arr = [];

	for (let i = 0; i < intervals.length; i++) {
		arr.push(intervals[i][0]);
		arr.push(intervals[i][1]);
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] <= newInterval[0] && arr[i + 1] >= newInterval[0]) {
			arr.splice(i);
		}
	}

	return intervals;
};
