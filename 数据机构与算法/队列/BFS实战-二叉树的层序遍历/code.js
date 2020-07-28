const root = {
    val: 'A',
    left: {
        val: 'B',
        left: {
            val: 'D',
        },
        right: {
            val: 'E',
        },
    },
    right: {
        val: 'C',
        right: {
            val: 'F',
        },
    },
}

function BFS(root) {
    // 初始化队列queue
    const queue = []
    queue.push(root)
    // 队列不为空，说明没有遍历完全
    while (queue.length) {
        console.log(queue)
        // 取出队头元素
        const top = queue[0]
        // 访问 top
        console.log(top.val)
        // 如果左子树存在，左子树入队
        if (top.left) {
            queue.push(top.left)
        }
        // 如果左子树存在，右子树入队
        if (top.right) {
            queue.push(top.right)
        }
        // 访问完毕，队头元素出队
        queue.shift()
    }
}

console.log(BFS(root))
