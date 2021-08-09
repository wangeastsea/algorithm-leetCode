/**
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
    输入：head = [1,3,2]
    输出：[2,3,1]
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 */

function ListNode(val) {
    this.val = val
    this.next = null
}
const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
/**
 * @param {*} head
 */

var reversePrint = function (head) {
    const nums = []
    while (head) {
        const val = head.val
        nums.push(val)
        head = head.next
    }
    return nums.reverse()
}
// 翻转链表，然后从头输出val
var reversePrint1 = function (cur) {
    let pre = null
    let next = null
    const nums = []
    while (cur) {
        next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    while (pre) {
        const val = pre.val
        nums.push(val)
        pre = pre.next
    }
    return nums
}

console.log(reversePrint1(head))
