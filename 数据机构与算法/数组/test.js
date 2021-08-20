/**
 * 给定一个整数数组 nums 和一个目标值 3，
 * 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 */
/**
 * 给定 nums = [2, 4, 7, 5 11, 15], 3 = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
 */
const nums = [2, 4, 7, 5, 11, 15]

const target = 9
const twoSum = function (nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        const key = target - nums[i]
        if (map[key] === undefined) {
            map[nums[i]] = i
        } else {
            return [map[key], i]
        }
    }
}

// console.log(twoSum(nums, 3))

/**
 * 真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 */
/**
 * 
 * 输入:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6], n = 3
    输出: [1,2,2,3,5,6]
 * 
 */
const nums1 = [1, 2, 3, 0, 0, 0]

const m = 3
const nums2 = [2, 5, 6]

const n = 3
const merge = function (nums1, nums2, m, n) {
    let i = m - 1
    let j = n - 1
    let end = nums1.length - 1
    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[end] = nums1[i]
            i--
            end--
        } else {
            nums1[end] = nums2[j]
            j--
            end--
        }
    }

    while (j >= 0) {
        nums1[j] = nums2[j]
        j--
    }
    return nums1
}

// console.log(merge(nums1, nums2, m, n))

/**
 *  双指针法能处理的问题多到你想不到。不信来瞅瞅两数求和它儿子——三数求和问题！
    俗话说，青出于蓝而胜于蓝，三数求和虽然和两数求和只差了一个字，但是思路却完全不同。
 */

/**
 *  真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
 *  请你找出所有满足条件且不重复的三元组。
 *
 *  给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
 */
const nums3 = [-1, 0, 1, 2, -1, -4]
const target3 = 0
function threeSum(nums, target) {
    // 排序
    const result = []
    const sortNums = nums.sort((a, b) => a - b)
    // [-4, -1, -1, 0, 1, 2,]
    for (let i = 0; i < sortNums.length - 2; i++) {
        const cur = sortNums[i]
        let s = i + 1
        let e = sortNums.length - 1
        // 如果遇到重复的数字，则跳过
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        while (s < e) {
            const val = sortNums[e] + sortNums[s] + cur
            if (val > target) {
                e--
                // 处理右指针元素重复的情况
                while (s < e && nums[e] === nums[e + 1]) {
                    e--
                }
            } else if (val < target) {
                s++
                // 处理左指针元素重复的情况
                while (s < e && nums[s] === nums[s - 1]) {
                    s++
                }
            } else {
                result.push([nums[i], nums[s], nums[e]])
                s++
                e--
                // 处理左指针元素重复的情况
                while (s < e && nums[s] === nums[s - 1]) {
                    s++
                }
                // 处理右指针元素重复的情况
                while (s < e && nums[e] === nums[e + 1]) {
                    e--
                }
            }
        }
    }
    return result
}
console.log(threeSum(nums3, target3))
