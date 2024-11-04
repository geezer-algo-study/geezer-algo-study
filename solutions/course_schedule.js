/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if (prerequisites.length === 0) return true;

  // 과목이 몇개의 선행과목이 필요한지 담는 배열
  const visited = new Array(numCourses).fill(0);
  const courses = Array.from({ length: numCourses }, () => []);
  let queue = [];
  let count = 0;

  for (const [course, pre] of prerequisites) {
    // 방향 그래프를 만들어준다.
    courses[pre].push(course);
    // 과목의 선행과목 누적
    visited[course]++;
  }

  for (let i = 0; i < numCourses; i++) {
    // 선행과목이 없는 과목부터 탐색하기 위해 queue에 담아준다.
    if (visited[i] === 0) {
      queue.push(i);
    }
  }
  console.log(queue);
  while (queue.length > 0) {
    const cur = queue.shift();
    // 총 방문한 과목 개수 카운팅
    count++;

    courses[cur].forEach((course) => {
      console.log(course);
      visited[course]--;
      // 선행과목이 없다면 queue에 또 담아준다.
      if (visited[course] === 0) {
        queue.push(course);
      }
    });
  }

  // 총 방문한 과목 개수와 방문해야하는 과목 개수가 같으면  true
  return count === numCourses;
};
