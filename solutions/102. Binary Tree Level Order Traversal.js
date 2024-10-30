/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  console.log(bfs(root));
  // let arr = [];
  // let depth = Math.floor(Math.log2(root.length));

  // for(let i = 0; i < depth; i++) {
  //     let nodeArr = [];

  //     for(let j = 0; j < Math.pow(2, i); i++) {
  //         nodeArr.push(root.shift());
  //     }

  //     arr.push(nodeArr);
  // }

  // return arr;
  // return [[1, 2]]
};

function bfs(root) {
  let visited = [];
  let nodeArr = [];

  nodeArr.push([root, 0]);

  while (nodeArr.length !== 0) {
    let tempNode = nodeArr.shift();
    console.log(tempNode);

    if (!visited.includes(tempNode) && tempNode[0] !== null) {
      visited.push([tempNode[0], tempNode[1] + 1]);
      nodeArr = [
        ...nodeArr,
        [tempNode[0].left, tempNode[1] + 1],
        [tempNode[0].right, tempNode[1] + 1],
      ];
    }
  }

  return visited;
}
