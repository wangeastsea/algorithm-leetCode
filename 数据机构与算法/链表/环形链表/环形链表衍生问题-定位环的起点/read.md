> 真题描述：给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。

> 示例 1：
输入：head = [3,2,0,-4]（如下图） 输出：tail connects to node index 1 解释：链表中有一个环，其尾部连接到第二个结点。


![image.png](https://upload-images.jianshu.io/upload_images/5016475-86016340d20abbf9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


> 示例 2：
输入：head = [1,2]（如下图）
输出：tail connects to node index 0
解释：链表中有一个环，其尾部连接到第一个结点。

![image.png](https://upload-images.jianshu.io/upload_images/5016475-f2d78c259688777b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 示例 3：
输入：head = [1]（如下图）
输出：no cycle
解释：链表中没有环。

![image.png](https://upload-images.jianshu.io/upload_images/5016475-554b0acae201c9ba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 解题思路

这道题在上道题的基础上，仅仅增加了一个“返回链表的成环起点”，其难度定义就从 easy 上升到了 medium。不过对于掌握了关键解题思路的各位来说，这道题仍然是 easy——因为如果一个结点是环形链表成环的起点，那么它一定是第一个被发现 flag 标志已存在的结点：

![image.png](https://upload-images.jianshu.io/upload_images/5016475-46248298de642d4d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这一点不难理解，我们试想如果从头开始遍历一个链表，假如途中进入了一个环，那么首先被打上 flag 标签的其实就是环的起点。待我们遍历完这个环时，即便环上所有的结点都已经被立了 flag，但起点处的 flag 一定最先被我们定位到。因此，我们只需要在第一次发现 flag 已存在时，将对应的结点返回即可：


### 快慢指针
定义慢指针 slow，快指针 fast。两者齐头并进， slow 一次走一步、fast 一次 走两步。这样如果它们是在一个有环的链表里移动，一定有相遇的时刻。这个原理证明起来也比较简单：我们假设移动的次数为 t，slow 移动的路程就是t，fast 移动的路程为2t，假如环的长度为 s，那么当下面这个条件：

```
2t - t = s
```
```
t = s
```
满足时，slow 和 fast 就一定会相遇。反之，如果两者没有相遇，同时 fast 遍历到了链表的末尾，发现 next 指针指向 null，则链表中不存在环。

leetcode 对于双指针的图解

![image.png](https://upload-images.jianshu.io/upload_images/5016475-6113176708e57b57.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



> https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/141ti-de-kuo-zhan-ru-guo-lian-biao-you-huan-ru-he-/

![image.png](https://upload-images.jianshu.io/upload_images/5016475-ec42b7bdc6690c58.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
var detectCycle = function (head) {
  let slowP = head, fastP = head // 都从头节点出发
  while (fastP) {                // head就是null了，没有入环点，直接返null
    if (fastP.next == null) return null // fastP.next为null也说明无环
    slowP = slowP.next           // 慢指针走一步
    fastP = fastP.next.next      // 快指针走两步
    if (slowP == fastP) {        // 首次相遇
      fastP = head               // 让快指针回到头节点
      while (true) {             // 开启循环，让快慢指针相遇
        if (slowP == fastP) {    // 相遇，地点发生在入环处
          return slowP           // 返回出指针的位置
        }
        fastP = fastP.next       // 快慢指针都走一步
        slowP = slowP.next
      }
    }
  }
  return null
};
```