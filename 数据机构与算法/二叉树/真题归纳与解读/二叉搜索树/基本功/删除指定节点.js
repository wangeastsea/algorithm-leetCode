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
function deleteNode(root, n) {
    if (!root) {
        return root
    }
    if (root.val === n) {
        if (!root.left && !root.right) {
            root = null
        } else if (root.left) {
            const maxLeft = finMax(root.left)
            root.val = maxLeft.val
            root.left = deleteNode(root.left, maxLeft.val)
        } else {
            const minRight = finMin(root.right)
            root.val = minRight.val
            root.right = deleteNode(root.right, minRight.val)
        }
    } else if (root.val > n) {
        root.left = deleteNode(root.left, n)
    } else {
        root.right = deleteNode(root.right, n)
    }
    return root
}

function finMax(root) {
    while (root.right) {
        root = root.right
    }
    return root
}
function finMin(root) {
    while (root.left) {
        root = root.left
    }
    return root
}

console.log(deleteNode(root, 5))
