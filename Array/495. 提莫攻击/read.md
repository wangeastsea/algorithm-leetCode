在《英雄联盟》的世界中，有一个叫 “提莫” 的英雄，他的攻击可以让敌方英雄艾希（编者注：寒冰射手）进入中毒状态。现在，给出提莫对艾希的攻击时间序列和提莫攻击的中毒持续时间，你需要输出艾希的中毒状态总时长。

你可以认为提莫在给定的时间点进行攻击，并立即使艾希处于中毒状态。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/teemo-attacking
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


```
输入: [1,4], 2
输出: 4
原因: 第 1 秒初，提莫开始对艾希进行攻击并使其立即中毒。中毒状态会维持 2 秒钟，直到第 2 秒末结束。
第 4 秒初，提莫再次攻击艾希，使得艾希获得另外 2 秒中毒时间。
所以最终输出 4 秒。
```

```
输入: [1,2], 2
输出: 3
原因: 第 1 秒初，提莫开始对艾希进行攻击并使其立即中毒。中毒状态会维持 2 秒钟，直到第 2 秒末结束。
但是第 2 秒初，提莫再次攻击了已经处于中毒状态的艾希。
由于中毒状态不可叠加，提莫在第 2 秒初的这次攻击会在第 3 秒末结束。
所以最终输出 3 。
```
```
[1,2,3,4,5]  5

预期结果： 9
```

```
提示：
你可以假定时间序列数组的总长度不超过 10000。
你可以假定提莫攻击时间序列中的数字和提莫攻击的中毒持续时间都是非负整数，并且不超过 10,000,000。
```
思路： 
题目的重点是：叠加的时间不算数，这是核心思路，整个题目的核心思路均是围绕这个来
- 少不了循环，第一次攻击直接生效，中毒总持续时间等于第一次中毒的持续时间
- 从第二次攻击开始，我们分为2种情况
    - 如果后一次攻击跟前一次攻击相差的时间大于毒持续时间，则上一次的中毒总持续时间想加中毒的持续时间为这一次的中毒总持续时间
    - 如果不满足上述情况则去除叠加中毒时间后的值正好是前一个时间序列和后一个时间序列的差值。
