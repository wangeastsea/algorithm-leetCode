/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */

// 字符串长度不相等, 直接返回false
// 字符串相等的时候, 只要有重复的元素就返回true
// A, B字符串有不相等的两个地方, 需要查看它们交换后是否相等即可.

var buddyStrings = function (A, B) {
    if (A.length !== B.length) return false
    if (A === B) {
        const reg = /([a-z]+)\1{1,}/g
        return reg.test(A)
    }
    const l = A.length
    const AObj = {}
    const BObj = {}
    let i = 0
    let bool = true
    while (i < l) {
        BObj[B[i]] ? BObj[B[i]]++ : (BObj[B[i]] = 1)
        AObj[A[i]] ? AObj[A[i]]++ : (AObj[A[i]] = 1)
        i++
    }
    const AKey = Object.keys(AObj)
    const Bkey = Object.keys(BObj)
    for (let j = 0; j < AKey.length; j++) {
        if (AObj[AKey[j]] !== BObj[AKey[j]]) {
            bool = false
        }
        if (AKey[j] !== Bkey[j]) {
            const aj = A.indexOf(AKey[j])
            const bj = A.indexOf(Bkey[j])
            const Arr = A.split('')
            Arr.splice(aj, 1, Bkey[j])
            Arr.splice(bj, 1, AKey[j])
            if (Arr.join('') !== B) {
                bool = false
            }
        }
    }
    // 如果含有的字符都相等，则比较2个字符串第一次不相等的地方调换为位置，查看是否相等
    return bool
}

// console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb'))
// console.log(buddyStrings('abcd', 'badc'))
// console.log(buddyStrings('aa', 'aa'))
// console.log(buddyStrings('ab', 'ba'))
console.log(buddyStrings('abab', 'abab'))
