let calculator = {
     values: [],
    sum: function(){
        return this.values.reduce((a, b) => a + b)
    },
    sub: function() {
        return this.values.reduce((a, b) => a - b)
    },
    mul: function() {
        return this.values.reduce((a, b) => a * b)
    },
    div: function() {
        if (this.values.includes(0)){
            return console.log("Ops c'è un problema, non puoi dividere per 0")
        } else return this.values.reduce((a, b) => a / b)
        
    }
  }
  
  calculator.values = [9, 2];
  console.log( calculator.sum() )
  console.log( calculator.sub() )
  console.log( calculator.mul() )
  console.log( calculator.div() )
