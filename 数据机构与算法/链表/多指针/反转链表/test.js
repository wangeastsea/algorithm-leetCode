const nodeList = {
    value: 1,
    next: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 3,
                    next: null,
                },
            },
        },
    },
}

// 翻转链表
function reverseList(head) {
    let pre = null
    let cur = head
    while (cur) {
        // 保存next
        const next = cur.next
        cur.next = pre
        // pre往前移动一步
        pre = cur
        // cur也要往前移动一步
        cur = next
    }
    return pre
}
console.log('reverseList', reverseList(nodeList))
