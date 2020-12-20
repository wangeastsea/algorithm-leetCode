function getIndex(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        // 差值
        const val = target - nums[i]
        if (map.has(val)) {
            return [map.get(val), i]
        } else {
            // {2 -> 0}
            map.set(nums[i], i)
        }
    }
}

console.log('getIndex', getIndex([2, 7, 11, 15], 9))
