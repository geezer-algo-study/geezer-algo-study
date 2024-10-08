/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const alphabetMap = new Map();
  const ransomMap = new Map();

  // hashmap에 {"a" : 1} 형태로 값을 담아준다.
  // O(1)
  for (const alphabet of magazine) {
    alphabetMap.set(alphabet, (alphabetMap.get(alphabet) || 0) + 1);
  }

  // hashmap에 {"a" : 1} 형태로 값을 담아준다.
  // O(1)
  for (const ransom of ransomNote) {
    ransomMap.set(ransom, (ransomMap.get(ransom) || 0) + 1);
  }

  // ransomMap을 돌면서 magazine안에 키값이 존재하는지 확인한다.
  // O(1)
  for (const [ransomChar, ransomCount] of ransomMap) {
    if (alphabetMap.has(ransomChar)) {
      if (alphabetMap.get(ransomChar) >= ransomCount) {
        alphabetMap.set(ransomChar, alphabetMap.get(ransomChar) - ransomCount);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  // 모든 조건이 총족되었다면 ransomNote를 만들 수 있다는 것임으로 true 반환
  return true;
};
