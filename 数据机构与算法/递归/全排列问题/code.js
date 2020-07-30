// TODO 还是没有搞懂，搞不懂怎么
const permute = function (nums) {
    const len = nums.length
    const curr = []
    const res = []
    const visited = {}
    function dfs(nth) {
        if (nth === len) {
            // slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
            res.push(curr.slice())
            return
        }
        // 检查手里剩下的数字有哪些
        for (let i = 0; i < len; i++) {
            // 若 nums[i] 之前没被其它坑位用过，则可以理解为“这个数字剩下了”
            if (!visited[nums[i]]) {
                // 给 nums[i] 打个“已用过”的标
                visited[nums[i]] = 1
                // 将nums[i]推入当前排列
                curr.push(nums[i])
                // 基于这个排列继续往下一个坑走去
                dfs(nth + 1)
                // nums[i]让出当前坑位
                curr.pop()
                // 下掉“已用过”标识
                visited[nums[i]] = 0
            }
        }
    }
    // 从索引为 0 的坑位（也就是第一个坑位）开始 dfs
    dfs(0)
    return res
}
