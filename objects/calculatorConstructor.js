class Calculator{
    costructor(){
    values = []
    }
   sum(){
       return this.values.reduce((a, b) => a + b)
   }
   sub() {
       return this.values.reduce((a, b) => a - b)
   }
   mul() {
       return this.values.reduce((a, b) => a * b)
   }
   div() {
       if (this.values.includes(0)){
           return console.log("Ops c'è un problema, non puoi dividere per 0")
       } else return this.values.reduce((a, b) => a / b)
       
   }
 }
 
const newCalculator = new Calculator
newCalculator.values = [9, 2];
console.log( newCalculator.sum() )
console.log( newCalculator.sub() )
console.log( newCalculator.mul() )
console.log( newCalculator.div() )
