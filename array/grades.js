function main(){
    this.grades = []
    this.add = add
    this.avg = avg
}

function add(grade) {
    this.grades.push(grade)
}

function avg(){
    var total = 0
    return this.grades.reduce((acc, curr) => acc + curr) / this.grades.length

}

var gradeList = new main()
gradeList.add(8)
gradeList.add(6)
gradeList.add(5)
gradeList.add(6)
gradeList.add(2)

console.log(gradeList.avg())
