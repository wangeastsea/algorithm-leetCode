/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val
    this.next = null
}
// 入参是头结点、m、n

const reverseBetween = function (head, m, n) {
    let pre, cur
    const dummy = new ListNode()
    dummy.next = head
    let p = dummy
    for (let i = 0; i < m - 1; i++) {
        p = p.next
    }
    // 缓存这个前驱结点到 leftHead 里
    const leftHead = p
    const start = leftHead.next
    pre = start
    cur = pre.next
    for (let i = m; i < n; i++) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    //  leftHead 的后继结点此时为反转后的区间的第一个结点
    leftHead.next = pre
    // 将区间内反转后的最后一个结点 next 指向 cur
    start.next = cur
    return dummy.next
}
