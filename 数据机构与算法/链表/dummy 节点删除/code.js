function ListNode(val) {
    this.val = val
    this.next = null
}
// 节点两两比较
const deleteDuplicates = function (head) {
    if (!head || !head.next) {
        return head
    }
    const dummy = new ListNode()
    // dummy 永远指向头结点
    dummy.next = head
    let cur = dummy
    // 当 cur 的后面有至少两个结点时
    while (cur.next && cur.next.next) {
        // 对 cur 后面的两个结点进行比较
        if (cur.next.val === cur.next.next.val) {
            const val = cur.next.val
            while (cur.next && cur.next.val === val) {
                cur.next = cur.next.next
            }
        } else {
            // cur 一直在游走于整个链表
            cur = cur.next
        }
    }
    // 返回链表的起始结点
    return dummy.next
}
