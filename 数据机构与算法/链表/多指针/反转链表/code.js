/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    // 初始化前驱结点为 null
    let pre = null
    // 初始化目标结点为头结点
    let cur = head
    // 只要目标结点不为 null，遍历就得继续
    while (cur !== null) {
        // 记录一下 next 结点
        const next = cur.next
        // 反转指针
        cur.next = pre
        // pre 往前走一步
        pre = cur
        // cur往前走一步
        cur = next
    }
    // pre 此时变成了头结点
    return pre
}
