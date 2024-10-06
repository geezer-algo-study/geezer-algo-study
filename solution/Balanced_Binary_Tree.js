var isBalanced = function(root) {
    let balanced = true;
    
    function dfs(node) {
        if (node === null) {
            return 0;
        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        if (Math.abs(left - right) > 1) {
            balanced = false;
        }

        return 1 + Math.max(left, right);
    }
    
    dfs(root);
    return balanced;
};