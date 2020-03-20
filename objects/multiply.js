let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}


const multiplyNumeric = function (obj, multiplier) {
    var newMenu = {}
    for (let key in obj){
        if (typeof obj[key] == "string"){
            newMenu[key] = "My menu"
            
        }else{
            newMenu[key] = obj[key]*2
        }
        
    }

    return newMenu

}

const newMenu = multiplyNumeric(menu, 2)
console.log(newMenu)
