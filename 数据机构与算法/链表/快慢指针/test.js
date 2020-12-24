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
function NodeList(val) {
    this.val = val
    this.next = null
}
function removeNthFromEnd(nodeList, n) {
    const dummy = new NodeList()
    dummy.next = nodeList
    let slow = dummy
    let fast = dummy
    // 快指针到指定位置
    while (n) {
        fast = fast.next
        --n
    }
    // 快指针和慢指针同时向后移动，直到快指针到末尾
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    // 做删除操作
    slow.next = slow.next.next
    return nodeList
}

console.log('removeNthFromEnd', removeNthFromEnd(nodeList, 2))
