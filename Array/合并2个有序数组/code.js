// 不动脑的写法估计就双层循环来解决，但是这种方式效率低，算法时间复杂度高，可以忽律，会收到面试官的藐视

// 标准解题是双指针法，首先我们定义两个指针，各指向两个数组生效部分的尾部：

// 由于 nums1 的有效部分和 nums2 并不一定是一样长的。我们还需要考虑其中一个提前到头的这种情况：
//
// 如果提前遍历完的是 nums1 的有效部分，剩下的是 nums2。那么这时意味着 nums1 的头部空出来了，直接把 nums2 整个补到 nums1 前面去即可。
// 如果提前遍历完的是 nums2，剩下的是 nums1。由于容器本身就是 nums1，所以此时不必做任何额外的操作。
// 解题之前，务必先明确提示，是有序数组。
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// TODO 此算法理解起来有一定难度，需要多在心里运算几遍。还没有理解透彻
const merge = function (nums1, m, nums2, n) {
    // 初始化两个指针的指向，初始化 nums1 尾部索引k
    let i = m - 1
    let j = n - 1
    let k = m + n - 1
    // 当两个数组都没遍历完时，指针同步移动
    while (i >= 0 && j >= 0) {
        // 取较大的值，从末尾往前填补
        if (nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i]
            i--
            k--
        } else {
            nums1[k] = nums2[j]
            j--
            k--
        }
    }

    // nums2 留下的情况，特殊处理一下
    while (j >= 0) {
        nums1[k] = nums2[j]
        k--
        j--
    }
    console.log(nums1)
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
