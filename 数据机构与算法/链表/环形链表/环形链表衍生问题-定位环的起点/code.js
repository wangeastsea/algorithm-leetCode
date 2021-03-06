/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 快慢指针的做法
const detectCycle = function (head) {
    //  快慢指针
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        // 相等时，到达相遇点
        if (slow === fast) {
            // 带环的情况
            // cur 从链表头部出发，slow 从 fast 与 slow 的相遇点出发
            let cur = head
            // 不等时，cur 就是环的入口。
            while (cur !== slow) {
                cur = cur.next
                slow = slow.next
            }
            // 这个位置就是环的入口
            return cur
        }
    }
    return null
}
