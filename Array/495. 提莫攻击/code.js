/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    // 重点是判断叠加的时间片，叠加的时间不可叠加
    // 那么如何判断叠加的时间呢？
    let i = 0
    const len = timeSeries.length
    let durationTime = 0
    while (i < len) {
        if (i === 0) {
            durationTime = duration
        }
        if (i !== 0) {
            const val = timeSeries[i] - timeSeries[i - 1]
            // 等于或大于duration时候，可以直接累加
            if (val >= duration) {
                durationTime += duration
            } else {
                // 如果小于duration
                durationTime += val
            }
        }
        i++
    }
    return durationTime
}
console.log(findPoisonedDuration([1, 2, 3, 4, 5], 5))
