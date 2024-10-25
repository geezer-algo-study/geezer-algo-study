/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const subStringMap = new Map();
  let count = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (!subStringMap.has(s[i])) {
      subStringMap.set(s[i], i);
      count += 1;
      maxLength = Math.max(maxLength, findMaxSequenceInMap(subStringMap));
    } else if (subStringMap.has(s[i])) {
      subStringMap.delete(s[i]);
      subStringMap.set(s[i], i);
      count = 1;
      maxLength = Math.max(maxLength, findMaxSequenceInMap(subStringMap));
    }
  }

  return s.length === 0 ? 0 : maxLength;
};

function findMaxSequenceInMap(map) {
  const values = [...map.values()];
  values.sort((a, b) => a - b);

  let maxLength = 1;
  let currentLength = 1;

  for (let i = 1; i < values.length; i++) {
    if (values[i] === values[i - 1] + 1) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 1;
    }
  }

  return maxLength;
}
