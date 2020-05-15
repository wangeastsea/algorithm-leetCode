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

//  先序遍历 所有遍历函数的入参都是树的根结点对象
function preorder(root) {
    // 递归边界，root 为空
    if (!root) {
        return
    }

    // 输出当前遍历的结点值
    console.log('当前遍历的结点值是：', root.val)
    // 递归遍历左子树
    preorder(root.left)
    // 递归遍历右子树
    preorder(root.right)
}

// console.log(preorder(root))

// 中序遍历：先遍历左子数，然后遍历根节点，再遍历右子数
function inorder(root) {
    // 递归边界，root 为空
    if (!root) {
        return
    }
    // 递归遍历左子树
    preorder(root.left)
    // 输出当前遍历的结点值
    console.log('当前遍历的结点值是：', root.val)
    // 递归遍历右子树
    preorder(root.right)
}
// console.log(inorder(root))

// 后续遍历： 先遍历左子数，再遍历右子数，最后遍历根节点

function postorder(root) {
    if (!root) {
        return
    }
    // 递归遍历左子树
    postorder(root.left)
    // 递归遍历右子树
    postorder(root.right)
    // 输出当前遍历的结点值
    console.log('当前遍历的结点值是：', root.val)
}
console.log(postorder(root))
