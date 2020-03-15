let wordsObj = {
    words: [],
    add(word) {
        this.words.push(word)
    },
    wordForward(){
        return this.words.join(", ")
    },
    wordBackward(){
        return this.words.reduce((acc, curr) => curr + ", " + acc)
    }
}

wordsObj.add("primavera")
wordsObj.add("estate")
wordsObj.add("autunno")
wordsObj.add("inverno")

console.log(wordsObj.wordForward())
console.log(wordsObj.wordBackward())
