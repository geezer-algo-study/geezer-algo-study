/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	let index = 0;
	let flag = false;
	let start = 0;
	let end = 0;

	for (let i = 0; i < intervals.length; i++) {
		if (
			intervals[i][0] <= newInterval[0] &&
			intervals[i][1] >= newInterval[0]
		) {
			start = intervals[i][0];
			index = i - 1;
			flag = true;
		}

		if (
			intervals[i][0] <= newInterval[1] &&
			intervals[i][1] >= newInterval[1]
		) {
			end = intervals[i][1];
			flag = false;
			intervals[i].pop();
		}

		if (flag) intervals[i].pop();
	}

	console.log(start + " / " + end);

	intervals.splice(index - 1, 0, [start, end]);

	return intervals;
};
