const root = {
    val: 3,
    left: {
        val: 9,
    },
    right: {
        val: 20,
        left: {
            val: 15,
        },
        right: {
            val: 7,
        },
    },
}
const levelOrder = function (root) {
    const res = []
    if (!root) {
        return res
    }
    const queue = []
    // queue某一层的所有节点数
    // 遍历的起点
    queue.push(root)
    while (queue.length) {
        const level = []
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const top = queue.shift()
            level.push(top.val)
            if (top.left) {
                queue.push(top.left)
            }
            if (top.right) {
                queue.push(top.right)
            }
        }
        res.push(level)
    }
    return res
}

function levelOrder1(root) {
    const res = []
    if (!root) {
        return res
    }
    const queue = []
    queue.push(root)
    while (queue.length) {
        const level = []
        const n = queue.length
        for (let i = 0; i < n; i++) {
            const top = queue.shift()
            level.push(top.val)
            if (top.left) {
                queue.push(top.left)
            }
            if (top.right) {
                queue.push(top.right)
            }
        }
        res.push(level)
    }
    return res
}

console.log(levelOrder1(root))
