const WordDictionary = function () {
    this.words = {}
}

WordDictionary.prototype.addWord = function (word) {
    if (this.words[word.length]) {
        this.words[word.length].push(word)
    } else {
        this.words[word.length] = [word]
    }
}

WordDictionary.prototype.search = function (word) {
    if (!this.words[word.length]) {
        return false
    }
    const len = word.length
    if (!word.includes('.')) {
        return this.words[len].includes(word)
    }
    const reg = new RegExp(word)
    return this.words[len].some((item) => {
        return reg.test(item)
    })
}

// map， class 改写

// class WordDictionary {
//     constructor() {
//         this.words = new Map()
//     }
//     addWord (word) {
//         let len = word.length
//         if (this.words.has(len)) {
//             this.words.get(len).push(word)
//         } else {
//             this.words.set(len, [word])
//         }
//     }
//     search (word) {
//         let len = word.length
//         if (!this.words.has(len)) {
//             return false
//         }
//         if (!word.includes('.')) {
//             return this.words.get(len).includes(word)
//         }
//         const reg = new RegExp(word)
//         return this.words.get(ken).some(item => {
//             return reg.test(item)
//         })
//     }
// }
