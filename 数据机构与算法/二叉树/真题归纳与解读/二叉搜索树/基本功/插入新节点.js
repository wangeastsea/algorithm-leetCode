const root = {
    val: 5,
    left: {
        val: 2,
        right: {
            val: 3,
        },
    },
    right: {
        val: 7,
    },
}
class TreeNode {
    constructor(n) {
        this.val = n
        this.left = null
        this.right = null
    }
}
// n = 5
function insertIntoBST(root, n) {
    if (!root) {
        root = new TreeNode(n)
        return root
    }
    if (root.val > n) {
        root.left = insertIntoBST(root.left, n)
    } else {
        root.right = insertIntoBST(root.right, n)
    }
    return root
}

console.log(insertIntoBST(root, 4))
