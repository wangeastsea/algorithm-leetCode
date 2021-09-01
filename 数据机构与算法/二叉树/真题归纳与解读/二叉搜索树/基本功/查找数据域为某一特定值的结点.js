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

function search(root, n) {
    if (!root) {
        return
    }
    if (root.val === n) {
        console.log(root)
    } else if (n > root.val) {
        search(root.right, n)
    } else {
        search(root.left, n)
    }
}
// function search(root, n) {
//     // 若 root 为空，查找失败，直接返回
//     if (!root) {
//         return
//     }
//     // 找到目标结点，输出结点对象
//     if (root.val === n) {
//         console.log('目标结点是：', root)
//     } else if (root.val > n) {
//         // 当前结点数据域大于n，向左查找
//         search(root.left, n)
//     } else {
//         // 当前结点数据域小于n，向右查找
//         search(root.right, n)
//     }
// }
search(root, 3)
