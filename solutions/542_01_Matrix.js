/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
	let zeroPosition = [];
	let result = new Array(mat.length);
	for (let i = 0; i < result.length; i++) {
		result[i] = new Array(mat[0].length);
	}

	for (let i = 0; i < mat.length; i++) {
		for (let j = 0; j < mat.length; j++) {
			if (mat[i][j] === 0) zeroPosition.push([i, j]);
		}
	}

	for (let i = 0; i < mat.length; i++) {
		for (let j = 0; j < mat.length; j++) {
			if (mat[i][j] === 0) {
				result[i][j] = 0;
			} else if (mat[i][j] === 1) {
				const tempArr = [];

				zeroPosition.forEach((elem) => {
					tempArr.push(Math.abs(i - elem[0]) + Math.abs(j - elem[1]));
				});

				result[i][j] = Math.min(...tempArr);
			}
		}
	}

	return result;
};
