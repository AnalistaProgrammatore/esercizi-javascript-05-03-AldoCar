
var randomLetter = []

function add(letter){
    randomLetter.push(letter)
    
}

add("a")
add("l")
add("d")
add("o")

function convertStr(randomLetter, item) {
    return randomLetter + item
}

var converted = randomLetter.reduce(convertStr)
console.log(converted)
