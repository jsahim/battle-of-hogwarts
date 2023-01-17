class Game {
  constructor(humanPlayerIns, computerPlayerIns){
    this.human = humanPlayerIns
    this.computer = computerPlayerIns
    this.type = null
    this.currentWinner = null
    this.roundsCompleted = 0
  }
  findWinner(userSelect, compSelect) {
    var gameWinner
    if (compSelect === userSelect) {
      gameWinner = undefined
    } else if (userSelect === "bombarda" && (compSelect === "diffindo" || compSelect === "serpensortia")) {
      this.human.wins++
      gameWinner= this.human
    } else if (userSelect === "ebublio" && (compSelect === "bombarda" || compSelect === "expelliarmus")) {
      this.human.wins++
      gameWinner = this.human
    } else if (userSelect === "diffindo" && (compSelect === "ebublio" || compSelect === "serpensortia")) {
      this.human.wins++
      gameWinner = this.human
    } else if (userSelect === "serpensortia" && (compSelect === "ebublio" || compSelect === "expelliarmus")) {
      this.human.wins++
      gameWinner = this.human
    } else if (userSelect === "expelliarmus" && (compSelect === "diffindo" || compSelect === "bombarda")) {
      this.human.wins++
      gameWinner = this.human
    } else {
      this.computer.wins++
      gameWinner = this.computer
    }
    this.roundsCompleted++
    this.currentWinner = gameWinner
    showWandTransition()
    setTimeout(function(){
      updateDisplayResults(gameWinner, userSelect, compSelect)
    }, 2000);
  }
}

