/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let map = new Map();
	let left = 0;
	let length = 0;

	for (let right = 0; right < s.length; right++) {
		let char = s[right];
		if (map.get(char) !== undefined && map.get(char) >= left) {
			left = map.get(char) + 1;
		} else {
			length = Math.max(length, right - left + 1);
		}
		map.set(s[right], right);
	}

	return length;
};
