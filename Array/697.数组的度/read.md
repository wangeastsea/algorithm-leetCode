> 给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。

你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/degree-of-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


```
输入: [1, 2, 2, 3, 1]
输出: 2
解释: 
输入数组的度是2，因为元素1和2的出现频数最大，均为2.
连续子数组里面拥有相同度的有如下所示:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
最短连续子数组[2, 2]的长度为2，所以返回2.
```

```
输入: [1,2,2,3,1,4,2]
输出: 6
```
注意:
nums.length 在1到50,000区间范围内。
nums[i] 是一个在0到49,999范围内的整数。

题目梳理一下：
- 需要找到度数最大的数字，可能同时存在多个，怎么同时寻找**多个**最大度数的数字
- 从最大度数的数字里，怎么寻找子数组**最短**的一个

思路梳理： 
这一题自己没有想处理啊， 通过查看参考别人的解答，做了出来，所以再此好好梳理下思路
- 通过使用 map 结构，nums循环一次，通过 Math.max 获取最大度数maxSize，此时不知道有哪些元素。
- nums 再次循环，当判断元素出现的次数等于maxSize时，通过Math.min可以求出最短连续子数组。