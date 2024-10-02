/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const startPixel = image[sr][sc]; // O(1)
  const row = image.length; // O(1)
  const col = image[0].length; // O(1)
  const delta = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ]; // O(1)
  let copyImage = image; // O(1) - 얕은 복사

  const dfs = (curX, curY) => {
    copyImage[curX][curY] = color; // O(1)

    delta.map(([deltaX, deltaY]) => {
      // O(1) - delta의 길이가 항상 4
      const nextX = curX + deltaX; // O(1)
      const nextY = curY + deltaY; // O(1)

      if (nextX >= 0 && nextY >= 0 && nextX < row && nextY < col) {
        // O(1)
        if (
          image[nextX][nextY] === startPixel &&
          image[nextX][nextY] !== color
        ) {
          // O(1)
          dfs(nextX, nextY); // 재귀 호출
        }
      }
    });
  };

  dfs(sr, sc); // 초기 호출

  return copyImage; // O(1)
};
