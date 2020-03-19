let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumSalaries(){
    let total = 0
    for (obj in salaries){
        total = total + salaries[obj]
    }
    return total
}

console.log(sumSalaries(salaries))
