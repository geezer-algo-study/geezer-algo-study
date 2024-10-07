var MyQueue = function () {
  // 생성자 함수로 stack 배열 생성.
  this.stack = new Array();
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  // stack에 x 푸쉬 리턴;
  // O(1)
  return this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // stack의 첫번째 요소 제거
  // O(n)
  return this.stack.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // stack에 값이 있으면 stack의 첫번째 요소 리턴
  // O(1)
  if (this.stack.length > 0) {
    return this.stack[0];
  }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  // stack이 비었는지 확인
  // O(1)
  return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
