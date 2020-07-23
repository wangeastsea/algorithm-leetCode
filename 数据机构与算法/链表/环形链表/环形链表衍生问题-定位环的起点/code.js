/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// const detectCycle = function (head) {
//     while (head) {
//         if (head.flag) {
//             return head
//         } else {
//             head.flag = true
//             head = head.next
//         }
//     }
//     return null
// }

// function ListNode(val) {
//     this.val = val
//     this.next = null
// }

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
        if (slow === fast) {
            // 带环的情况
            // cur 从链表头部出发，slow 从 fast 与 slow 的相遇点出发
            let cur = head
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
