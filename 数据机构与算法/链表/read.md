
### 什么是链表

我们对数组都比较熟悉，所以通过类比的方法去学习链表，我们都知道数组是一块连续的，对内存的要求比较高。如果我们申请一个 100MB 大小的数组，当内存中没有连续的、足够大的存储空间时，即便内存的剩余总可用空间大于100MB，仍然会申请失败。而链表并不需要连续的存储空间，它通过指针将零散的内存块串联起来。最常见的链表结包括了单链表，双链表，循环链表。

### 单链表
链表是通过内存块串联起来，所有每个内存块除了存储数据之外，还需要记录指向下一个内存块的指针。我们
把第一个节点叫做头节点，最后一个节点叫做尾节点。尾节点指向空地址null。

![](https://upload-images.jianshu.io/upload_images/5016475-6fb6a9d1be424bfa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/640)

### 循环链表
循环链表跟单链表唯一的区别就是尾节点，循环链表的尾节点指向链表的头节点。
![](https://upload-images.jianshu.io/upload_images/5016475-efc747c08c60a37e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/640)

### 双向链表

双向链表每个结点不止有一个后继指针 next 指向后面的结点，还有一个前驱指针 prev 指向前面的结点。
![](https://upload-images.jianshu.io/upload_images/5016475-997ed8c6937afe4c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/640)

#### 双向循环链表
在双向链表的基础上，尾节点指向头节点。
![](https://upload-images.jianshu.io/upload_images/5016475-35c9d39ac776a71d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/640)



**特别说明**
以上图片来自https://time.geekbang.org/column/article/41149
