// 构造一个对象
const WordDictionary = function () {
    this.words = new Map()
}

WordDictionary.prototype.addWord = function (word) {
    // 以 word 的 length 为 key
    const len = word.length
    if (this.words.has(len)) {
        this.words.get(len).push(word)
    } else {
        this.words.set(len, [word])
    }
}

WordDictionary.prototype.search = function (word) {
    const len = word.length
    if (!this.words.has(len)) {
        return false
    }
    if (!word.includes('.')) {
        return this.words.get(len).some((item) => item === word)
    }
    const reg = new RegExp(word)
    return this.words.get(len).some((item) => reg.test(item))
}

const util = new WordDictionary()
util.addWord('hello')
util.addWord('abb')
util.addWord('cdd')
const aa = util.search('a..')
console.log(aa)
