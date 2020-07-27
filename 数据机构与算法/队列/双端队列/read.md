 ### 双端队列解法处理滑动窗口问题

 > https://juejin.im/book/5cb42609f265da035f6fcb65/section/5cea46f55188253a275a3a04


 > 双端队列就是允许在队列的两端进行插入和删除的队列。

 ```
const queue = [1,2,3,4] // 定义一个双端队列   
queue.push(1) // 双端队列尾部入队 
queue.pop() // 双端队列尾部出队   
queue.shift() // 双端队列头部出队 
queue.unshift(1) // 双端队列头部入队
 ```