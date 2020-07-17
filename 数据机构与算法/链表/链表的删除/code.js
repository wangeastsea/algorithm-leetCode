const deleteDuplicates = function (head) {
    // 设定 cur 指针，初始位置为链表第一个结点
    let cur = head
    while (cur !== null && cur.next !== null) {
        if (cur.val === cur.next.val) {
            // 删除的关键操作
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
}

deleteDuplicates()
