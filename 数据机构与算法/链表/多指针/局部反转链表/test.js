function ListNode(val) {
    this.val = val
    this.next = null
}
const nodeList = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
}
function reverseBetween(head, m, n) {
    let pre, cur, next
    const dummy = new ListNode()
    dummy.next = head
    let p = dummy
    for (let i = 1; i < m; i++) {
        p = p.next
    }
    const leftHead = p
    const start = leftHead.next
    pre = start
    cur = pre.next
    // 交换2次
    for (let i = m; i < n; i++) {
        next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    start.next = cur
    leftHead.next = pre
    return dummy.next
}

console.log(reverseBetween(nodeList, 2, 4))
