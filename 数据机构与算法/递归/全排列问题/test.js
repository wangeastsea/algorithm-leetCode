/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 理解力增强了
// 入参是一个数组
const permute = function (nums) {
    // 缓存数组的长度
    const len = nums.length
    // curr 变量用来记录当前的排列内容
    const curr = []
    // res 用来记录所有的排列顺序
    const res = []
    // visited 用来避免重复使用同一个数字
    const visited = {}
    // 定义 dfs 函数，入参是坑位的索引（从 0 计数）
    function dfs(nth) {
        // 若遍历到了不存在的坑位（第 len+1 个），则触碰递归边界返回
        if (nth === len) {
            // 此时前 len 个坑位已经填满，将对应的排列记录下来
            // 浅拷贝一份
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
                // 下掉“已用过
                visited[nums[i]] = 0
            }
        }
    }
    // 从索引为 0 的坑位（也就是第一个坑位）开始 dfs
    dfs(0)
    return res
}

// console.log(permute([1, 2, 3]))

// DFS 思想为指南， 递归算法为武器
function permute1(nums) {
    const len = nums.length
    // 放所有的排列
    const arrs = []
    // 标记当前已经被访问的元素
    const visitors = {}
    // curr 变量用来记录当前的排列内容
    const curr = []
    // nth 表示的是第几个坑位
    function dfs(nth) {
        if (nth === len) {
            arrs.push(curr.slice())
        }
        for (let i = 0; i < nums.length; i++) {
            if (!visitors[i]) {
                // 标记已经被访问了
                visitors[i] = 1
                curr.push(nums[i])
                // 继续走当前排列的下一个
                dfs(nth + 1)
                visitors[i] = 0
                curr.pop()
            }
        }
    }
    dfs(0)
    return arrs
}

console.log(permute1([1, 2, 3]))
