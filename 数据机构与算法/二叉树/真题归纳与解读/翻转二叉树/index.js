const root = {
    val: 4,
    left: {
        val: 2,
        left: {
            val: 1,
        },
        right: {
            val: 3,
        },
    },
    right: {
        val: 7,
        left: {
            val: 6,
        },
        right: {
            val: 9,
        },
    },
}

function invertTree(root) {
    if (!root) {
        return root
    }
    const right = invertTree(root.right)
    const left = invertTree(root.left)
    if (right || left) {
        root.right = left
        root.left = right
    }
    return root
}

console.log(invertTree(root))
