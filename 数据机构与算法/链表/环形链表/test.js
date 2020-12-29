// TODO 如何构造一个环形链表数据结构
function hasCycle(head) {
    while (head) {
        if (head.flag) {
            return true
        } else {
            head.flag = true
            head = head.next
        }
    }
    return false
}
