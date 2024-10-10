var longestPalindrome = function (s) {
  let arr = s.split("");
  const result = [];
  const countMap = {};

  // 배열의 각 값에 대해 카운트를 증가시킴
  arr.forEach((value) => {
    countMap[value] = (countMap[value] || 0) + 1;
  });

  // countMap 객체를 배열로 변환
  for (const key in countMap) {
    result.push({ [key]: countMap[key] });
  }

  return result;
};
