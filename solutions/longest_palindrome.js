/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // O(nlogn)
  const sortedLetters = s.split("").sort((a, b) => a - b);
  const letterMap = new Map();
  let isOdd = false;
  let isOne = false;
  let count = 0;

  // O(1) Early Return
  if (sortedLetters.length === 1) return 1;

  // hashMap에 값 담아주기 O(n)
  for (const alphabet of sortedLetters) {
    if (letterMap.has(alphabet)) {
      const letterCount = letterMap.get(alphabet);
      letterMap.set(alphabet, letterCount + 1);
    } else {
      letterMap.set(alphabet, 1);
    }
  }

  // hashMap 순회 O(n)
  letterMap.forEach((value, key) => {
    if (value === 1) {
      isOne = true;
    }

    if (value % 2 === 0) {
      count += value;
    }

    if (value % 2 === 1 && value !== 1) {
      count += value - 1;
      isOdd = true;
    }
  });

  return isOne || isOdd ? count + 1 : count;
};
