// way1 双指针+ 遍历法
const maxSlidingWindow = function (nums, k) {
    const len = nums.length
    const res = []
    let left = 0
    let right = k - 1
    while (right < len) {
        const max = callMax(nums, left, right)
        res.push(max)
        left++
        right++
    }
    return res
}

function callMax(arr, left, right) {
    if (!arr || !arr.length) {
        return ''
    }
    let maxNum = arr[left]
    for (let i = left; i <= right; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i]
        }
    }
    return maxNum
}

// way2 双端队列解法  神法： 维护一个有效递减队列
