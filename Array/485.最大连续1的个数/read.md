```
输入: [1,1,0,1,1,1]
输出: 3
解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
```

注意：
输入的数组只包含 0 和1。
输入数组的长度是正整数，且不超过 10,000。


#### 解法一：
解法比较笨重的思路：
- 声明一个 max 存储最大值
- 声明一个 array 存储连续的1
- for 循环 nums，每次循环到0时，判断 array.length 跟 max的大小，将最大的值赋予 max

#### 解法二：
利用 api 来完成，效率更加低效
- 通过一系列的 api 操作，将数组转变成下面的结构
    ```
    [1,0,1,1,1,1,0,1] => ["1", "1111", "1"] => [1,4,1]
    ```
- 从小到大进行排序
- 直接返回数组最后一个元素，即是最大的长度