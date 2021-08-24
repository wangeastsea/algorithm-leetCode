/**
*二叉树的层序遍历
const root = {
     val: "A",
    left: {
        val: "B",
        left: {
        val: "D"
        },
        right: {
        val: "E"
        }
    },
    right: {
        val: "C",
        right: {
        val: "F"
        }
    }
};
A
B
C
D
E
F
 */

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
// 广度优先算法
function BFS(root) {
    const queue = []
    queue.push(root)
    while (queue.length) {
        const top = queue[0]
        console.log(top.val)
        if (top.left) {
            queue.push(top.left)
        }
        if (top.right) {
            queue.push(top.right)
        }
        queue.shift()
    }
}

console.log(BFS(root))
