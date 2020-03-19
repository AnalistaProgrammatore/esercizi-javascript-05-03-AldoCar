let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

const multiplyNumeric = function (menu, multiplier) {
    var newMenu = {}
    for (let val in menu){
        if (typeof menu[val]=== "number"){
            menu[val] * multiplier
        }            
    }
    return newMenu
}

const newMenu = multiplyNumeric(menu, 2)
console.log(newMenu)
