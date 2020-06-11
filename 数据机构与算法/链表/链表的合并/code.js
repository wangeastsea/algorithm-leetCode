function ListNode(val) {
    this.val = val
    this.next = null
}

// 链表类似于这种结构
// {
//     // 数据域
//     val: 1,
//     // 指针域，指向下一个结点
//     next: {
//         val:2,
//         next: ...
//     }
// }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
    // 定义头结点，确保链表可以被访问到
    const head = new ListNode()
    // cur 这里就是咱们那根“针”
    let cur = head
    // “针”开始在 l1 和 l2 间穿梭了
    while (l1 && l2) {
        // 如果 l1 的结点值较小
        if (l1.val <= l2.val) {
            // 先串起 l1 的结点
            cur.next = l1
            // l1 指针向前一步
            l1 = l1.next
        } else {
            // l2 较小时，串起 l2 结点
            cur.next = l2
            // l2 向前一步
            l2 = l2.next
        }

        // “针”在串起一个结点后，也会往前一步
        cur = cur.next
    }

    // 处理链表不等长的情况
    cur.next = l1 !== null ? l1 : l2
    // 返回起始结点
    return head.next
}
