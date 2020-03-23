class Chaining{
    costructor(){
       this.step = 0
    }
    up() {
        this.step++
       return this
    }
    down() {
      this.step--
      return this
    }
    showStep() { // shows the current step
      console.log( this.step )
    }
}
const newLadder = new Chaining()
newLadder.up().up().down().showStep()
