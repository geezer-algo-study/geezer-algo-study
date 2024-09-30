/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sMap = new Map();
  const tMap = new Map();

  // O(n)
  for (const sElement of s) {
    if (!sMap.has(sElement)) {
      sMap.set(sElement, 1);
    } else {
      sMap.set(sElement, sMap.get(sElement) + 1);
    }
  }

  // O(n)
  for (const tElement of t) {
    if (!tMap.has(tElement)) {
      tMap.set(tElement, 1);
    } else {
      tMap.set(tElement, tMap.get(tElement) + 1);
    }
  }

  // O(1)
  if (sMap.size !== tMap.size) return false;

  // O(n)
  for (let [key, value] of sMap) {
    // O(1)
    if (!tMap.has(key) || tMap.get(key) !== value) {
      return false;
    }
  }

  // O(s+t)
  return true;
};
