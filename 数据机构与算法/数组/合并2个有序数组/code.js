function mergeArray(nums1, m, nums2, n) {
    // 初始化2个指针
    let i = m - 1
    let j = n - 1
    let k = n + m - 1
    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i]
            k--
            i--
        } else {
            nums1[k] = nums2[j]
            k--
            j--
        }
    }
    // 如果后面还剩下nums2，说明num1头部空出来了。
    while (j >= 0) {
        nums1[k] = nums2[j]
        k--
        j--
    }
    return nums1
}

console.log('mergeArray', mergeArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
