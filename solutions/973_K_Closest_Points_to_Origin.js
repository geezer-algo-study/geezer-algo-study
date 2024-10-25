/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
	let arr = [];
	let result = [];

	arr = quickSort(points);

	for (let i = 0; i < k; i++) {
		result.push(arr[i]);
	}

	return result;
};

const quickSort = function (arr) {
	if (arr.length <= 1) return arr;

	const pivot = arr[0];
	const pivotDistance = getDistance(arr[0][0], arr[0][1]);
	const left = [];
	const right = [];

	for (let i = 1; i < arr.length; i++) {
		if (getDistance(arr[i][0], arr[i][1]) < pivotDistance) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	const lSorted = quickSort(left);
	const rSorted = quickSort(right);
	return [...lSorted, pivot, ...rSorted];
};

const getDistance = (x, y) => Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
