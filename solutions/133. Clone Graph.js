/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;

  const visited = new Map();

  function dfs(originalNode) {
    if (visited.has(originalNode)) {
      return visited.get(originalNode);
    }

    const clone = new _Node(originalNode.val);
    visited.set(originalNode, clone);

    for (let neighbor of originalNode.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  }

  return dfs(node);
};
